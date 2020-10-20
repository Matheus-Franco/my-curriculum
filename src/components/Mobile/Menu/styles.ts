import styled, { css } from 'styled-components';

interface IType {
  show: boolean;
}

export const Container = styled.div<IType>`
  width: 100%;
  background: #2c2c2c;
  padding: 24px 0;
  z-index: 100;
  margin-bottom: 24px;

  display: none;

  transition: 0.3s;
  transform: translateY(-100%);

  ${props =>
    props.show &&
    css`
      transform: translateY(0);
    `};

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  background: transparent;
  outline: none;
  border: none;

  & + button {
    margin-top: 16px;
  }
`;

export const Item = styled.a`
  font-size: 18px;
  color: #e9f6ff;
  text-decoration: none;
`;
