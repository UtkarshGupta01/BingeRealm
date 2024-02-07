import SectionWrapper from "../../../components/SectionWrapper/SectionWrapper";
import { Heading, HeadingContainer } from "./styles/Upcoming.styled";
import Carousal from "../../../components/Carousal/Carousal";
import TabSwitch from "../../../components/TabSwitch/TabSwitch";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";

const Upcoming = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  const futureDate = new Date(
    new Date().setFullYear(new Date().getFullYear() + 2)
  )
    .toISOString()
    .split("T")[0];
  const [tab, setTab] = useState("movie");
  const [release, setRelease] = useState(
    `primary_release_date.gte=${currentDate}&primary_release_date.lte=${futureDate}`
  );
  const { data, loading } = useFetch(
    `/discover/${tab}?${release}&language=en-US&sort_by=popularity.desc&page=1`
  );
  const onTabChange = (tab) => {
    setTab(tab === "Movies" ? "movie" : "tv");
    setRelease(
      tab === "Movies"
        ? `primary_release_date.gte=${currentDate}&primary_release_date.lte=${futureDate}`
        : `first_air_date.gte=${currentDate}&first_air_date.lte=${futureDate}`
    );
  };
  return (
    <SectionWrapper>
      <HeadingContainer>
        <Heading>Upcoming</Heading>
        <TabSwitch data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </HeadingContainer>
      <Carousal data={data?.results} loading={loading} current_media={tab} />
    </SectionWrapper>
  );
};

export default Upcoming;
