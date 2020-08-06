import React from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import * as S from './styles';
import api from '../../services/api';

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  user_id: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('/connections', {
      user_id: teacher.id,
    });
  }

  return (
    <S.TeacherItem>
      <S.TeacherInfos>
        <img src={teacher.avatar} alt={teacher.avatar} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </S.TeacherInfos>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>

        <a
          target="_blank"
          rel="noreferrer"
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </a>
      </footer>
    </S.TeacherItem>
  );
};

export default TeacherItem;
