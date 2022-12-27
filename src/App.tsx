import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { MainBody } from "./components/Body/styles";
import { Feed } from "./components/Feed";
import { Header } from "./components/Header";
import { ProfileCard } from "./components/ProfileCard";
import { Router } from "./Routes";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
