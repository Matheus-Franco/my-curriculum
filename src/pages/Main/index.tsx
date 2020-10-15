import React from 'react';

import AvatarImage from '../../assets/perfil.png';

import {
  Container,
  FirstColumn,
  TopContainer,
  BottomContainer,
  SecondColumn,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <FirstColumn>
        <TopContainer>
          <img src={AvatarImage} alt="avatarimage" />

          <span>
            <div>Matheus Franco</div>
            <div>Front-end Developer</div>
          </span>
        </TopContainer>

        <BottomContainer>
          <div>
            <p>E-mail:</p>
            <p className="email">mfrancoa2020@gmail.com</p>
          </div>

          <div>
            <p>Github:</p>
            <a href="https://github.com/Matheus-Franco">
              https://github.com/Matheus-Franco
            </a>
          </div>

          <div>
            <p>Linkedin:</p>
            <a href="https://www.linkedin.com/in/matheus-franco-713b0b1a3/">
              https://www.linkedin.com/in/matheus-franco-713b0b1a3/
            </a>
          </div>
        </BottomContainer>
      </FirstColumn>

      <SecondColumn>
        <div id="apresentation">
          <h2>Apresentação</h2>
          <p>
            Olá! Meu nome é Matheus e atualmente estou com 18 anos de idade.
            Minha curiosidade pelo mundo de tecnologia e, especificamente,
            programação, surgiu no ano de 2019. Após conversar com um grande
            amigo que já possui experiência na área, me apaixonei pelo tema e
            desde então venho estudando e aprimorando meus conhecimentos
            constantemente.
          </p>
        </div>

        <div id="professionalGoals">
          <h2>Objetivo profissional</h2>
          <p>
            Estou em busca de uma primeira colocação no mercado de trabalho para
            que eu possa colocar em prática meus conhecimentos e aprender novas
            tecnologias com pessoas mais experientes.
          </p>
        </div>

        <div id="techs">
          <h2>Tecnologias que tenho experiência</h2>
          <p>- TypeScript</p>
          <p>- JavaScript</p>
          <p>- ReactJS</p>
          <p>- React Native</p>
          <p>- Styled-Components</p>
          <p>- Redux/Context</p>
        </div>

        <div id="favoriteProjects">
          <h2>Projetos favoritos</h2>
          <p>- GoFinances</p>
          <p>- GoBarber (Web)</p>
          <p>- GoBarber (Mobile)</p>
        </div>

        <div id="courses">
          <h2>Informações acadêmicas e Cursos</h2>
          <p>- Cursando Sistemas de Informação no IFES</p>
          <p>- Bootcamp GoStack - turma 12</p>
          <p>- Desenvolvimento web moderno</p>
        </div>

        <div id="skills">
          <h2>Skills</h2>
          <p>- Não possuo dificuldade para me comunicar com outras pessoas.</p>
          <p>- Me considero uma pessoa bastante consequente.</p>
          <p>
            - Gosto de ouvir diferentes opiniões antes de chegar a uma
            conclusão.
          </p>
        </div>
      </SecondColumn>
    </Container>
  );
};

export default Main;
