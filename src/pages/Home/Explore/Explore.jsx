import SectionWrapper from "../../../components/SectionWrapper/SectionWrapper";
import {
  Heading,
  MediaTypeContainer,
  MediaCard,
} from "./styles/Explore.styled";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const navigate = useNavigate();
  return (
    <SectionWrapper>
      <Heading>Explore Now</Heading>
      <MediaTypeContainer>
        <MediaCard onClick={() => navigate(`/explore/movies`)}>
          Movies
        </MediaCard>
        <MediaCard onClick={() => navigate(`/explore/tv`)}>TV Show</MediaCard>
      </MediaTypeContainer>
    </SectionWrapper>
  );
};

export default Explore;
