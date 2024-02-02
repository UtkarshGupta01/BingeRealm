import SectionWrapper from "../../../components/SectionWrapper/SectionWrapper";
import { Heading } from "./styles/TrendingAll.styled";
import Carousal from "../../../components/Carousal/Carousal";
import CarousalItem from "../../../components/CarousalItem/CarousalItem";

const TrendingAll = () => {
  return (
    <SectionWrapper>
      <Heading>Trending</Heading>
      <Carousal>
        <CarousalItem />
        <CarousalItem />
        <CarousalItem />
        <CarousalItem />
        <CarousalItem />

        {/* <Card>
          <CardImage src={dummy} alt="poster" />
          <CardInfo></CardInfo>
        </Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card> */}
      </Carousal>
    </SectionWrapper>
  );
};

export default TrendingAll;
