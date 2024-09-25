import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#545662',
      text: '#ffffff',
      add: '#0FB358',
      border: '#0FB358',
    },
    secondary: {
      main: '#44444C',
      text: '#000000',
      add: '#0FAF52',
    },
    hover: {
      main: '#3c3c3c',
      text: '#ffffff',
    },
    focused: {
      main: '#0FB358',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    h1: {
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '2rem',
    },
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  shape: {
    borderRadius: 8,
  },
  customScale: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64,
  },
});

export default theme;