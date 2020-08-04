import styled from 'styled-components';
import media from 'styled-media-query';

export const TeacherItem = styled.article`
  background-color: ${({ theme: { colors } }) => colors.boxBase};
  border: 1px solid ${({ theme: { colors } }) => colors.lineInWhite};
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;

  > p {
    font-size: 1.6rem;
    line-height: 2.8rem;
    padding: 0 2rem;
  }

  footer {
    align-items: center;
    background-color: ${({ theme: { colors } }) => colors.boxFooter};
    border-top: 1px solid ${({ theme: { colors } }) => colors.lineInWhite};
    display: flex;
    justify-content: space-between;
    margin-top: 3.2rem;
    padding: 3.2rem 2rem;

    p strong {
      color: ${({ theme: { colors } }) => colors.primary};
      display: block;
      font-size: 1.6rem;
    }

    button {
      align-items: center;
      background: ${({ theme: { colors } }) => colors.secondary};
      border: 0;
      border-radius: 0.8rem;
      color: ${({ theme: { colors } }) => colors.buttonText};
      font: 700 1.4rem Archivo;
      display: flex;
      height: 5.6rem;
      justify-content: space-evenly;
      transition: 0.2s;
      width: 20rem;

      &:hover {
        background: ${({ theme: { colors } }) => colors.secondaryDark};
      }
    }
  }

  ${media.greaterThan('medium')`
    > p {
      padding: 0 3.2rem;
    }

    footer {
      padding: 3.2rem;

      p strong {
        display: initial;
        margin-left: 1.6rem;
      }

      button {
        width: 24.5rem;
        font-size: 1.6rem;
        justify-content: center;

        img {
          margin-right: 1.6rem;
        }
      }
    }
  `}
`;

export const TeacherInfos = styled.header`
  align-items: center;
  display: flex;
  padding: 3.2rem 2rem;

  img {
    border-radius: 50%;
    height: 8rem;
    width: 8rem;
  }

  div {
    margin-left: 2.4rem;

    strong {
      color: ${({ theme: { colors } }) => colors.textTitle};
      display: block;
      font: 700 2.4rem Archivo;
    }

    span {
      display: block;
      font-size: 1.6rem;
      margin-top: 0.4rem;
    }
  }

  ${media.greaterThan('medium')`
    padding: 3.2rem;
  `}
`;
