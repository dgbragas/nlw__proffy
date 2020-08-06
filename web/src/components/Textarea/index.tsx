import React, { TextareaHTMLAttributes } from 'react';

import * as S from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => (
  <S.FormGroup>
    <label htmlFor={name}>
      {label}
      <textarea id={name} {...rest} />
    </label>
  </S.FormGroup>
);

export default Textarea;
