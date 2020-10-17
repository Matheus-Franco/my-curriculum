import React from 'react';

import {
  Container,
  Header,
  Name,
  NavigationContainer,
  Navigate,
} from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Header>
        <Name>
          Matheus
          <strong>Franco</strong>
        </Name>

        <NavigationContainer>
          <Navigate href="#apresentation">Apresentação</Navigate>
          <Navigate href="#professionalGoals">Objetivo profissional</Navigate>
          <Navigate href="#techs">Techs</Navigate>
          <Navigate href="#favoriteProjects">Projetos</Navigate>
          <Navigate href="#courses">Cursos</Navigate>
          <Navigate href="#skills">Skills</Navigate>
        </NavigationContainer>
      </Header>
    </Container>
  );
};

export default DesktopHeader;
