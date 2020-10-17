import React from 'react';

import DesktopHeader from '../../components/DesktopHeader';
import TopContent from '../../components/TopContentDesktop';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <DesktopHeader />
      <TopContent />
    </Container>
  );
};

export default Main;
