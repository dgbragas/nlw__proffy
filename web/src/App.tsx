import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import Routes from './routes';

import GlobalStyle from './styles/global';
import colors from './styles/colors';

const App: React.FC = () => {
  const themeColors: DefaultTheme = colors;

  return (
    <ThemeProvider theme={themeColors}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
