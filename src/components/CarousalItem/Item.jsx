import Cards from "../Cards/Cards";
import {
  CarousalItem,
  CardMediaInfo,
  CardMediaName,
  CardMediaDate,
} from "./styles/Item.styled";

const Item = ({ posterUrl, posterName, posterRelease, mediaType, genres }) => {
  return (
    <CarousalItem>
      <Cards posterUrl={posterUrl} mediaType={mediaType} movieGenres={genres} />
      <CardMediaInfo>
        <CardMediaName>{posterName}</CardMediaName>
        <CardMediaDate>{posterRelease}</CardMediaDate>
      </CardMediaInfo>
    </CarousalItem>
  );
};

export default Item;
