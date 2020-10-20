import styled, { css } from 'styled-components';

interface IType {
  focused: boolean;
}

export const Container = styled.div`
  display: none;
  width: 100%;
  margin-top: 32px;

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const Content = styled.div`
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

export const ApresentationContainer = styled.div<IType>`
  border-radius: 8px;
  background: #2c2c2c;
  padding: 16px;
  margin-bottom: 16px;

  ${props =>
    props.focused &&
    css`
      border: 2px solid #48cef7;
      box-shadow: none;
    `}

  svg {
    color: #48cef7;
    margin-right: 16px;
  }
`;

export const Title = styled.div`
  color: #e9f6ff;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 16px;
`;

export const Text = styled.div`
  color: #e9f6ff;
`;

export const Goals = styled.div<IType>`
  border-radius: 8px;
  background: #2c2c2c;
  padding: 16px;
  margin-bottom: 16px;

  ${props =>
    props.focused &&
    css`
      border: 2px solid #48cef7;
      box-shadow: none;
    `}

  svg {
    color: #48cef7;
    margin-right: 16px;
  }
`;

export const FavoriteProjects = styled.div<IType>`
  border-radius: 8px;
  background: #2c2c2c;
  padding: 16px;
  margin-bottom: 16px;

  ${props =>
    props.focused &&
    css`
      border: 2px solid #48cef7;
      box-shadow: none;
    `}

  svg {
    color: #48cef7;
    margin-right: 16px;
  }
`;

export const Skills = styled.div<IType>`
  border-radius: 8px;
  background: #2c2c2c;
  padding: 16px;
  margin-bottom: 16px;

  ${props =>
    props.focused &&
    css`
      border: 2px solid #48cef7;
      box-shadow: none;
    `}

  svg {
    color: #48cef7;
    margin-right: 16px;
  }
`;

export const Courses = styled.div<IType>`
  border-radius: 8px;
  background: #2c2c2c;
  padding: 16px;
  margin-bottom: 16px;

  ${props =>
    props.focused &&
    css`
      border: 2px solid #48cef7;
      box-shadow: none;
    `}

  svg {
    color: #48cef7;
    margin-right: 16px;
  }
`;
