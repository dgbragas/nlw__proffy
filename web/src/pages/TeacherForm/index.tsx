import React from 'react';

import warningIcon from '../../assets/icons/warning.svg';

import PageHeader from '../../components/PageHeader';

import * as S from './styles';
import Input from '../../components/Input';

const TeacherForm: React.FC = () => {
  return (
    <S.Wrapper>
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <S.MainContent>
        <S.Fieldset>
          <legend>Seus dados</legend>

          <Input label="Nome completo" name="name" />
          <Input label="Avatar" name="avatar" />
          <Input label="WhatsApp" name="whatsapp" />
        </S.Fieldset>

        <S.Fieldset>
          <legend>Sobre a aula</legend>

          <Input label="Matéria" name="subject" />
          <Input label="Custo da sua hora por aula" name="cost" />
        </S.Fieldset>

        <S.Footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </S.Footer>
      </S.MainContent>
    </S.Wrapper>
  );
};

export default TeacherForm;
