import styled from 'styled-components';
import media from 'styled-media-query';

export const FormGroup = styled.div`
  position: relative;

  & + div {
    margin-top: 1.4rem;
  }

  &:focus-within::after {
    content: '';
    background-color: ${({ theme: { colors } }) => colors.primaryLight};
    bottom: 7px;
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
    font-size: 1.4rem;

    textarea {
      background-color: ${({ theme: { colors } }) => colors.background};
      border: 1px solid ${({ theme: { colors } }) => colors.lineInWhite};
      border-radius: 0.8rem;
      font: 1.6rem Archivo;
      height: 16rem;
      margin-top: 0.8rem;
      min-height: 8rem;
      outline: 0;
      padding: 1.2rem 1.6rem;
      resize: vertical;
      width: 100%;
    }
  }
`;
