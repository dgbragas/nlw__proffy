import React, { InputHTMLAttributes } from 'react';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => (
  <S.FormGroup>
    <label htmlFor={name}>
      {label}
      <input type="text" id={name} {...rest} />
    </label>
  </S.FormGroup>
);

export default Input;
