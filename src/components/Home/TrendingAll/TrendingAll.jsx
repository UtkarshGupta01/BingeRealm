import {
  TrendingSection,
  Heading,
  Container,
  Card,
  CardImage,
  CardInfo,
} from "./styles/TrendingAll.styled";
import dummy from "/images/dummy.jpeg";

const TrendingAll = () => {
  return (
    <TrendingSection>
      <Heading>Trending</Heading>
      <Container>
        <Card>
          <CardImage src={dummy} alt="poster" />
          <CardInfo></CardInfo>
        </Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Container>
    </TrendingSection>
  );
};

export default TrendingAll;
