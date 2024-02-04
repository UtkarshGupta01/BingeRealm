import { Card, CardImage, CardMedia, CardGenres } from "./styles/Cards.styled";

const Cards = ({ posterUrl, mediaType }) => {
  return (
    <Card>
      <CardImage src={posterUrl} alt="poster" />
      <CardMedia>{mediaType}</CardMedia>
      <CardGenres></CardGenres>
    </Card>
  );
};

export default Cards;
