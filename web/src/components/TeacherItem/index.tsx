import React from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import * as S from './styles';

interface TeacherItemProps { }

const TeacherItem: React.FC = () => (
  <S.TeacherItem>
    <S.TeacherInfos>
      <img
        src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
        alt="Diego Fernandes"
      />
      <div>
        <strong>Diego Fernandes</strong>
        <span>Química</span>
      </div>
    </S.TeacherInfos>

    <p>
      Entusiasta das melhores tecnologias de química avançada. Apaixonado por
      explodir coisas em laboratório e por mudar a vida das pessoas através de
      experiências. Mais de 200.000 pessoas já passaram por uma das minhas
      explosões.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>

      <button type="button">
        <img src={whatsappIcon} alt="WhatsApp" />
        Entrar em contato
      </button>
    </footer>
  </S.TeacherItem>
);

export default TeacherItem;
