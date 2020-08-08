import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { ImageBackground as ImgBackground, Vertical } from 'react-native';

export const Container = styled.View`
  background-color: #8257e5;
  flex: 1;
  justify-content: center;
  padding: 40px;
`;

export const ImageBackground = styled(ImgBackground).attrs({
  resizeMode: 'contain',
})`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: 'Archivo700';
  font-size: 32px;
  line-height: 37px;
  max-width: 180px;
`;

export const Description = styled.Text`
  color: #d4c2ff;
  font-family: 'Poppins400';
  font-size: 16px;
  line-height: 25px;
  margin-top: 24px;
  max-width: 240px;
`;

export const OkButton = styled(RectButton)`
  align-items: center;
  border-radius: 8px;
  background-color: #04d361;
  height: 58px;
  justify-content: center;
`;

export const OkButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo700';
  font-size: 16px;
`;
