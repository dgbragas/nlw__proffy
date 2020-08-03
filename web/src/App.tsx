import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import GlobalStyle from './styles/global';
import colors from './styles/colors';

const App: React.FC = () => {
  const themeColors: DefaultTheme = colors;

  return (
    <>
      <ThemeProvider theme={themeColors}>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App;
