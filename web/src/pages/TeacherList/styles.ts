import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  height: 100vh;
  width: 700vw;

  ${media.greaterThan('medium')`
    max-width: 100%;
  `}
`;

export const SearchForm = styled.form`
  margin-top: 3.2rem;

  div {
    margin-top: 1.4rem;
  }

  label {
    color: ${({ theme: { colors } }) => colors.textInPrimary};
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
    bottom: -28px;
    column-gap: 16px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    position: absolute;

    div {
      margin-top: 0;
    }
  `}
`;

export const MainContent = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  ${media.greaterThan('medium')`
    margin: 0 auto;
    max-width: 740px;
    padding: 3.2rem 0;
  `}
`;
