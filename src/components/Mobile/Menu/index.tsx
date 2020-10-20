import React from 'react';

import { useMenu } from '../../../hooks/menu';

import { Container, Content, ItemsList, Item } from './styles';

const Menu: React.FC = () => {
  const { showMenu } = useMenu();

  return (
    <Container show={showMenu}>
      <Content>
        <ItemsList>
          <Item href="#techs">- Techs</Item>
          <Item href="#apresentation">- Apresentação</Item>
          <Item href="#professionalGoals">- Objetivo profissional</Item>
          <Item href="#favoriteProjects">- Projetos</Item>
          <Item href="#skills">- Skills</Item>
          <Item href="#courses">- Cursos</Item>
        </ItemsList>
      </Content>
    </Container>
  );
};

export default Menu;
