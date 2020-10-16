import styled from 'styled-components';

export const Container = styled.div`
  background: #2c2c2c;
  height: 72px;
  width: 100%;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);

  display: none;

  justify-content: center;
  align-items: center;

  div {
    width: 345px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 1000px) {
    display: flex;
  }
`;

export const NavigateItem = styled.div``;

export const Navigate = styled.a`
  color: #e9f6ff;
  font-size: 20px;
  text-decoration: none;

  transition: 0.3s;

  &:hover {
    color: #fff;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  margin-left: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 35%;
  width: 30px;

  svg {
    width: 100%;
    height: 100%;
    color: #e9f6ff;

    transition: 0.3s;

    &:hover {
      color: #fff;
    }
  }
`;
