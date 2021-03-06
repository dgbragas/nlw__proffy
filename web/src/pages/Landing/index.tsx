import React, { useState, useEffect } from 'react';

import logoImg from '../../assets/logo.svg';
import landingImg from '../../assets/landing.svg';
import studyIcon from '../../assets/icons/study.svg';
import giveClassesIcon from '../../assets/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/icons/purple-heart.svg';

import api from '../../services/api';

import * as S from './styled';

const LandingPage: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/connections');
      setTotalConnections(data.total);
    })();
  }, []);

  return (
    <S.Wrapper>
      <S.LandingContent>
        <S.LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </S.LogoContainer>

        <S.HeroImage src={landingImg} alt="Plataforma de estudos" />

        <S.ButtonsWrapper>
          <S.StudyButton to="/study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </S.StudyButton>
          <S.ClassesButton to="/give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </S.ClassesButton>
        </S.ButtonsWrapper>

        <S.TotalConnections>
          {`Total de ${totalConnections} ${
            totalConnections > 0 ? 'conexões realizadas' : 'conexão realizada'
          }`}
          <img src={purpleHeartIcon} alt="Coração rooxo" />
        </S.TotalConnections>
      </S.LandingContent>
    </S.Wrapper>
  );
};

export default LandingPage;
