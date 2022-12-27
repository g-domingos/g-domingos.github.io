import { MainBody } from "../../components/Body/styles";
import { Feed } from "../../components/Feed";
import { Header } from "../../components/Header";
import { ProfileCard } from "../../components/ProfileCard";
import { ProfileCardStyle } from "../../components/ProfileCard/styles";
import { GlobalStyle } from "../../styles/global";
import gitLogo from "../../assets/githubIcon.svg";
import Comments from "../../assets/comments.svg";
import DateIcon from "../../assets/date.svg";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

export const PostDetail = () => {

  const params = useParams()
  const {postId} = params
  
  const [repoDetails, setRepoDetails] = useState<any>();
  const [comments, setComments] = useState([])

  async function getRepoDetails() {
    const response = await axios.get(
      "https://api.github.com/users/g-domingos/repos"
    );
    setRepoDetails(response.data.filter((item: any) => item.id === +postId)[0]);

    const comments = await axios.get("https://api.github.com/repos/g-domingos/coffeShop/comments");
    setComments(comments.data)
  }




  useEffect(() => {
    getRepoDetails();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <MainBody>
        <ProfileCardStyle>
          <div className="postInfo">
            <div>
              <span>voltar</span>
              <span>ver no github</span>
            </div>
            <div>{repoDetails?.name}</div>
            <div>
              <div>
                <img src={gitLogo} />
                <span>{repoDetails?.owner.login}</span>
              </div>
              <div>
                <img src={Comments} />
                <span>{setComments.length} comentários</span>
              </div>
              <div>
                <img src={DateIcon} />
                <span>{moment(new Date(repoDetails?.created_at)).fromNow()}</span>
              </div>
            </div>
          </div>
        </ProfileCardStyle>
        {/* <Feed /> */}
      </MainBody>
    </>
  );
};
