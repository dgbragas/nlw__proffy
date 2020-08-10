import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #8257e5;
  padding: 40px;
`;

export const TopBar = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const GoBackButton = styled(BorderlessButton)``;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: 'Archivo700';
  font-size: 24px;
  line-height: 32px;
  max-width: 160px;
`;
