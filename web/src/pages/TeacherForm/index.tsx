import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import warningIcon from '../../assets/icons/warning.svg';

import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';

import api from '../../services/api';

import * as S from './styles';

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: '',
      },
    ]);
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string,
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  async function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    try {
      await api.post('/classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      });
      alert('Cadastro realizado com sucesso');

      history.push('/');
    } catch {
      alert('Erro no cadastro');
    }
  }

  return (
    <S.Wrapper>
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <S.MainContent>
        <S.Fieldset>
          <legend>Seus dados</legend>

          <Input
            label="Nome completo"
            name="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />

          <Input
            label="Avatar"
            name="avatar"
            value={avatar}
            onChange={({ target }) => setAvatar(target.value)}
          />

          <Input
            label="WhatsApp"
            name="whatsapp"
            value={whatsapp}
            onChange={({ target }) => setWhatsapp(target.value)}
          />

          <Textarea
            label="Biografia"
            name="bio"
            value={bio}
            onChange={({ target }) => setBio(target.value)}
          />
        </S.Fieldset>

        <form onSubmit={handleCreateClass}>
          <S.Fieldset>
            <legend>Sobre a aula</legend>

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

            <Input
              label="Custo da sua hora por aula"
              name="cost"
              value={cost}
              onChange={({ target }) => setCost(target.value)}
            />
          </S.Fieldset>

          <S.Fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <S.ScheduleItem key={scheduleItem.week_day}>
                <Select
                  label="Dia da semana"
                  name="week_day"
                  value={scheduleItem.week_day}
                  onChange={({ target }) => {
                    setScheduleItemValue(index, 'week_day', target.value);
                  }}
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
                  name="from"
                  label="Das"
                  type="time"
                  value={scheduleItem.from}
                  onChange={({ target }) => {
                    setScheduleItemValue(index, 'from', target.value);
                  }}
                />

                <Input
                  name="to"
                  label="Até"
                  type="time"
                  value={scheduleItem.to}
                  onChange={({ target }) => {
                    setScheduleItemValue(index, 'to', target.value);
                  }}
                />
              </S.ScheduleItem>
            ))}
          </S.Fieldset>

          <S.Footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </S.Footer>
        </form>
      </S.MainContent>
    </S.Wrapper>
  );
};

export default TeacherForm;
