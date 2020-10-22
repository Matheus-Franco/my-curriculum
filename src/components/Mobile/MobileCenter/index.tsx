import React from 'react';
import {
  FaHandPaper,
  FaLaptopCode,
  FaRegLightbulb,
  FaBook,
} from 'react-icons/fa';
import { BiTargetLock } from 'react-icons/bi';

import { useFocus } from '../../../hooks/focus';

import {
  Container,
  Content,
  ApresentationContainer,
  Title,
  Text,
  Goals,
  FavoriteProjects,
  Skills,
  Courses,
} from './styles';

const MobileCenter: React.FC = () => {
  const {
    focusCourses,
    focusApresentation,
    focusGoals,
    focusSkills,
    focusProjects,
  } = useFocus();

  return (
    <Container>
      <Content>
        <ApresentationContainer focused={focusApresentation}>
          <Title>
            <FaHandPaper size={24} />
            Apresentação
          </Title>

          <Text>
            Meu nome é Matheus e atualmente estou com 18 anos de idade. Minha
            curiosidade pelo mundo de tecnologia e, especificamente,
            programação, surgiu no ano de 2019. Após conversar com um grande
            amigo que já possui experiência na área, me apaixonei pelo tema e
            desde então venho estudando e aprimorando meus conhecimentos
            constantemente.
          </Text>
        </ApresentationContainer>

        <Goals focused={focusGoals}>
          <Title>
            <BiTargetLock size={24} />
            Objetivo profissional
          </Title>
          <Text>
            Estou em busca de uma primeira colocação no mercado de trabalho para
            que eu possa colocar em prática meus conhecimentos e aprender novas
            tecnologias com pessoas mais experientes.
          </Text>
        </Goals>

        <FavoriteProjects focused={focusProjects}>
          <Title>
            <FaLaptopCode size={24} />
            Projetos favoritos
          </Title>
          <Text>- GoFinances</Text>
          <Text>- GoBarber</Text>
        </FavoriteProjects>

        <Skills focused={focusSkills}>
          <Title>
            <FaRegLightbulb size={24} />
            Skills
          </Title>
          <Text>
            - Não possuo dificuldade para me comunicar com outras pessoas.
          </Text>
          <Text>- Me considero uma pessoa bastante consequente.</Text>
          <Text>
            - Gosto de ouvir diferentes opiniões antes de chegar a uma
            conclusão.
          </Text>
        </Skills>

        <Courses focused={focusCourses}>
          <Title>
            <FaBook size={24} />
            Cursos extras
          </Title>
          <Text>- Bootcamp GoStack (turma 12)</Text>
          <Text>- Desenvolvimento Web Moderno</Text>
          <Text>- Graduando em Sistemas de Informação pelo IFES</Text>
          <Text>- Granduando em Inglês pelo Influx</Text>
        </Courses>
      </Content>
    </Container>
  );
};

export default MobileCenter;
