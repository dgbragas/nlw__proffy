import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import * as S from './styles';

const TeacherList: React.FC = () => {
  const [isFiltersVisibile, setIsFiltersVisibile] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState([]);

  function handleToggleFiltersVisibile() {
    setIsFiltersVisibile(!isFiltersVisibile);
  }

  async function handleFiltersSubmit() {
    try {
      const { data } = await api.get('/classes', {
        params: {
          subject,
          week_day,
          time,
        },
      });

      setTeachers(data);
      setIsFiltersVisibile(false);
    } catch {
      console.error('Erro ao obter professores');
    }
  }

  return (
    <S.Container>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisibile}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        }
      >
        {isFiltersVisibile && (
          <S.SearchForm>
            <S.Label>Matéria</S.Label>
            <S.Input
              placeholder="Qual a matéria?"
              value={subject}
              onChangeText={text => setSubject(text)}
            />

            <S.InputGroup>
              <S.InputBlock>
                <S.Label>Dia da semana</S.Label>
                <S.Input
                  placeholder="Qual a dia?"
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                />
              </S.InputBlock>

              <S.InputBlock>
                <S.Label>Horário</S.Label>
                <S.Input
                  placeholder="Qual o horário?"
                  value={time}
                  onChangeText={text => setTime(text)}
                />
              </S.InputBlock>
            </S.InputGroup>

            <S.SubmitButton onPress={handleFiltersSubmit}>
              <S.SubmitButtonText>Filtrar</S.SubmitButtonText>
            </S.SubmitButton>
          </S.SearchForm>
        )}
      </PageHeader>

      <S.TeacherList
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </S.TeacherList>
    </S.Container>
  );
};

export default TeacherList;
