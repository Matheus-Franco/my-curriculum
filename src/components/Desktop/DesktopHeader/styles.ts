import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #2c2c2c;
  margin-bottom: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Header = styled.div`
  width: 1120px;
  padding: 16px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.div`
  font-size: 20px;
  color: #e9f6ff;

  strong {
    font-size: 32px;
  }
`;

export const NavigationContainer = styled.div`
  width: 70%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  outline: none;
  border: none;
`;

export const Navigate = styled.a`
  font-size: 20px;
  color: #e9f6ff;
  text-decoration: none;
`;
