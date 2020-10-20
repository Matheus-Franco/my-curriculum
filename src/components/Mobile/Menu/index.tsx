import React from 'react';

import { useMenu } from '../../../hooks/menu';
import { useFocus } from '../../../hooks/focus';

import { Container, Content, ItemsList, Button, Item } from './styles';

const Menu: React.FC = () => {
  const { showMenu, handleShowMenu } = useMenu();

  const {
    handleFocusApresentation,
    handleFocusCourses,
    handleFocusGoals,
    handleFocusProjects,
    handleFocusSkills,
    handleFocusTechs,
  } = useFocus();

  return (
    <Container show={showMenu}>
      <Content>
        <ItemsList>
          <Button onClick={handleFocusTechs} type="button">
            <Item href="#techs" onClick={handleShowMenu}>
              - Techs
            </Item>
          </Button>

          <Button onClick={handleFocusApresentation} type="button">
            <Item href="#apresentation" onClick={handleShowMenu}>
              - Apresentação
            </Item>
          </Button>

          <Button onClick={handleFocusGoals} type="button">
            <Item href="#professionalGoals" onClick={handleShowMenu}>
              - Objetivo profissional
            </Item>
          </Button>

          <Button onClick={handleFocusProjects} type="button">
            <Item href="#favoriteProjects" onClick={handleShowMenu}>
              - Projetos
            </Item>
          </Button>

          <Button onClick={handleFocusSkills} type="button">
            <Item href="#skills" onClick={handleShowMenu}>
              - Skills
            </Item>
          </Button>

          <Button onClick={handleFocusCourses} type="button">
            <Item href="#courses" onClick={handleShowMenu}>
              - Cursos
            </Item>
          </Button>
        </ItemsList>
      </Content>
    </Container>
  );
};

export default Menu;
