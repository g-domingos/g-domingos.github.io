import { HeaderStyle } from "./styles";
import Gitlogo from "../../assets/Git.svg";
import Rectangle from "../../assets/effect.svg";
import Rectangle1 from "../../assets/rectangle.svg";

export const Header = () => {
  return (
    <HeaderStyle>
      <img src={Rectangle} alt="" />
      <div>
        <img src={Gitlogo} alt="" />
      </div>
      <img src={Rectangle1} alt="" />
    </HeaderStyle>
  );
};
