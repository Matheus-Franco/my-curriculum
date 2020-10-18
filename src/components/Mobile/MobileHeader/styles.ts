import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #2c2c2c;
  margin-bottom: 24px;

  display: none;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const Header = styled.div`
  width: 80%;
  padding: 16px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: #e9f6ff;
  }
`;

export const Name = styled.div`
  font-size: 20px;
  color: #e9f6ff;

  strong {
    font-size: 32px;
  }
`;

export const ButtonMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  outline: none;
  border: none;
`;
