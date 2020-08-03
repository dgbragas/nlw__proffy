import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  align-items: center;
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.textInPrimary};
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export const LandingContent = styled.div`
  max-width: 700px;
  width: 90vw;

  ${media.greaterThan('large')`
    display: grid;
    grid-template-areas:
      "logo hero hero"
      "buttons buttons total";
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 350px 1fr;
    max-width: 1100px;
  `}
`;

export const LogoContainer = styled.div`
  margin-bottom: 3.2rem;
  text-align: center;

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  img {
    height: 10rem;
  }

  ${media.greaterThan('large')`
    align-self: center;
    grid-area: logo;
    margin: 0;
    text-align: left;

    h2 {
      font-size: 3.6rem;
      text-align: initial;
    }

    img {
      height: 100%;
    }
  `}
`;

export const HeroImage = styled.img`
  width: 100%;

  ${media.greaterThan('large')`
    grid-area: hero;
    justify-self: end;
  `}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a:first-child {
    margin-right: 1.6rem;
  }

  ${media.greaterThan('large')`
    grid-area: buttons;
    justify-content: flex-start;

    a {
      font-size: 2.4rem;
    }
  `}
`;

export const StudyButton = styled.a`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.primaryLighter};
  border-radius: 0.8rem;
  color: ${({ theme: { colors } }) => colors.buttonText};
  display: flex;
  font: 700 2rem Archivo;
  height: 10.4rem;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s;
  width: 30rem;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.primaryLight};
  }

  img {
    margin-right: 0.8rem;
    width: 4rem;
  }
`;

export const ClassesButton = styled(StudyButton)`
  background-color: ${({ theme: { colors } }) => colors.secondary};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.secondaryDark};
  }
`;

export const TotalConnections = styled.span`
  align-items: center;
  display: flex;
  font-size: 1.4rem;
  justify-content: center;

  img {
    margin-left: 0.8rem;
  }

  ${media.greaterThan('large')`
    grid-area: total;
    justify-self: end;
  `}
`;
