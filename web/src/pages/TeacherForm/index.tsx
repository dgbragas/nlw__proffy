import React from 'react';

import warningIcon from '../../assets/icons/warning.svg';

import PageHeader from '../../components/PageHeader';

import * as S from './styles';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';

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
          <Textarea label="Biografia" name="bio" />
        </S.Fieldset>

        <S.Fieldset>
          <legend>Sobre a aula</legend>

          <Select
            label="Matéria"
            name="subject"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
            ]}
          />
          <Input label="Custo da sua hora por aula" name="cost" />
        </S.Fieldset>

        <S.Fieldset>
          <legend>
            Horários disponíveis
            <button type="button">+ Novo horário</button>
          </legend>

          <S.ScheduleItem>
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
            <Input name="from" label="Das" type="time" />
            <Input name="to" label="Até" type="time" />
          </S.ScheduleItem>
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
