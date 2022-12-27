import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  
  body {
    background-color: ${(props) => props.theme["base-background"]};
    font: 400 1rem Roboto; 
  }

`