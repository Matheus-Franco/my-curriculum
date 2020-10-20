import styled, { css } from 'styled-components';

interface IType {
  focused: boolean;
}

export const Container = styled.div`
  width: 1120px;
  margin: 0 auto;
  padding: 48px 0 0 0;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ApresentationContainer = styled.div<IType>`
  width: 300px;
  height: 350px;
  border-radius: 8px;
  background: #2c2c2c;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  padding: 16px;

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

export const InformationsContainer = styled.div`
  width: 700px;
`;

export const Title = styled.div`
  color: #e9f6ff;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 16px;
`;

export const Text = styled.p`
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
