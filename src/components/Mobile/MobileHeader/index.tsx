import React from 'react';
import { FiMenu } from 'react-icons/fi';

import { Container, Header, Name, ButtonMenu } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <Header>
        <Name>
          Matheus
          <strong>Franco</strong>
        </Name>

        <ButtonMenu type="button">
          <FiMenu size={24} />
        </ButtonMenu>
      </Header>
    </Container>
  );
};

export default MobileHeader;
