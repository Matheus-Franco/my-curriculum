import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { Container, NavigateItem, Navigate, Button } from './styles';

const headerItems = [
  <Navigate href="#apresentation">Apresentação</Navigate>,
  <Navigate href="#professionalGoals">Objetivo profissional</Navigate>,
  <Navigate href="#techs">Techs</Navigate>,
  <Navigate href="#favoriteProjects">Projetos</Navigate>,
  <Navigate href="#courses">Cursos</Navigate>,
  <Navigate href="#skills">Skills</Navigate>,
];

const MobileHeader: React.FC = () => {
  const [itemToRender, setItemToRender] = useState<number>(0);

  function handleClick(): void {
    if (itemToRender === 5) {
      setItemToRender(0);
    } else {
      setItemToRender(itemToRender + 1);
    }
  }

  return (
    <Container>
      <div>
        <NavigateItem>{headerItems[itemToRender]}</NavigateItem>

        <Button type="button" onClick={handleClick}>
          <FaArrowRight />
        </Button>
      </div>
    </Container>
  );
};

export default MobileHeader;
