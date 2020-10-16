import React from 'react';

import MobileHeader from '../MobileHeader';

import { Container, Navigate } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <MobileHeader />

      <Container>
        <header>
          <Navigate href="#apresentation">Apresentação</Navigate>
          <Navigate href="#professionalGoals">Objetivo profissional</Navigate>
          <Navigate href="#techs">Techs</Navigate>
          <Navigate href="#favoriteProjects">Projetos</Navigate>
          <Navigate href="#courses">Cursos</Navigate>
          <Navigate href="#skills">Skills</Navigate>
        </header>
      </Container>
    </>
  );
};

export default Header;
