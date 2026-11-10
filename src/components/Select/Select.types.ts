export interface SelectOption<V extends string = string> {
  value: V;
  label: string;
  disabled?: boolean;
}

export interface SelectProps<V extends string = string> {
  options: SelectOption<V>[];
  /** Valor seleccionado (controlado). */
  value?: V | null;
  /** Valor inicial (no controlado). */
  defaultValue?: V | null;
  /** Se llama al elegir una opción. */
  onChange?: (value: V, option: SelectOption<V>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  error?: boolean | string;
  success?: boolean | string;
  disabled?: boolean;
  required?: boolean;
  /** Nombre para formularios: se envía en un input oculto. */
  name?: string;
  id?: string;
  className?: string;
  /** Se llama al abrir o cerrar la lista. */
  onOpenChange?: (open: boolean) => void;
}
