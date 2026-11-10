import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { vi } from 'vitest';
import { Alert, Button, Card, Checkbox, Input, Modal, Navbar, Select, SOSButton, Switch, colors } from '../index';

describe('Button', () => {
  it('ejecuta onClick', async () => {
    const fn = vi.fn();
    render(<Button onClick={fn}>Guardar</Button>);
    await userEvent.click(screen.getByRole('button', { name: 'Guardar' }));
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('no ejecuta onClick en loading ni disabled', async () => {
    const fn = vi.fn();
    const { rerender } = render(<Button loading onClick={fn}>Guardar</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
    rerender(<Button disabled onClick={fn}>Guardar</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(fn).not.toHaveBeenCalled();
  });
  it('refleja variante y tamaño', () => {
    render(<Button variant="secondary" size="large">Ok</Button>);
    const b = screen.getByRole('button');
    expect(b.dataset.variant).toBe('secondary');
    expect(b.dataset.size).toBe('large');
  });
  it('inyecta los estilos con los tokens de Figma', () => {
    render(<Button>Ok</Button>);
    const css = document.getElementById('sora-ui-styles')?.textContent ?? '';
    expect(css).toContain(`--sora-color-action-primary: ${colors.action.primary}`);
  });
});

describe('Input', () => {
  it('muestra error con aria-invalid', () => {
    render(<Input label="Correo electrónico" error="El correo no es válido" />);
    expect(screen.getByLabelText('Correo electrónico')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByRole('alert')).toHaveTextContent('El correo no es válido');
  });
  it('valida al salir del campo', async () => {
    render(<Input label="Correo" validate={(v) => (v.includes('@') ? undefined : 'Correo inválido')} />);
    const input = screen.getByLabelText('Correo');
    await userEvent.type(input, 'hola');
    expect(screen.queryByText('Correo inválido')).toBeNull();
    await userEvent.tab();
    expect(screen.getByText('Correo inválido')).toBeInTheDocument();
    await userEvent.type(input, '@sora.mx');
    expect(screen.queryByText('Correo inválido')).toBeNull();
  });
});

describe('Checkbox y Switch', () => {
  it('Checkbox controlado cambia con onChange', async () => {
    function Demo() {
      const [accepted, setAccepted] = useState(false);
      return <Checkbox label="Acepto" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />;
    }
    render(<Demo />);
    const cb = screen.getByLabelText('Acepto');
    expect(cb).not.toBeChecked();
    await userEvent.click(cb);
    expect(cb).toBeChecked();
  });
  it('Switch no controlado alterna y llama onCheckedChange', async () => {
    const fn = vi.fn();
    render(<Switch label="Compartir ubicación" onCheckedChange={fn} />);
    const sw = screen.getByRole('switch', { name: 'Compartir ubicación' });
    await userEvent.click(sw);
    expect(sw).toBeChecked();
    expect(fn).toHaveBeenCalledWith(true);
  });
});

describe('Select', () => {
  const options = [
    { value: 'mama', label: 'Mamá' },
    { value: 'hermana', label: 'Hermana' },
    { value: 'amiga', label: 'Amiga', disabled: true },
  ];
  it('abre, selecciona con clic y cierra', async () => {
    const fn = vi.fn();
    render(<Select label="Contacto" options={options} onChange={fn} />);
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('option', { name: 'Hermana' }));
    expect(fn).toHaveBeenCalledWith('hermana', options[1]);
    expect(screen.queryByRole('listbox')).toBeNull();
    expect(screen.getByRole('combobox')).toHaveTextContent('Hermana');
  });
  it('funciona con teclado y cierra con Esc', async () => {
    const fn = vi.fn();
    render(<Select label="Contacto" options={options} onChange={fn} />);
    screen.getByRole('combobox').focus();
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{Enter}');
    expect(fn).toHaveBeenCalledWith('hermana', options[1]);
    await userEvent.keyboard('{ArrowDown}{Escape}');
    expect(screen.queryByRole('listbox')).toBeNull();
  });
});

describe('Modal', () => {
  it('se abre y se cierra con X, Esc y fondo', async () => {
    const onClose = vi.fn();
    const { rerender } = render(<Modal open={false} onClose={onClose} title="Confirmar">Contenido</Modal>);
    expect(screen.queryByRole('dialog')).toBeNull();
    rerender(<Modal open onClose={onClose} title="Confirmar">Contenido</Modal>);
    expect(screen.getByRole('dialog', { name: 'Confirmar' })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Cerrar' }));
    await userEvent.keyboard('{Escape}');
    fireEvent.mouseDown(document.querySelector('.sora-modal__overlay')!);
    expect(onClose).toHaveBeenCalledTimes(3);
  });
});

describe('Otros', () => {
  it('Alert se puede cerrar', async () => {
    const fn = vi.fn();
    render(<Alert type="success" title="Estás a salvo" onClose={fn} />);
    await userEvent.click(screen.getByRole('button', { name: 'Cerrar aviso' }));
    expect(fn).toHaveBeenCalled();
  });
  it('Card interactiva responde a teclado', async () => {
    const fn = vi.fn();
    render(<Card onClick={fn}>Tarjeta</Card>);
    screen.getByRole('button').focus();
    await userEvent.keyboard('{Enter}');
    expect(fn).toHaveBeenCalled();
  });
  it('Navbar cambia de pestaña seleccionada', async () => {
    const fn = vi.fn();
    render(<Navbar onChange={fn} />);
    await userEvent.click(screen.getByRole('button', { name: 'Mi red' }));
    expect(fn).toHaveBeenCalledWith('red');
    expect(screen.getByRole('button', { name: 'Mi red' })).toHaveAttribute('aria-current', 'page');
  });
  it('SOSButton dispara onTrigger solo si se mantiene presionado', () => {
    vi.useFakeTimers({ toFake: ['requestAnimationFrame', 'cancelAnimationFrame', 'performance'] });
    const onTrigger = vi.fn();
    const onCancel = vi.fn();
    render(<SOSButton onTrigger={onTrigger} onCancel={onCancel} holdDuration={3000} />);
    const btn = screen.getByRole('button');
    fireEvent.pointerDown(btn);
    act(() => { vi.advanceTimersByTime(1000); });
    fireEvent.pointerUp(btn);
    expect(onCancel).toHaveBeenCalled();
    expect(onTrigger).not.toHaveBeenCalled();
    fireEvent.pointerDown(btn);
    act(() => { vi.advanceTimersByTime(3100); });
    expect(onTrigger).toHaveBeenCalledTimes(1);
    expect(btn).toHaveAccessibleName('Alerta enviada');
    vi.useRealTimers();
  });
});
