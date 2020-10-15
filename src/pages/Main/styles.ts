import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1120px;
  margin: 0 auto;
`;

export const FirstColumn = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  margin-top: 32px;
`;

export const TopContainer = styled.div`
  width: 345px;

  > img {
    height: 315px;
    width: 100%;
    margin-bottom: 24px;
  }

  span {
    color: #e9f6ff;

    div {
      background: #18a0fb;
      height: 74px;
      font-weight: 700;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 24px;

      & + div {
        background: #2c2c2c;
        height: 44px;

        font-size: 16px;
        font-weight: 500;

        margin-bottom: 24px;
      }
    }
  }
`;

export const BottomContainer = styled.div`
  width: 345px;
  background: #e9f6ff;
  padding: 24px 24px 16px 24px;

  div {
    margin-bottom: 8px;

    a {
      color: #18a0fb;
    }
  }

  .email {
    color: #18a0fb;
  }
`;

export const SecondColumn = styled.div`
  width: 70%;
  margin-top: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    background: #e9f6ff;
    padding: 24px;
    margin-bottom: 24px;

    h2 {
      font-weight: 600;
      margin-bottom: 16px;
    }

    p {
      word-wrap: break-word;
      font-size: 18px;
    }
  }
`;
