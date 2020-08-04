import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import * as S from './styles';

const TeacherListPage: React.FC = () => {
  return (
    <S.Wrapper>
      <PageHeader title="Estes são os proffys disponíveis">
        <S.SearchForm>
          <S.FormGroup>
            <label htmlFor="subject">
              Matéria
              <input type="text" id="subject" />
            </label>
          </S.FormGroup>
          <S.FormGroup>
            <label htmlFor="week_day">
              Dia da semana
              <input type="text" id="week_day" />
            </label>
          </S.FormGroup>
          <S.FormGroup>
            <label htmlFor="time">
              Hora
              <input type="text" id="time" />
            </label>
          </S.FormGroup>
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
