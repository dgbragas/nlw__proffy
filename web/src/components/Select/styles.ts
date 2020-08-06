import styled from 'styled-components';

export const FormGroup = styled.div`
  position: relative;

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

  label {
    font-size: 1.4rem;
  }

  select {
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
`;
