import React from 'react';
import { Image, Linking } from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whtasappIcon from '../../assets/images/icons/whatsapp.png';

import * as S from './styles';

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  user_id: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function handleLinkToWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  return (
    <S.Container>
      <S.Profile>
        <S.Avatar source={{ uri: teacher.avatar }} />

        <S.ProfileInfo>
          <S.Name>{teacher.name}</S.Name>
          <S.Subject>{teacher.subject}</S.Subject>
        </S.ProfileInfo>
      </S.Profile>

      <S.Bio style={{ marginHorizontal: 24 }}>{teacher.bio}</S.Bio>

      <S.Footer>
        <S.Price>
          Preço/hora: {'   '}
          <S.PriceValue>R$ {teacher.cost}</S.PriceValue>
        </S.Price>

        <S.ButtonsContainer>
          <S.FavoriteButton favorited>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </S.FavoriteButton>

          <S.ContactButton onPress={handleLinkToWhatsapp}>
            <Image source={whtasappIcon} />
            <S.ContactButtonText>Entrar em contato</S.ContactButtonText>
          </S.ContactButton>
        </S.ButtonsContainer>
      </S.Footer>
    </S.Container>
  );
};

export default TeacherItem;
