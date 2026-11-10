import { cssVariables } from './variables';
import { baseStyles, fontImport } from './base';
import { textStyles } from '../components/Text/Text.styles';
import { spinnerStyles } from '../components/Spinner/Spinner.styles';
import { buttonStyles } from '../components/Button/Button.styles';
import { fieldStyles, inputStyles } from '../components/Input/Input.styles';
import { checkboxStyles } from '../components/Checkbox/Checkbox.styles';
import { switchStyles } from '../components/Switch/Switch.styles';
import { selectStyles } from '../components/Select/Select.styles';
import { modalStyles } from '../components/Modal/Modal.styles';
import { cardStyles } from '../components/Card/Card.styles';
import { alertStyles } from '../components/Alert/Alert.styles';
import { avatarStyles } from '../components/Avatar/Avatar.styles';
import { badgeStyles } from '../components/Badge/Badge.styles';
import { navbarStyles } from '../components/Navbar/Navbar.styles';
import { sosStyles } from '../components/SOSButton/SOSButton.styles';
import { contactCardStyles } from '../components/ContactCard/ContactCard.styles';

export { cssVariables } from './variables';

/** Hoja de estilos completa de la biblioteca (se inyecta automáticamente). */
export const sheet = [
  fontImport,
  cssVariables,
  baseStyles,
  textStyles,
  spinnerStyles,
  buttonStyles,
  fieldStyles,
  inputStyles,
  checkboxStyles,
  switchStyles,
  selectStyles,
  modalStyles,
  cardStyles,
  alertStyles,
  avatarStyles,
  badgeStyles,
  navbarStyles,
  sosStyles,
  contactCardStyles,
].join('\n');
