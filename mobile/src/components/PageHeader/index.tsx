import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import * as S from './styles';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children, title }) => {
  const { navigate } = useNavigation();

  return (
    <S.Container>
      <S.TopBar>
        <S.GoBackButton onPress={() => navigate('Landing')}>
          <Image source={backIcon} resizeMode="contain" />
        </S.GoBackButton>

        <Image source={logoImg} resizeMode="contain" />
      </S.TopBar>

      <S.Title style={{ marginVertical: 40 }}>{title}</S.Title>
    </S.Container>
  );
};

export default PageHeader;
