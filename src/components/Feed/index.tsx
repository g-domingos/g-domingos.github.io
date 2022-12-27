import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../RepoCard";
import { MainDiv, SearchBar } from "./styles";

export const Feed = () => {
  const [repoDetails, setRepoDetails] = useState<any>();

  async function getRepoDetails() {
    const response = await axios.get(
      "https://api.github.com/users/g-domingos/repos"
    );
    setRepoDetails(response.data);
  }

  useEffect(() => {
    getRepoDetails();
  }, []);

  return (
    <MainDiv>
      <div>
        <label>Publicações</label>
      </div>
      <SearchBar placeholder="Buscar Conteúdo"></SearchBar>
      <div className="feedCards">
        {repoDetails?.map((item: any) => (
          <Link to={`/post/${item.id}`}>
            <Card item={item} />
          </Link>
        ))}
      </div>
    </MainDiv>
  );
};
