import React from 'react';

import DesktopHeader from '../../components/Desktop/DesktopHeader';
import DesktopTopContent from '../../components/Desktop/DesktopTopContent';

import MobileHeader from '../../components/Mobile/MobileHeader';
import MobileTopContent from '../../components/Mobile/MobileTopContent';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <DesktopHeader />
      <MobileHeader />

      <DesktopTopContent />
      <MobileTopContent />
    </Container>
  );
};

export default Main;
