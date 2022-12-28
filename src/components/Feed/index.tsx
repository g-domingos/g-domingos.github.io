import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../RepoCard";
import { SearchBar } from "../SearchBar";
import { MainDiv } from "./styles";

export const Feed = () => {
  const [repoDetails, setRepoDetails] = useState<any>();

  async function getRepoDetails(data?: any) {
    if (!data) {
      const response = await axios.get(
        "https://api.github.com/users/g-domingos/repos"
      );
      setRepoDetails(response.data);
    } else {
      const response = await axios.get(
        "https://api.github.com/users/g-domingos/repos"
      );
      setRepoDetails(response.data.filter((item: any) => item.name === data));
    }
  }

  useEffect(() => {
    getRepoDetails();
  }, []);

  return (
    <MainDiv>
      <div>
        <label>Publicações</label>
      </div>
      <SearchBar getRepoDetails={getRepoDetails}></SearchBar>
      <div className="feedCards">
        {repoDetails?.map((item: any) => (
          <Link to={`/post/${item.id}`} style={{ textDecoration: "none" }}>
            <Card item={item} />
          </Link>
        ))}
      </div>
    </MainDiv>
  );
};
