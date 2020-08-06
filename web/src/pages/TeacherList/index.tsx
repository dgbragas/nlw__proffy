import React, { useState, FormEvent } from 'react';

import Input from '../../components/Input';
import Select from '../../components/Select';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import * as S from './styles';

const TeacherListPage: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState([]);

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    try {
      const { data } = await api.get('/classes', {
        params: {
          subject,
          week_day,
          time,
        },
      });

      setTeachers(data);
    } catch {
      alert('Erro ao obter professores');
    }
  }

  return (
    <S.Wrapper>
      <PageHeader title="Estes são os proffys disponíveis">
        <S.SearchForm onSubmit={searchTeachers}>
          <Select
            label="Matéria"
            name="subject"
            value={subject}
            onChange={({ target }) => setSubject(target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Química', label: 'Química' },
              { value: 'Português', label: 'Português' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'Literatura', label: 'Literatura' },
            ]}
          />

          <Select
            label="Dia da semana"
            name="week_day"
            value={week_day}
            onChange={({ target }) => setWeekDay(target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={({ target }) => setTime(target.value)}
          />

          <button type="submit">Buscar</button>
        </S.SearchForm>
      </PageHeader>

      <S.MainContent>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </S.MainContent>
    </S.Wrapper>
  );
};

export default TeacherListPage;
