import SectionWrapper from "../../../components/SectionWrapper/SectionWrapper";
import { Heading, HeadingContainer } from "./styles/Trending.styled";
import Carousal from "../../../components/Carousal/Carousal";
import TabSwitch from "../../../components/TabSwitch/TabSwitch";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";

const Trending = () => {
  const [tab, setTab] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${tab}`);

  const onTabChange = (tab) => {
    setTab(tab === "Today" ? "day" : "week");
  };
  return (
    <SectionWrapper>
      <HeadingContainer>
        <Heading>Trending</Heading>
        <TabSwitch data={["Today", "This Week"]} onTabChange={onTabChange} />
      </HeadingContainer>
      <Carousal data={data?.results} loading={loading} />
    </SectionWrapper>
  );
};

export default Trending;
