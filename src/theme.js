import { createMuiTheme } from '@material-ui/core/styles';
import { red, blueGrey } from '@material-ui/core/colors';

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
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: blueGrey[100]
        }
      }
    }
  }
});

export default theme;
