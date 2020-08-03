import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-size: 60%;
    margin: 0%;
    padding: 0;
    outline: 0;
    -webkit-font-smoothing: antialiased;

    &:not(h1, h2, h3, h4, h5, h6) {
      font-family: 'Poppins', sans-serif;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Archivo', sans-serif;
  }

  html, body, #root {
    background-color: ${({ theme: { colors } }) => colors.background};
    min-height: 100%;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;
