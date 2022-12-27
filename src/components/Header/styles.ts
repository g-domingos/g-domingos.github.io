import styled from "styled-components";

export const HeaderStyle = styled.div`
  width: 100%;
  height: 296px;
  background: ${(props) => props.theme["base-profile"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  

  div { 
    position: relative;
    top: -64px;
  }
`;
