import Cards from "../Cards/Cards";
import {
  CarousalItem,
  CardMediaInfo,
  CardMediaName,
  CardMediaDate,
} from "./styles/Item.styled";

const Item = () => {
  return (
    <CarousalItem>
      <Cards />
      <CardMediaInfo>
        <CardMediaName>Animal</CardMediaName>
        <CardMediaDate>20 Dec, 2023</CardMediaDate>
      </CardMediaInfo>
    </CarousalItem>
  );
};

export default Item;
