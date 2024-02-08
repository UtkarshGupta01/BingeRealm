import { useSelector } from "react-redux";
import SectionWrapper from "../../../components/SectionWrapper/SectionWrapper";
import {
  CastCarousal,
  CastCharName,
  CastImage,
  CastInfo,
  CastName,
  CastProfile,
  Casts,
  Title,
} from "./styles/Cast.styled";

const Cast = ({ topCast }) => {
  const { url } = useSelector((state) => state.home);
  console.log(topCast);
  return (
    <SectionWrapper>
      <Title>Cast</Title>
      <CastCarousal>
        {topCast?.map((cast) => (
          <Casts key={cast.cast_id}>
            <CastProfile>
              <CastImage src={url?.profile + cast?.profile_path} />
            </CastProfile>
            <CastInfo>
              <CastName>{cast.name}</CastName>
              <span style={{ opacity: "0.3" }}>as</span>
              <CastCharName>{cast.character}</CastCharName>
            </CastInfo>
          </Casts>
        ))}
      </CastCarousal>
    </SectionWrapper>
  );
};

export default Cast;
