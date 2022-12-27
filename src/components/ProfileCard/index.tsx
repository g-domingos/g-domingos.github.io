import axios from "axios";
import { useEffect, useState } from "react";
import { ProfileCardStyle } from "./styles";
import LinkToImg from "../../assets/Icon.svg";
import gitLogo from "../../assets/githubIcon.svg";
import Followers from "../../assets/followers.svg";
import companyIcon from "../../assets/companyIcon.svg";

export const ProfileCard = () => {
  const [githubData, setGithubData] = useState({} as any);

  async function getGithubData() {
    const response = await axios.get("https://api.github.com/users/g-domingos");
    setGithubData(response.data);
  }

  useEffect(() => {
    getGithubData();
  }, []);

  return (
    <ProfileCardStyle>
      <div>
        <img src={githubData.avatar_url} alt="" />
      </div>
      <div className="text">
        <div className="link">
          <strong>{githubData.name}</strong>
          <a href={githubData.html_url} target="_blank">
            github
            <img src={LinkToImg} />
          </a>
        </div>
        <div>
          <label>{githubData.bio}</label>
        </div>
        <div className="index">
          <div>
            <img src={gitLogo} />
            <label>{githubData.login}</label>
          </div>
          <div>
            <img src={companyIcon} />
            <label>{githubData.company}</label>
          </div>
          <div>
            <img src={Followers} />
            <label>{githubData.followers} seguidores</label>
          </div>
        </div>
      </div>
    </ProfileCardStyle>
  );
};
