import Carousal from "../../../components/Carousal/Carousal";
import SectionWrapper from "../../../components/SectionWrapper/SectionWrapper";
import { Title } from "../Cast/styles/Cast.styled";
import useFetch from "../../../hooks/useFetch";

const Similars = ({ mediaType, id }) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);
  return (
    <SectionWrapper>
      <Title>
        {mediaType === "movie" ? "Similiar Movies" : "Similar TV Shows"}
      </Title>
      <Carousal data={data?.results} loading={loading}></Carousal>
    </SectionWrapper>
  );
};

export default Similars;
