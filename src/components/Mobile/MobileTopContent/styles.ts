import styled, { css } from 'styled-components';

/*
interface IType {
  filled: boolean;
}
*/

export const Container = styled.div`
  width: 80%;

  margin: 0 auto;

  display: none;
  flex-direction: column;

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const TechsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 4px;

  background: #2c2c2c;
  border-radius: 8px;

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

export const AvatarAndDescriptionAndContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.img`
  height: 224px;
  width: 192px;
  border-radius: 8px;
`;

export const Description = styled.div`
  color: #e9f6ff;
  font-size: 20px;
  margin: 8px 0;
`;

export const Contact = styled.div`
  margin-bottom: 16px;

  a {
    color: #48cef7;
    text-decoration: none;

    & + a {
      margin-left: 16px;
    }
  }
`;
