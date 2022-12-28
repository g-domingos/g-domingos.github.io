import styled from "styled-components";

export const MainDiv = styled.div`
  margin-top: 72px;
  width: 100%;
  height: 100px;

  & div:first-child {
    margin-bottom: 12px;
  }
  label {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 160%;
    color: #c4d4e3;
  }

  .feedCards {
    width: 100%;
    margin-top: 48px;
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
  }
`;


