import React, { SelectHTMLAttributes } from 'react';

import * as S from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => (
  <S.FormGroup>
    <label htmlFor={name}>{label}</label>
    <select id={name} defaultValue="" {...rest}>
      <option value="" disabled hidden>
        Selecione uma opção
      </option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </S.FormGroup>
);

export default Select;
