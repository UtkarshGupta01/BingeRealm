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
  MovieDate,
  MovieDirector,
  MovieGenres,
  MovieHomepage,
  MovieOverview,
  MoviePoster,
  MovieRatings,
  MovieTagline,
  MovieTime,
  MovieTitle,
  MovieTrailer,
  MovieYear,
  OverviewDesciption,
  PosterImage,
  YoutubeIcon,
} from "./styles/MovieDetails.styled";

const MovieDetails = ({ director, trailerId }) => {
  const { mediaType, id } = useParams();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  const [showVideo, setShowVideo] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const runtimeToHours = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours} hr ${minutes > 0 ? minutes : "0"} min`;
  };

  const handleShowTrailer = () => {
    setShowVideo(true);
    setVideoId(trailerId);
  };

  return (
    <>
      <DetailsMain>
        <MoviePoster>
          <PosterImage src={url?.poster + data?.poster_path} />
        </MoviePoster>
        <div className="media_details">
          <MovieTitle>
            {data?.title}
            <MovieYear>({dayjs(data?.release_date).format("YYYY")})</MovieYear>
          </MovieTitle>
          <MovieTagline>{data?.tagline}</MovieTagline>
          <MovieGenres>
            {data?.genres.map((g) => (
              <Genre key={g.id}>{g.name}</Genre>
            ))}
          </MovieGenres>
          <MovieDirector>
            Directed by: {director?.map((d) => d.name).join(", ")}
          </MovieDirector>
          <MovieRatings>
            Ratings: {data?.vote_average > 0 ? data?.vote_average : "Not Rated"}
          </MovieRatings>
          <MovieTime>
            Runtime:{" "}
            {data?.runtime.length > 0
              ? runtimeToHours(data?.runtime)
              : "Unknown"}{" "}
            <span>Status: {data?.status}</span>
          </MovieTime>
          <MovieDate>
            Release Date: {dayjs(data?.release_date).format("DD MMM YYYY")}
          </MovieDate>
          <MovieOverview>
            Overview: <OverviewDesciption>{data?.overview}</OverviewDesciption>
          </MovieOverview>
          <MovieTrailer onClick={handleShowTrailer}>
            <YoutubeIcon src={youtubeicon} />
            Watch Trailer
          </MovieTrailer>
          {data?.homepage && (
            <MovieHomepage>
              To know more, visit here:{" "}
              <HomepageLink
                href={data?.homepage}
                rel="noreferrer"
                target="_blank"
              >
                {data?.homepage}
              </HomepageLink>
            </MovieHomepage>
          )}
        </div>
      </DetailsMain>
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

MovieDetails.propTypes = {
  director: PropTypes.array,
  trailerId: PropTypes.string,
};

export default MovieDetails;
