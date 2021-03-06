import { createGlobalStyle, css } from 'styled-components';
import media from 'styled-media-query';

export default createGlobalStyle`
  ${css`
    :root {
      font-size: 60%;
    }
  `}

  ${media.greaterThan('medium')`
    ${css`
      :root {
        font-size: 62.5%;
      }
    `}
  `}

  * {
    box-sizing: border-box;
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
    font-weight: 700;
  }

  html, body, #root {
    background-color: ${({ theme: { colors } }) => colors.background};
    min-height: 100vh;
  }

  #root {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  body, input, button, textarea {
    color: ${({ theme: { colors } }) => colors.textBase};
    font: 500 1.6rem 'Poppins';
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;
