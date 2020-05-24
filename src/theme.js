import { createMuiTheme } from '@material-ui/core/styles';
import { red, grey, blueGrey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2c4871'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff',
      light: blueGrey[100]
    },
    text: {
      dark: grey[900]
    }
  }
});

export default theme;
