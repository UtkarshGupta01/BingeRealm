import { Section } from "../Home.styled";
import {
  Heading,
  Container,
  Card,
  CardImage,
  CardInfo,
} from "./styles/TrendingAll.styled";
import dummy from "/images/dummy.jpeg";

const TrendingAll = () => {
  return (
    <Section>
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
    </Section>
  );
};

export default TrendingAll;
