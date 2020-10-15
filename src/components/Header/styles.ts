import styled from 'styled-components';

export const Container = styled.div`
  background: #2c2c2c;
  height: 72px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);

  header {
    width: 1120px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Navigate = styled.a`
  color: #e9f6ff;
  font-size: 20px;
  text-decoration: none;

  transition: 0.3s;

  &:hover {
    color: #fff;
  }
`;
