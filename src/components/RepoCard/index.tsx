import moment from "moment";
import { CardStyles } from "./styles";

export const Card = (item: any) => {
  return (
    <CardStyles>
      <div className="first">
        <div>
          <strong>{item.item.name}</strong>
          <span>{moment(new Date(item.item.created_at)).fromNow()}</span>
        </div>
        <div>
          <text>{item.item.description}</text>
        </div>
      </div>
    </CardStyles>
  );
};
