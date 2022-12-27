import styled from "styled-components";

export const ProfileCardStyle = styled.div`
  display: flex;
  justify-content: columns;
  max-height: 212px;
  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  color: #e7edf4;
  padding: 32px 32px 32px 40px;

  img {
    height: 148px;
    width: 148px;
    border-radius: 10px;
  }

  .text {
    margin-left: 32px;
    position: relative;

    & div:first-child {
      margin-bottom: 8px;
      font-weight: 400;
      font-size: 16px;
    }

    & div:last-child {
      color: #afc2d4;
      font-weight: 400;
    }
  }

  .link {
    display: flex;
    justify-content: space-between;

    a {
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 160%;
      text-transform: uppercase;
      color: #3294f8;

      img {
        margin-left: 3px;
        height: 12px;
        width: 12px;
      }
    }
  }

  .index {
    position: absolute;
    bottom: 0px;
    display: flex;
    justify-content: space-between;
    width: 393px;

    div {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    img {
      width: 18px;
      height: 18px;
    }
  }

  .postInfo {
    width: 100%;
    img {
      height: 18px;
      width: 18px;
      margin-right: 8px;

    }
    & > div:nth-child(1) {
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 160%;
      text-transform: uppercase;
      color: #3294f8;
      display: flex;
      justify-content: space-between;
    }
    & > div:nth-child(2) {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 130%;
      color: #e7edf4;
      margin-top: 20px;
      margin-bottom: 8px;
    }

    & > div:nth-child(3) {
      width: 390px;
      display: flex;
      justify-content: space-between;


      & > div {
        display: flex;
        align-content: center;
      }
    }
  }
`;
