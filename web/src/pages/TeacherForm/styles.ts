import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  height: 100vh;
  width: 700vw;

  header div:last-child {
    margin-bottom: 6.4rem;
  }

  ${media.greaterThan('medium')`
    max-width: 100%;

    header div:last-child {
      margin-bottom: 0;
    }
  `}
`;

export const MainContent = styled.main`
  background: ${({ theme: { colors } }) => colors.boxBase};
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  max-width: 74rem;
  overflow: hidden;
  padding-top: 6.4rem;
  width: 100%;
`;

export const Fieldset = styled.fieldset`
  border: 0;
  padding: 0 2.4rem;

  & + fieldset {
    margin-top: 6.4rem;
  }

  div {
    margin-top: 1.4rem;

    label {
      color: ${({ theme: { colors } }) => colors.textComplement};
    }
  }

  legend {
    align-items: center;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.lineInWhite};
    color: ${({ theme: { colors } }) => colors.textTitle};
    display: flex;
    font: 700 2.4rem Archivo;
    justify-content: space-between;
    margin-bottom: 2.4rem;
    padding-bottom: 1.6rem;
    width: 100%;
  }

  ${media.greaterThan('medium')`
    padding: 0 6.4rem;
  `}
`;

export const Footer = styled.footer`
  background-color: ${({ theme: { colors } }) => colors.boxFooter};
  border-top: 1px solid ${({ theme: { colors } }) => colors.lineInWhite};
  margin-top: 6.4rem;
  padding: 4rem 2.4rem;

  p {
    align-items: center;
    color: ${({ theme: { colors } }) => colors.textComplement};
    display: flex;
    font-size: 1.4rem;
    justify-content: center;
    line-height: 2.4rem;

    img {
      margin-right: 2rem;
    }
  }

  button {
    align-items: center;
    background-color: ${({ theme: { colors } }) => colors.secondary};
    border: 0;
    border-radius: 0.8rem;
    color: ${({ theme: { colors } }) => colors.buttonText};
    display: flex;
    font: 700 1.6rem Archivo;
    height: 5.6rem;
    justify-content: center;
    margin-top: 3.2rem;
    text-decoration: none;
    transition: background-color 0.2s;
    width: 100%;

    &:hover {
      background-color: ${({ theme: { colors } }) => colors.secondaryDark};
    }
  }

  ${media.greaterThan('medium')`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 4.0rem 6.4rem;

    p {
      justify-content: space-between;
    }

    button {
      margin-top: 0;
      width: 20rem;
    }
  `}
`;
