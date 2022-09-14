import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import mainTheme from 'themes/mainTheme';

const MUItheme2 = createTheme({
  palette: {
    primary: {
      main: mainTheme.color.base,
    },
    secondary: {
      main: mainTheme.color.secondary,
    },
    text: {
      primary: mainTheme.color.primary,
      light: mainTheme.color.base,
    },
    background: {
      default: mainTheme.color.base,
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontSize: 14,
    htmlFontSize: 10,
  },
});

export const MUItheme = responsiveFontSizes(MUItheme2);
