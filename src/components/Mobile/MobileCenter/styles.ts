import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  width: 100%;
  margin-top: 48px;

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const Content = styled.div`
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

export const ApresentationContainer = styled.div`
  border-radius: 8px;
  background: #2c2c2c;
  padding: 16px;
  margin-bottom: 16px;

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

export const Goals = styled.div`
  border-radius: 8px;
  background: #2c2c2c;
  padding: 16px;
  margin-bottom: 16px;

  svg {
    color: #48cef7;
    margin-right: 16px;
  }
`;

export const FavoriteProjects = styled.div`
  border-radius: 8px;
  background: #2c2c2c;
  padding: 16px;
  margin-bottom: 16px;

  svg {
    color: #48cef7;
    margin-right: 16px;
  }
`;

export const Skills = styled.div`
  border-radius: 8px;
  background: #2c2c2c;
  padding: 16px;
  margin-bottom: 16px;

  svg {
    color: #48cef7;
    margin-right: 16px;
  }
`;

export const Courses = styled.div`
  border-radius: 8px;
  background: #2c2c2c;
  padding: 16px;
  margin-bottom: 16px;

  svg {
    color: #48cef7;
    margin-right: 16px;
  }
`;
