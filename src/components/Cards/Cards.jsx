import { Card, CardImage, CardMedia, CardGenres } from "./styles/Cards.styled";
import { useSelector } from "react-redux";

const Cards = ({ posterUrl, mediaType, movieGenres }) => {
  const { genres } = useSelector((state) => state.home);
  return (
    <Card>
      <CardImage src={posterUrl} alt="poster" />
      <CardMedia>{mediaType}</CardMedia>
      <CardGenres>
        {movieGenres?.map((id) => {
          return <div key={id}>{genres[id].name}</div>;
        })}
      </CardGenres>
    </Card>
  );
};

export default Cards;
