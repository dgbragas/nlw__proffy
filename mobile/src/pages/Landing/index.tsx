import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import api from '../../services/api';

import * as S from './styles';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/connections');
      setTotalConnections(data.total);
    })();
  }, []);

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
        Total de {totalConnections} conexões já realizadas{' '}
        <Image source={heartIcon} />
      </S.TotalConnections>
    </S.Container>
  );
};

export default Landing;
