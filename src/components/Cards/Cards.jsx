import dummy from "/images/dummy.jpeg";
import { Card, CardImage } from "./styles/Cards.styled";

const Cards = () => {
  return (
    <Card>
      <CardImage src={dummy} alt="poster" />
    </Card>
  );
};

export default Cards;
