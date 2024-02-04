import Cards from "../Cards/Cards";
import {
  CarousalItem,
  CardMediaInfo,
  CardMediaName,
  CardMediaDate,
} from "./styles/Item.styled";

const Item = ({ posterUrl, posterName, posterRelease, mediaType }) => {
  return (
    <CarousalItem className="carouselItem">
      <Cards posterUrl={posterUrl} mediaType={mediaType} />
      <CardMediaInfo>
        <CardMediaName>{posterName}</CardMediaName>
        <CardMediaDate>{posterRelease}</CardMediaDate>
      </CardMediaInfo>
    </CarousalItem>
  );
};

export default Item;
