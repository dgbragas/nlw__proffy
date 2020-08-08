import React from 'react';

import { useNavigation } from '@react-navigation/native';
import bgImage from '../../assets/images/give-classes-background.png';

import * as S from './styles';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <S.Container>
      <S.ImageBackground source={bgImage}>
        <S.Title>Quer ser um Proffy?</S.Title>
        <S.Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </S.Description>
      </S.ImageBackground>

      <S.OkButton onPress={() => goBack()} style={{ marginVertical: 40 }}>
        <S.OkButtonText>Tudo bem</S.OkButtonText>
      </S.OkButton>
    </S.Container>
  );
};

export default GiveClasses;
