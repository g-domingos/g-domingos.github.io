import { ThemeProvider } from "styled-components";
import { MainBody } from "../../components/Body/styles";
import { Feed } from "../../components/Feed";
import { Header } from "../../components/Header";
import { ProfileCard } from "../../components/ProfileCard";
import { GlobalStyle } from "../../styles/global";
import { defaultTheme } from "../../styles/themes/default";

export function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainBody>
        <ProfileCard />
        <Feed />
      </MainBody>
    </>
  );
}
