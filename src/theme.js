import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#545662', // Основной цвет
      text: '#ffffff', // Цвет текста
      add: '#0FB358', // Цвет добавления (при наведении и в фокусе)
      border: '#0FB358', // Цвет рамки при наведении и в фокусе
    },
    secondary: {
      main: '#44444C', // Основной цвет фона инпута
      text: '#000000', // Цвет текста инпута
      add: '#0FAF52', // Цвет рамки инпута при наведении и в фокусе
    },
    // Добавленные цвета
    hover: {
      main: '#3c3c3c', // Цвет рамки при наведении
      text: '#ffffff',  // Цвет текста при наведении (если нужно)
    },
    focused: {
      main: '#0FB358', // Цвет рамки при фокусе
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
    borderRadius: 8, // Добавляем радиус границ
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