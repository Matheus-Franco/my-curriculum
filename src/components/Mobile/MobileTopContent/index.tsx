import React from 'react';
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
  AvatarAndDescriptionContainer,
  Avatar,
  TechsContainer,
  TechsAndContactContainer,
  Description,
  Contact,
} from './styles';

const MobileTopContent: React.FC = () => {
  return (
    <Container>
      <AvatarAndDescriptionContainer>
        <Avatar src={ImageAvatar} />

        <Description>Front-end Developer</Description>
      </AvatarAndDescriptionContainer>

      <TechsAndContactContainer>
        <TechsContainer>
          <div>
            <FaReact size={48} className="react" />
            <SiTypescript size={48} className="ts" />

            <SiCss3 size={48} className="css" />
          </div>

          <div>
            <SiJavascript size={48} className="js" />
            <SiGithub size={48} className="github" />
            <SiVisualstudio size={48} className="vscode" />
          </div>
        </TechsContainer>

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
      </TechsAndContactContainer>
    </Container>
  );
};

export default MobileTopContent;
