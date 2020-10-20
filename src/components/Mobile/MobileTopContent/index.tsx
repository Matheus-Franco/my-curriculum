import React from 'react';
import { FaReact } from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiGithub,
  SiVisualstudio,
} from 'react-icons/si';

import { useFocus } from '../../../hooks/focus';

import ImageAvatar from '../../../assets/perfil.png';

import {
  Container,
  AvatarAndDescriptionAndContactContainer,
  Avatar,
  Description,
  Contact,
  TechsContainer,
} from './styles';

const MobileTopContent: React.FC = () => {
  const { focusTechs } = useFocus();

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

      <TechsContainer focused={focusTechs}>
        <FaReact size={40} className="react" />
        <SiTypescript size={40} className="ts" />
        <SiJavascript size={40} className="js" />

        <SiCss3 size={40} className="css" />
        <SiGithub size={40} className="github" />
        <SiVisualstudio size={40} className="vscode" />
      </TechsContainer>
    </Container>
  );
};

export default MobileTopContent;
