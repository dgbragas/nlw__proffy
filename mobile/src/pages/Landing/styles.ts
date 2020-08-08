import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #8257e5;
  flex: 1;
  justify-content: center;
  padding: 40px;
`;

export const Banner = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-family: 'Poppins400';
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
`;

export const TitleBold = styled.Text`
  font-family: 'Poppins600';
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;

export const ButtonPrimary = styled.TouchableOpacity`
  background-color: #9871f5;
  border-radius: 8px;
  height: 150px;
  justify-content: space-between;
  padding: 24px;
  width: 48%;
`;

export const Button = styled(ButtonPrimary)`
  background-color: #04d361;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo700';
  font-size: 20px;
`;

export const TotalConnections = styled.Text`
  color: #d4c2ff;
  font-family: 'Poppins400';
  font-size: 12px;
  line-height: 20px;
  margin-top: 40px;
  max-width: 140px;
`;
