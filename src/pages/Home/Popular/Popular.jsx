import SectionWrapper from "../../../components/SectionWrapper/SectionWrapper";
import Carousal from "../../../components/Carousal/Carousal";
import TabSwitch from "../../../components/TabSwitch/TabSwitch";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { Heading, HeadingContainer } from "../Trending/styles/Trending.styled";

const Popular = () => {
  const [tab, setTab] = useState("movie");
  const { data, loading } = useFetch(`/${tab}/popular`);

  const onTabChange = (tab) => {
    setTab(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <SectionWrapper>
      <HeadingContainer>
        <Heading>Popular</Heading>
        <TabSwitch data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </HeadingContainer>
      <Carousal data={data?.results} loading={loading} current_media={tab} />
    </SectionWrapper>
  );
};

export default Popular;
