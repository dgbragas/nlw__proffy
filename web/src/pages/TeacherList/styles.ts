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

  label {
    color: ${({ theme: { colors } }) => colors.textInPrimary};
  }

  ${media.greaterThan('medium')`
    align-items: center;
    bottom: -28px;
    column-gap: 16px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    position: absolute;
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
