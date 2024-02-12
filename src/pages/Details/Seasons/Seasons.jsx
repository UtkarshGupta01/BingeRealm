import { useParams } from "react-router-dom";
import SectionWrapper from "../../../components/SectionWrapper/SectionWrapper";
import useFetch from "../../../hooks/useFetch";
import {
  SeasonHeading,
  SeasonNumber,
  SeasonOption,
  SeasonEpisodes,
  SeasonOverview,
  SeasonSection,
  SeasonTitle,
} from "./styles/Seasons.styled";
import { useState } from "react";
import dayjs from "dayjs";

const Seasons = () => {
  const { mediaType, id } = useParams();
  const { data } = useFetch(`/${mediaType}/${id}`);
  const [seasonTitle, setSeasonTitle] = useState("");
  const [seasonDate, setSeasonDate] = useState("");
  const [seasonOverview, setSeasonOverview] = useState("");
  const [seasonEpisodes, setSeasonEpisodes] = useState("");

  const handleSeason = (event) => {
    const seasonNumber = event.target.value;
    if (event.target.value === "None") {
      setSeasonTitle("");
      setSeasonDate("");
      setSeasonOverview("");
      setSeasonEpisodes("");
    } else {
      const season = data?.seasons.find(
        (season) => season.season_number == seasonNumber
      );
      console.log(season);
      setSeasonTitle(season?.name);
      setSeasonDate(season.air_date);
      setSeasonOverview(season?.overview);
      setSeasonEpisodes(`Total Episodes : ${season?.episode_count}`);
    }
  };

  return (
    <SectionWrapper>
      <SeasonSection>
        <SeasonHeading>
          <SeasonNumber onChange={handleSeason}>
            <SeasonOption value="None">Select Season</SeasonOption>
            {data?.seasons.map((season) => (
              <SeasonOption key={season.id} value={season.season_number}>
                Season {season.season_number}
              </SeasonOption>
            ))}
          </SeasonNumber>
          <SeasonTitle>
            {seasonTitle}
            <span style={{ fontSize: "20px" }}>
              {seasonDate === "" || seasonDate === null
                ? ""
                : `(${dayjs(seasonDate).format("DD MMM YYYY")})`}
            </span>
          </SeasonTitle>
        </SeasonHeading>
        <SeasonEpisodes>
          {seasonEpisodes === "" || seasonEpisodes === null
            ? ""
            : seasonEpisodes}
        </SeasonEpisodes>
        <SeasonOverview>
          {seasonOverview === "" ? "No Overview Available" : seasonOverview}
        </SeasonOverview>
      </SeasonSection>
    </SectionWrapper>
  );
};

export default Seasons;
