import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface FavoriteButtonProps {
  favorited: boolean;
}

export const Container = styled.View`
  background-color: #fff;
  border: 1px solid #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const Profile = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 24px;
`;

export const Avatar = styled.Image`
  background-color: #eee;
  border-radius: 32px;
  height: 64px;
  width: 64px;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  color: #32264d;
  font-size: 20px;
  font-family: 'Archivo700';
`;

export const Subject = styled.Text`
  color: #6a6180;
  font-family: 'Poppins400';
  font-size: 12px;
  margin-top: 4px;
`;

export const Bio = styled.Text`
  color: #646180;
  font-family: 'Poppins400';
  font-size: 14px;
  line-height: 24px;
`;

export const Footer = styled.View`
  align-items: center;
  background-color: #fafafc;
  margin-top: 24px;
  padding: 24px;
`;

export const Price = styled.Text`
  color: #6a6180;
  font-family: 'Poppins400';
  font-size: 14px;
`;

export const PriceValue = styled.Text`
  color: #8257e5;
  font-family: 'Archivo700';
  font-size: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const FavoriteButton = styled(RectButton)<FavoriteButtonProps>`
  align-items: center;
  background-color: #8257e5;
  border-radius: 8px;
  height: 56px;
  justify-content: center;
  margin-right: 8px;
  width: 56px;

  ${({ favorited }) =>
    favorited &&
    `
    background-color: #e33d3d;
  `}
`;

export const ContactButton = styled(RectButton)`
  background-color: #04d361;
  align-items: center;
  border-radius: 8px;
  flex: 1;
  flex-direction: row;
  height: 56px;
  justify-content: center;
  margin-right: 8px;
  width: 56px;
`;

export const ContactButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo700';
  font-size: 16px;
  margin-left: 16px;
`;
