import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f7;
`;

export const SearchForm = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  color: #d4c2ff;
  font-family: 'Poppins400';
`;

export const Input = styled.TextInput.attrs({
  paddingHorizontal: 16,
  placeholderTextColor: '#c1bccc',
})`
  background-color: #fff;
  border-radius: 8px;
  justify-content: center;
  height: 54px;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBlock = styled.View`
  width: 48%;
`;

export const SubmitButton = styled(RectButton)`
  background-color: #04d361;
  align-items: center;
  border-radius: 8px;
  flex-direction: row;
  height: 56px;
  justify-content: center;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo700';
  font-size: 16px;
`;

export const TeacherList = styled(ScrollView)`
  margin-top: -40px;
`;
