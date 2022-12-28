import styled from "styled-components";

export const SearchBarStyle = styled.form`
  input {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    padding: 16px;
    color: white;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    background-color: ${(props) => props.theme["base-input"]};
    border: 1px solid #1c2f41;
    border-radius: 6px;

    ::placeholder {
      color: #1c2f41;
    }

    :focus {
      outline: none !important;
      border: 1px solid #3294f8;
    }
  }
`;
