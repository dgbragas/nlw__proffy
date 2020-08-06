import React from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import * as S from './styles';

const TeacherListPage: React.FC = () => {
  return (
    <S.Wrapper>
      <PageHeader title="Estes são os proffys disponíveis">
        <S.SearchForm>
          <Input name="subject" label="Matéria" />
          <Input name="week_day" label="Dia da semana" />
          <Input name="time" label="Hora" />
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
