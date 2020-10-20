import React from 'react';
import { FiMenu } from 'react-icons/fi';

import { useMenu } from '../../../hooks/menu';

import Menu from '../Menu';

import { Container, Header, Name, ButtonMenu } from './styles';

const MobileHeader: React.FC = () => {
  const { handleShowMenu, showMenu } = useMenu();

  return (
    <>
      <Container margin={showMenu}>
        <Header>
          <Name>
            Matheus
            <strong>Franco</strong>
          </Name>

          <ButtonMenu type="button" onClick={handleShowMenu}>
            <FiMenu size={24} />
          </ButtonMenu>
        </Header>
      </Container>
      {showMenu && <Menu />}
    </>
  );
};

export default MobileHeader;
