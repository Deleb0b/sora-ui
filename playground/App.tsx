import { useState } from 'react';
import {
  Alert, Avatar, Badge, Button, Card, Checkbox, ContactCard, Input, Modal,
  Navbar, Select, SOSButton, Switch, Text, colors,
} from '@sora-app/ui';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
    <Text variant="h3">{title}</Text>
    {children}
  </section>
);
const Row = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>{children}</div>
);

export default function App() {
  const [accepted, setAccepted] = useState(false);
  const [share, setShare] = useState(true);
  const [contact, setContact] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [saving, setSaving] = useState(false);
  const [tab, setTab] = useState('inicio');
  const [selectedCard, setSelectedCard] = useState('casa');

  const save = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 1500);
  };

  return (
    <div style={{ background: colors.bg.default, minHeight: '100vh' }}>
      <main style={{ maxWidth: 440, margin: '0 auto', padding: '32px 16px 120px' }}>
        <Text variant="h1">Sora UI</Text>
        <Text color="secondary" style={{ marginBottom: 32 }}>Design System Sora en React</Text>

        <Section title="Button">
          <Row>
            <Button variant="primary" onClick={() => setOpen(true)}>Enviar alerta</Button>
            <Button variant="secondary">Compartir trayecto</Button>
          </Row>
          <Row>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </Row>
          <Row>
            <Button disabled>Enviar alerta</Button>
            <Button loading={saving} onClick={save}>{saving ? 'Guardando' : 'Guardar'}</Button>
            <Button success>Enviada</Button>
          </Row>
        </Section>

        <Section title="Input">
          <Input label="Teléfono" placeholder="Escribe tu número" type="tel"
            validate={(v) => (/^\d{10}$/.test(v.replace(/\s/g, '')) ? undefined : 'Error: deben ser 10 dígitos')} />
          <Input label="Correo electrónico" defaultValue="maria@" error="El correo no es válido" />
          <Input label="Teléfono" defaultValue="55 1234 5678" success="Listo: número válido" />
          <Input label="Teléfono" placeholder="Escribe tu número" disabled />
        </Section>

        <Section title="Select">
          <Select label="Contacto de emergencia" value={contact} onChange={setContact}
            options={[{ value: 'mama', label: 'Mamá' }, { value: 'hermana', label: 'Hermana' }, { value: 'amiga', label: 'Amiga (sin verificar)', disabled: true }]} />
          <Select label="Contacto de emergencia" options={[]} error="Elige un contacto" />
        </Section>

        <Section title="Checkbox y Switch">
          <Checkbox label="Acepto términos y privacidad" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />
          <Checkbox label="Acepto términos y privacidad" error />
          <Checkbox label="Acepto términos y privacidad" disabled defaultChecked />
          <Row>
            <Switch label="Compartir ubicación" checked={share} onCheckedChange={setShare} />
            <Switch label="Desactivado" disabled />
          </Row>
        </Section>

        <Section title="Alert">
          <Alert type="success" title="Estás a salvo" message="Avisamos a tu red que llegaste bien." onClose={() => {}} />
          <Alert type="warning" title="Batería baja · 15 %" message="Conecta tu teléfono para no perder la señal." />
          <Alert type="error" title="No se pudo enviar" message="Revisa tu conexión. Reintentamos en 5 s." />
          <Alert type="info" title="Trayecto compartido" />
        </Section>

        <Section title="Card, Avatar y Badge">
          <Row>
            <Card variant="elevated" padding="small">Elevated</Card>
            <Card variant="outlined" padding="small">Outlined</Card>
            <Card variant="filled" padding="small">Filled</Card>
          </Row>
          <Row>
            {['casa', 'escuela'].map((k) => (
              <Card key={k} variant="outlined" padding="small" selected={selectedCard === k} onClick={() => setSelectedCard(k)}>
                {k === 'casa' ? 'Casa' : 'Escuela'}
              </Card>
            ))}
          </Row>
          <Row>
            <Avatar name="María" showStatus />
            <Avatar name="María" size="lg" color="coral" showStatus />
            <Avatar name="María" size="xl" />
            <Badge variant="success">Disponible</Badge>
            <Badge variant="warning" dot>Batería baja</Badge>
            <Badge variant="info">Nuevo</Badge>
          </Row>
          <ContactCard name="Mamá" onCall={() => {}} onMessage={() => {}} />
        </Section>

        <Section title="SOS Button">
          <Row>
            <SOSButton size={200} sent={sent} onTrigger={() => setSent(true)} />
            <Button variant="tonal" size="small" onClick={() => setSent(false)}>Reiniciar</Button>
          </Row>
        </Section>

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="¿Enviar alerta?"
          description="Avisaremos a tu red de confianza y compartiremos tu ubicación."
          footer={
            <>
              <Button variant="tonal" onClick={() => setOpen(false)}>Cancelar</Button>
              <Button onClick={() => setOpen(false)}>Enviar alerta</Button>
            </>
          }
        />
      </main>
      <Navbar fixed value={tab} onChange={setTab} />
    </div>
  );
}
