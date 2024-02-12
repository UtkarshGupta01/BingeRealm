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
import avatar from "/images/cast.png";

const Cast = ({ topCast }) => {
  const { url } = useSelector((state) => state.home);
  return (
    <SectionWrapper>
      <Title>Top Cast</Title>
      <CastCarousal>
        {topCast?.map((cast) => {
          const avatarUrl = cast?.profile_path
            ? url?.profile + cast?.profile_path
            : avatar;
          return (
            <Casts key={cast.cast_id}>
              <CastProfile>
                <CastImage src={avatarUrl} />
              </CastProfile>
              <CastInfo>
                <CastName>{cast.name}</CastName>
                <span style={{ opacity: "0.3", fontSize: "15px" }}>as</span>
                <CastCharName>{cast.character}</CastCharName>
              </CastInfo>
            </Casts>
          );
        })}
      </CastCarousal>
    </SectionWrapper>
  );
};

export default Cast;
