import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: grey[900],
      dark: grey[800],
      light: grey[500],
      contrastText: '#123456',
    },
    background: {
      paper: '#F7FFF2',
      default: '#F7FFF2',
    }
  }
});
