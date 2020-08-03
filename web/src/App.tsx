import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import GlobalStyle from './styles/global';
import colors from './styles/colors';

const App: React.FC = () => {
  const theme: DefaultTheme = colors;

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App;
