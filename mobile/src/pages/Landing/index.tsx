import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import * as S from './styles';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <S.Container>
      <Image source={landingImage} />

      <S.Title>
        Seja bem-vindo, {'\n'}
        <S.TitleBold>O que deseja fazer?</S.TitleBold>
      </S.Title>

      <S.ButtonsContainer>
        <S.ButtonPrimary onPress={() => navigate('Study')}>
          <Image source={studyIcon} />
          <S.ButtonText>Estudar</S.ButtonText>
        </S.ButtonPrimary>

        <S.Button onPress={() => navigate('GiveClasses')}>
          <Image source={giveClassesIcon} />
          <S.ButtonText>Dar aulas</S.ButtonText>
        </S.Button>
      </S.ButtonsContainer>

      <S.TotalConnections>
        Total de 285 conexões já realizadas <Image source={heartIcon} />
      </S.TotalConnections>
    </S.Container>
  );
};

export default Landing;
