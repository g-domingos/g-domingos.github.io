import styled from "styled-components";

export const CardStyles = styled.div`
  width: 414px;
  height: 260px;
  background: #112131;
  border-radius: 10px;

  .first {
    padding: 32px;

    & > div:first-child {
      display: flex;
      justify-content: space-between;

      span {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
        color: #7b96b2;
      }
    }
  }

  strong {
    color: white;
  }

  text {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: #afc2d4;
  }
`;
