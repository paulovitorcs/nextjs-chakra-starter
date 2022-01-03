import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import fonts from './fonts';
import components from './components';
import styles from './styles';
import typography from './typography';

const theme = extendTheme({
  colors,
  fonts,
  components,
  styles,
  typography,
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

console.log(theme);

export default theme;
