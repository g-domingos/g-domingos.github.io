import { useForm } from "react-hook-form";
import { SearchBarStyle } from "./styles";

export const SearchBar = ({getRepoDetails}: any) => {
  const { register, handleSubmit } = useForm();
  function fetchData(data: any) {
    getRepoDetails(data.query);
  }

  return (
    <SearchBarStyle onSubmit={handleSubmit(fetchData)}>
      <input
        type="text"
        placeholder="Buscar Conteúdo"
        {...register("query")}
      ></input>
      <button type="submit" style={{ display: "none" }}></button>
    </SearchBarStyle>
  );
};
