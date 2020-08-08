import React from 'react';

import * as S from './styles';
import PageHeader from '../../components/PageHeader';

const Favorites: React.FC = () => {
  return (
    <S.Container>
      <PageHeader title="Meus Proffys favoritos" />
    </S.Container>
  );
};

export default Favorites;
