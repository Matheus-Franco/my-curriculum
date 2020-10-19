import styled from 'styled-components';

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
  border-radius: 8px;
`;

export const TechsContainer = styled.div`
  height: 200px;
  width: 700px;
  border-radius: 8px;
  background: #2c2c2c;
  border: 1px solid #0179cb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;

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
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #e9f6ff;
    text-decoration: none;
    margin: 0 24px;
    font-size: 18px;
    font-weight: 600;
  }
`;
