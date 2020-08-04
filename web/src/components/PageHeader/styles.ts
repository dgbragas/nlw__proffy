import styled from 'styled-components';
import media from 'styled-media-query';

export const Header = styled.header`
  background-color: ${({ theme: { colors } }) => colors.primary};
  display: flex;
  flex-direction: column;

  ${media.greaterThan('medium')`
    height: 340px;
  `}
`;

export const TopBarWrapper = styled.div`
  align-items: center;
  color: ${({ theme: { colors } }) => colors.textInPrimary};
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1.6rem 0;
  width: 90%;

  > img {
    height: 1.6rem;
  }

  a {
    height: 3.2rem;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }

  ${media.greaterThan('medium')`
    max-width: 1110px;
  `}
`;

export const HeaderContent = styled.div`
  margin: 3.2rem auto;
  position: relative;
  width: 90%;

  strong {
    color: ${({ theme: { colors } }) => colors.titleInPrimary};
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
  }

  ${media.greaterThan('medium')`
    align-items: flex-tart;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    max-width: 740px;
    padding-bottom: 48px;

    strong {
      max-width: 350px;
    }
  `}
`;
