import React from 'react';

import DesktopHeader from '../../components/Desktop/DesktopHeader';
import DesktopTopContent from '../../components/Desktop/DesktopTopContent';
import DesktopCenter from '../../components/Desktop/DesktopCenter';

import MobileHeader from '../../components/Mobile/MobileHeader';
import MobileTopContent from '../../components/Mobile/MobileTopContent';
import MobileCenter from '../../components/Mobile/MobileCenter';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <DesktopHeader />
      <MobileHeader />

      <DesktopTopContent />
      <MobileTopContent />

      <DesktopCenter />
      <MobileCenter />
    </Container>
  );
};

export default Main;
