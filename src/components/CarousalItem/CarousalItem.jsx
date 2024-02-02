import Cards from "../Cards/Cards";
import {
  Items,
  CardMediaInfo,
  CardMediaName,
  CardMediaDate,
} from "./styles/CarousalItem.styled";

const CarousalItem = () => {
  return (
    <Items>
      <Cards />
      <CardMediaInfo>
        <CardMediaName>Animal</CardMediaName>
        <CardMediaDate>20 Dec, 2023</CardMediaDate>
      </CardMediaInfo>
    </Items>
  );
};

export default CarousalItem;
