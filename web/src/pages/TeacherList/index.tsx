import React from 'react';

import Input from '../../components/Input';
import Select from '../../components/Select';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import * as S from './styles';

const TeacherListPage: React.FC = () => {
  return (
    <S.Wrapper>
      <PageHeader title="Estes são os proffys disponíveis">
        <S.SearchForm>
          <Select
            label="Matéria"
            name="subject"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
            ]}
          />
          <Select
            label="Dia da semana"
            name="week_day"
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
          <Input type="time" name="time" label="Hora" />
        </S.SearchForm>
      </PageHeader>

      <S.MainContent>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </S.MainContent>
    </S.Wrapper>
  );
};

export default TeacherListPage;
