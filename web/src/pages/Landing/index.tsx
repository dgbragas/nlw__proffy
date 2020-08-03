import React from 'react';

import logoImg from '../../assets/logo.svg';
import landingImg from '../../assets/landing.svg';
import studyIcon from '../../assets/icons/study.svg';
import giveClassesIcon from '../../assets/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/icons/purple-heart.svg';

import * as S from './styled';

const LandingPage: React.FC = () => {
  return (
    <S.Wrapper>
      <S.LandingContent>
        <S.LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </S.LogoContainer>

        <S.HeroImage src={landingImg} alt="Plataforma de estudos" />

        <S.ButtonsWrapper>
          <S.StudyButton href="">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </S.StudyButton>
          <S.ClassesButton href="">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </S.ClassesButton>
        </S.ButtonsWrapper>

        <S.TotalConnections>
          Total de 200 conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração rooxo" />
        </S.TotalConnections>
      </S.LandingContent>
    </S.Wrapper>
  );
};

export default LandingPage;
