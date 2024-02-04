import SectionWrapper from "../../../components/SectionWrapper/SectionWrapper";
import {
  Heading,
  MediaTypeContainer,
  MediaCard,
  MediaVideo,
  MediaTitle,
} from "./styles/Explore.styled";
import { useNavigate } from "react-router-dom";
import demo from "/gif/hero_demo.mp4";

const Explore = () => {
  const navigate = useNavigate();
  return (
    <SectionWrapper>
      <Heading>Explore Now</Heading>
      <MediaTypeContainer>
        <MediaCard onClick={() => navigate(`/explore/movies`)}>
          <MediaTitle>Movies</MediaTitle>
          <MediaVideo src={demo} autoPlay muted loop />
        </MediaCard>
        <MediaCard onClick={() => navigate(`/explore/tv`)}>TV Show</MediaCard>
      </MediaTypeContainer>
    </SectionWrapper>
  );
};

export default Explore;
