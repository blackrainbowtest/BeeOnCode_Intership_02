import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Processes from './components/Processes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Processes />
    </ThemeProvider>
  );
}

export default App;
