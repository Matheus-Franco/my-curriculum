import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;

  margin: 0 auto;

  display: none;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const AvatarAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.img`
  height: 128px;
  width: 128px;
  border-radius: 8px;
`;

export const Description = styled.div`
  color: #e9f6ff;
  font-size: 18px;
  width: 100%;

  display: flex;
  align-items: flex-end;

  margin-top: 16px;
`;

export const TechsAndContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TechsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  background: #2c2c2c;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);

  div {
    display: flex;
    justify-content: space-between;

    & + div {
      margin-top: 16px;
    }
  }

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

export const Contact = styled.div`
  display: flex;

  padding: 16px 0;

  a {
    color: #e9f6ff;
    text-decoration: none;
    font-size: 18px;

    & + a {
      margin-left: 16px;
    }
  }
`;
