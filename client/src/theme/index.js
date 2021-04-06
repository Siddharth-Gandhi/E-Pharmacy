import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#F4F6F8',
      // default: '#171C24',
      paper: colors.common.white
      // paper: '#222B36'
      // paper: '#e7e6e1'
    },
    primary: {
      contrastText: '#ffffff',
      // main: '#5664d2'
      // main: '#214151'
      main: '#222B36'
    },
    text: {
      primary: '#172b4d',
      // primary: '#919EA5',
      secondary: '#6b778c'
      // secondary: '#ffffff'
    }
  },
  shadows,
  typography
});

export default theme;
