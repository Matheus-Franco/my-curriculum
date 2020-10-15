import React from 'react';

import { Container, Navigate } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <Navigate href="#">Apresentação</Navigate>
        <Navigate href="#">Objetivo profissional</Navigate>
        <Navigate href="#">Techs</Navigate>
        <Navigate href="#">Projetos</Navigate>
        <Navigate href="#">Cursos</Navigate>
        <Navigate href="#">Skills</Navigate>
      </header>
    </Container>
  );
};

export default Header;
