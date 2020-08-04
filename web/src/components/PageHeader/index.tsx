import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import backIcon from '../../assets/icons/back.svg';

import * as S from './styles';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => (
  <S.Header>
    <S.TopBarWrapper>
      <Link to="/">
        <img src={backIcon} alt="Voltar" />
      </Link>
      <img src={logoImg} alt="Proffy" />
    </S.TopBarWrapper>

    <S.HeaderContent>
      <strong>{title}</strong>

      {children}
    </S.HeaderContent>
  </S.Header>
);

export default PageHeader;
