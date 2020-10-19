import React, { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiGithub,
  SiVisualstudio,
} from 'react-icons/si';

import ImageAvatar from '../../../assets/perfil.png';

import {
  Container,
  Avatar,
  TechsContainer,
  AvatarAndDescriptionAndContactContainer,
  Description,
  Contact,
} from './styles';

const MobileTopContent: React.FC = () => {
  /*
  const [isFilled, setIsFilled] = useState<boolean>(false);

  function handleClick(): void {
    setTimeout(() => {
      setIsFilled(false);
    }, 1500);

    setIsFilled(true);
  }
    */

  return (
    <Container>
      <AvatarAndDescriptionAndContactContainer>
        <Avatar src={ImageAvatar} alt="Avatar" />

        <Description>Front-end Developer</Description>

        <Contact>
          <a
            href="https://github.com/Matheus-Franco"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-franco-713b0b1a3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </Contact>
      </AvatarAndDescriptionAndContactContainer>

      <TechsContainer>
        <TechsContainer>
          <FaReact size={48} className="react" />
          <SiTypescript size={48} className="ts" />
          <SiJavascript size={48} className="js" />

          <SiCss3 size={48} className="css" />
          <SiGithub size={48} className="github" />
          <SiVisualstudio size={48} className="vscode" />
        </TechsContainer>
      </TechsContainer>
    </Container>
  );
};

export default MobileTopContent;
