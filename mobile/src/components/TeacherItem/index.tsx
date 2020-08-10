import React from 'react';
import { Image } from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whtasappIcon from '../../assets/images/icons/whatsapp.png';

import * as S from './styles';

const TeacherItem: React.FC = () => (
  <S.Container>
    <S.Profile>
      <S.Avatar source={{ uri: 'https://github.com/diego3g.png' }} />

      <S.ProfileInfo>
        <S.Name>Diego Fernandes</S.Name>
        <S.Subject>Química</S.Subject>
      </S.ProfileInfo>
    </S.Profile>

    <S.Bio style={{ marginHorizontal: 24 }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure esse,
      reprehenderit perferendis sunt deleniti a atque illum exercitationem
      optio, est et soluta dolor dolore voluptate veritatis molestiae officiis
      dolorum quia?
    </S.Bio>

    <S.Footer>
      <S.Price>
        Preço/hora: {'   '}
        <S.PriceValue>R$ 20,00</S.PriceValue>
      </S.Price>

      <S.ButtonsContainer>
        <S.FavoriteButton favorited>
          {/* <Image source={heartOutlineIcon} /> */}
          <Image source={unfavoriteIcon} />
        </S.FavoriteButton>

        <S.ContactButton>
          <Image source={whtasappIcon} />
          <S.ContactButtonText>Entrar em contato</S.ContactButtonText>
        </S.ContactButton>
      </S.ButtonsContainer>
    </S.Footer>
  </S.Container>
);

export default TeacherItem;
