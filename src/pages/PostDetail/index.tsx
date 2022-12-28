import { MainBody } from "../../components/Body/styles";
import { Feed } from "../../components/Feed";
import { Header } from "../../components/Header";
import { ProfileCard } from "../../components/ProfileCard";
import { ProfileCardStyle } from "../../components/ProfileCard/styles";
import { GlobalStyle } from "../../styles/global";
import gitLogo from "../../assets/githubIcon.svg";
import Comments from "../../assets/comments.svg";
import DateIcon from "../../assets/date.svg";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { DescriptionDiv } from "./styles";

export const PostDetail = () => {
  const params = useParams();
  const { postId } = params;

  const [repoDetails, setRepoDetails] = useState<any>();
  const [comments, setComments] = useState([]);

  async function getRepoDetails(postId?: string | any) {
    const response = await axios.get(
      "https://api.github.com/users/g-domingos/repos"
    );
    setRepoDetails(
      response.data.filter((item: any) => {
        return item.id === +postId;
      })[0]
    );

    const comments = await axios.get(
      "https://api.github.com/repos/g-domingos/coffeShop/comments"
    );
    setComments(comments.data);
  }

  console.log(repoDetails);

  useEffect(() => {
    getRepoDetails(postId);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <MainBody>
        <ProfileCardStyle>
          <div className="postInfo">
            <div>
              <Link to="/" style={{ "textDecoration": 'none', color: "#3294f8" }}>
                <span>voltar</span>
              </Link>
              <a
                href={repoDetails?.html_url}
                target="_blank"
                style={{ textDecoration: "none", color: "#3294f8" }}
              >
                <span>ver no github</span>
              </a>
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
                <span>
                  {moment(new Date(repoDetails?.created_at)).fromNow()}
                </span>
              </div>
            </div>
          </div>
        </ProfileCardStyle>
        <DescriptionDiv>{repoDetails?.description}</DescriptionDiv>
        {/* <Feed /> */}
      </MainBody>
    </>
  );
};
