import React from 'react';

import { useFocus } from '../../../hooks/focus';

import {
  Container,
  Header,
  Name,
  NavigationContainer,
  Button,
  Navigate,
} from './styles';

const DesktopHeader: React.FC = () => {
  const {
    handleFocusApresentation,
    handleFocusCourses,
    handleFocusGoals,
    handleFocusProjects,
    handleFocusSkills,
    handleFocusTechs,
  } = useFocus();

  return (
    <Container>
      <Header>
        <Name>
          Matheus
          <strong>Franco</strong>
        </Name>

        <NavigationContainer>
          <Button onClick={handleFocusTechs} type="button">
            <Navigate href="#techs">Techs</Navigate>
          </Button>

          <Button onClick={handleFocusApresentation} type="button">
            <Navigate href="#apresentation">Apresentação</Navigate>
          </Button>

          <Button onClick={handleFocusGoals} type="button">
            <Navigate href="#professionalGoals">Objetivo profissional</Navigate>
          </Button>

          <Button onClick={handleFocusProjects} type="button">
            <Navigate href="#favoriteProjects">Projetos</Navigate>
          </Button>

          <Button onClick={handleFocusSkills} type="button">
            <Navigate href="#skills">Skills</Navigate>
          </Button>

          <Button onClick={handleFocusCourses} type="button">
            <Navigate href="#courses">Cursos</Navigate>
          </Button>
        </NavigationContainer>
      </Header>
    </Container>
  );
};

export default DesktopHeader;
