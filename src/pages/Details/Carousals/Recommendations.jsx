import Carousal from "../../../components/Carousal/Carousal";
import SectionWrapper from "../../../components/SectionWrapper/SectionWrapper";
import { Title } from "../Cast/styles/Cast.styled";
import useFetch from "../../../hooks/useFetch";

const Recommendations = ({ mediaType, id }) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/recommendations`);

  return (
    <SectionWrapper>
      <Title>Recommendations</Title>
      <Carousal data={data?.results} loading={loading}></Carousal>
    </SectionWrapper>
  );
};

export default Recommendations;
