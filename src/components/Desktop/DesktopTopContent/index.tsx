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
  Content,
  TopContainer,
  AvatarAndTechsContainer,
  Avatar,
  TechsContainer,
  DescriptionAndContact,
  Description,
  Contact,
} from './styles';

const DesktopTopContent: React.FC = () => {
  const { focusTechs } = useFocus();

  return (
    <Content>
      <TopContainer>
        <AvatarAndTechsContainer>
          <Avatar src={ImageAvatar} />

          <TechsContainer focused={focusTechs} id="techs">
            <FaReact size={56} className="react" />
            <SiTypescript size={56} className="ts" />
            <SiJavascript size={56} className="js" />
            <SiCss3 size={56} className="css" />
            <SiGithub size={56} className="github" />
            <SiVisualstudio size={56} className="vscode" />
          </TechsContainer>
        </AvatarAndTechsContainer>

        <DescriptionAndContact>
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
        </DescriptionAndContact>
      </TopContainer>
    </Content>
  );
};

export default DesktopTopContent;
