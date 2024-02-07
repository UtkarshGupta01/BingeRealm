import { useParams } from "react-router-dom";
import {
  DetailsMain,
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
} from "./styles/Details.styled";
import demo from "/images/demo.jpg";
import useFetch from "../../hooks/useFetch";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  const director = credits?.crew.filter((f) => f.job === "Director");
  console.log(director);

  return (
    <DetailsMain>
      <MediaPoster>
        <PosterImage src={demo} />
      </MediaPoster>
      <div className="media_details">
        <MediaTitle>
          {data?.title}
          <MediaYear>&#40;1993&#41;</MediaYear>
        </MediaTitle>
        <MediaTagline>{data?.tagline}</MediaTagline>
        <MediaGenres>
          <div
            style={{
              backgroundColor: "black",
              padding: "2px 10px 5px",
              borderRadius: "7px",
            }}
          >
            Adventure
          </div>
          <div
            style={{
              backgroundColor: "black",
              padding: "2px 10px 5px",
              borderRadius: "7px",
            }}
          >
            Action
          </div>
          <div
            style={{
              backgroundColor: "black",
              padding: "2px 10px 5px",
              borderRadius: "7px",
            }}
          >
            Comedy
          </div>
        </MediaGenres>
        {/* <MediaDirector>Directed by : {director}</MediaDirector> */}
        <MediaRatings>Ratings : {data?.vote_average}</MediaRatings>
        <MediaTime>
          Runtime : {data?.runtime} <span>Status : {data?.status}</span>
        </MediaTime>
        <MediaDate>Release Date : {data?.release_date}</MediaDate>
        <MediaOverview>
          Overview : <OverviewDesciption>{data?.overview}</OverviewDesciption>
        </MediaOverview>
        <MediaTrailer>Watch Trailer</MediaTrailer>
        <MediaHomepage>
          To know more, visit here:{" "}
          <HomepageLink
            href="https://one-piece.com/index.html"
            rel="noreferrer"
            target="_blank"
          >
            https://one-piece.com/index.html
          </HomepageLink>
        </MediaHomepage>
      </div>
    </DetailsMain>
  );
};

export default Details;
