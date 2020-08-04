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

  ${media.greaterThan('medium')`
    bottom: -28px;
    column-gap: 16px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    position: absolute;
  `}
`;

export const FormGroup = styled.div`
  position: relative;

  & + div {
    margin-top: 1.4rem;
  }

  &:focus-within::after {
    content: '';
    background-color: ${({ theme: { colors } }) => colors.primaryLight};
    bottom: 0;
    height: 2px;
    left: 1.6rem;
    position: absolute;
    right: 1.6rem;
    width: calc(100% - 3.2rem);
  }

  ${media.greaterThan('medium')`
    & + div {
      margin-top: 0;
    }
  `}

  label {
    color: ${({ theme: { colors } }) => colors.textInPrimary};
    font-size: 1.4rem;

    input {
      background-color: ${({ theme: { colors } }) => colors.background};
      border: 1px solid ${({ theme: { colors } }) => colors.lineInWhite};
      border-radius: 0.8rem;
      font: 1.6rem Archivo;
      height: 5.6rem;
      margin-top: 0.8rem;
      outline: 0;
      padding: 0 1.6rem;
      width: 100%;
    }
  }
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
