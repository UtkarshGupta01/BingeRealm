import SectionWrapper from "../../../components/SectionWrapper/SectionWrapper";
import { Heading, HeadingContainer } from "./styles/OngoingTv.styled";
import Carousal from "../../../components/Carousal/Carousal";
import useFetch from "../../../hooks/useFetch";

const OngoingTv = () => {
  const prevMonth = new Date(new Date().setMonth(new Date().getMonth() - 1))
    .toISOString()
    .split("T")[0];
  const { data, loading } = useFetch(
    `/discover/tv?air_date.gte=${prevMonth}&include_adult=true&include_null_first_air_dates=true&language=en-US&sort_by=vote_count.desc`
  );
  return (
    <SectionWrapper>
      <HeadingContainer>
        <Heading>Ongoing TV Shows</Heading>
      </HeadingContainer>
      <Carousal data={data?.results} loading={loading} />
    </SectionWrapper>
  );
};

export default OngoingTv;
