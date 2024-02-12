import { useState } from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import VideoPopup from "../../../components/VideoPopup/VideoPopup";
import youtubeicon from "/icons/youtube.png";
import PropTypes from "prop-types";
import {
  DetailsMain,
  Genre,
  HomepageLink,
  MediaDate,
  MediaDirector,
  MediaGenres,
  MediaHomepage,
  MediaOverview,
  MediaPoster,
  MediaRatings,
  MediaTagline,
  MediaTime,
  MediaTitle,
  MediaTrailer,
  MediaYear,
  OverviewDesciption,
  PosterImage,
  YoutubeIcon,
  MediaLength,
  MediaEpisodeInfo,
} from "./styles/DetailsBanner.styled";
import poster from "/images/Poster.png";

const DetailsBanner = ({ director, writer, trailerId }) => {
  const { mediaType, id } = useParams();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  const [showVideo, setShowVideo] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const runtimeToHours = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours > 0 ? hours : "0"} hr ${minutes > 0 ? minutes : "0"} min`;
  };

  const handleShowTrailer = () => {
    setShowVideo(true);
    setVideoId(trailerId);
  };

  const posterUrl = data?.poster_path
    ? url?.poster + data?.poster_path
    : poster;

  return (
    <>
      {/* Main Details Section */}
      <DetailsMain>
        {/* Poster */}
        <MediaPoster>
          <PosterImage src={posterUrl} />
        </MediaPoster>

        {/*  Media Details*/}
        <div className="media_details">
          {/* Title with year */}
          <MediaTitle>
            {data?.title || data?.name}
            {mediaType === "movie" ? (
              <MediaYear>
                ({dayjs(data?.release_date).format("YYYY")})
              </MediaYear>
            ) : (
              <MediaYear>
                ({dayjs(data?.first_air_date).format("YYYY")})
              </MediaYear>
            )}
          </MediaTitle>

          {/* Tagline */}
          <MediaTagline>{data?.tagline}</MediaTagline>

          {/* Genres */}
          <MediaGenres>
            {data?.genres.map((g) => (
              <Genre key={g.id}>{g.name}</Genre>
            ))}
          </MediaGenres>

          {/* Director */}
          {director?.length > 0 && (
            <MediaDirector>
              Directed by: {director?.map((d) => d.name).join(", ")}
            </MediaDirector>
          )}

          {/* Writer */}
          {writer?.length > 0 && (
            <MediaDirector>
              Written By : {writer?.map((w) => w.name).join(", ")}
            </MediaDirector>
          )}

          {/* Creator */}
          {data?.created_by?.length > 0 && (
            <MediaDirector>
              Created by: {data?.created_by?.map((d) => d.name).join(", ")}
            </MediaDirector>
          )}

          {/* Tv seasons and episodes */}
          {mediaType === "tv" ? (
            <MediaLength>
              Total Seasons: {data?.number_of_seasons}{" "}
              <span>Total Episodes: {data?.number_of_episodes}</span>
            </MediaLength>
          ) : (
            ""
          )}

          {/* ratings */}
          <MediaRatings>
            Ratings: {data?.vote_average > 0 ? data?.vote_average : "Not Rated"}
          </MediaRatings>

          {/* Runtime , Status, Release date */}
          {mediaType === "movie" ? (
            <>
              <MediaTime>Runtime: {runtimeToHours(data?.runtime)}</MediaTime>
              <MediaDate>
                <span>Status: {data?.status}</span>
                Release Date: {dayjs(data?.release_date).format("DD MMM YYYY")}
              </MediaDate>
            </>
          ) : (
            <MediaDate>
              <span>Status: {data?.status}</span>
              Release Date: {dayjs(data?.first_air_date).format("DD MMM YYYY")}
            </MediaDate>
          )}

          {mediaType === "tv" && (
            <MediaEpisodeInfo>
              Latest Episode :{" "}
              {dayjs(data?.last_air_date).format("DD MMM YYYY")}
              {data?.status === "Ended" ? (
                ""
              ) : (
                <span>
                  Next Episode :{" "}
                  {dayjs(data?.next_episode_to_air?.air_date).format(
                    "DD MMM YYYY"
                  )}
                </span>
              )}
            </MediaEpisodeInfo>
          )}

          {/* Overview */}
          <MediaOverview>
            Overview: <OverviewDesciption>{data?.overview}</OverviewDesciption>
          </MediaOverview>

          {/* Trailer */}
          <MediaTrailer onClick={handleShowTrailer}>
            <YoutubeIcon src={youtubeicon} />
            Watch Trailer
          </MediaTrailer>

          {/* Homepage Link */}
          {data?.homepage && (
            <MediaHomepage>
              To know more, visit here:{" "}
              <HomepageLink
                href={data?.homepage}
                rel="noreferrer"
                target="_blank"
              >
                {data?.homepage}
              </HomepageLink>
            </MediaHomepage>
          )}
        </div>
      </DetailsMain>

      {/* Video Popup */}
      {showVideo && (
        <VideoPopup
          videoId={videoId}
          setVideoId={setVideoId}
          setShow={setShowVideo}
        />
      )}
    </>
  );
};

DetailsBanner.propTypes = {
  director: PropTypes.array,
  writer: PropTypes.array,
  trailerId: PropTypes.string,
};

export default DetailsBanner;
