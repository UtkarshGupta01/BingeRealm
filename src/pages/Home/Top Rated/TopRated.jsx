import SectionWrapper from "../../../components/SectionWrapper/SectionWrapper";
import { Heading, HeadingContainer } from "./styles/TopRated.styled";
import Carousal from "../../../components/Carousal/Carousal";
import TabSwitch from "../../../components/TabSwitch/TabSwitch";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";

const TopRated = () => {
  const [tab, setTab] = useState("movie");
  const { data, loading } = useFetch(`/${tab}/top_rated`);
  const onTabChange = (tab) => {
    setTab(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <SectionWrapper>
      <HeadingContainer>
        <Heading>Top Rated</Heading>
        <TabSwitch data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </HeadingContainer>
      <Carousal data={data?.results} loading={loading} current_media={tab} />
    </SectionWrapper>
  );
};

export default TopRated;
