import styled, { css } from 'styled-components';

interface IType {
  focused: boolean;
}

export const Content = styled.div`
  width: 1120px;

  margin: 0 auto;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 224px;
`;

export const AvatarAndTechsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Avatar = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
`;

export const TechsContainer = styled.div<IType>`
  height: 200px;
  width: 700px;
  border-radius: 8px;
  border: 2px solid transparent;
  background: #2c2c2c;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;

  ${props =>
    props.focused &&
    css`
      border: 2px solid #48cef7;
      box-shadow: none;
    `}

  svg {
    border-radius: 60px;
  }

  .react {
    color: #48cef7;
  }

  .ts {
    color: #027fca;
  }

  .js {
    color: #efd81d;
  }

  .css {
    color: #2196f3;
  }

  .github {
  }

  .vscode {
    color: #24a4eb;
  }
`;

export const DescriptionAndContact = styled.div`
  display: flex;
  justify-content: space-between;

  color: #e9f6ff;
`;

export const Description = styled.div`
  width: 200px;

  display: flex;
  align-items: center;

  font-size: 20px;
  font-weight: 600;
`;

export const Contact = styled.div`
  width: 700px;
  padding: 24px 0;

  display: flex;
  justify-content: flex-end;

  a {
    color: #e9f6ff;
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    opacity: 0.6;
    transition: 0.3s;

    & + a {
      margin-left: 24px;
    }

    &:hover {
      opacity: 1;
    }
  }
`;
