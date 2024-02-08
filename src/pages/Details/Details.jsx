import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import MovieDetails from "./MovieDetails/MovieDetails";
import Cast from "./Cast/Cast";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data: videos, loading: videoLoading } = useFetch(
    `/${mediaType}/${id}/videos`
  );
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  const director = credits?.crew.filter((d) => d.job === "Director");
  const topCast = credits?.cast
    .filter((actor) => actor.known_for_department === "Acting")
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 10);
  const trailerId = videos?.results.filter((t) => t.type === "Trailer")[0].key;

  return (
    <>
      <MovieDetails director={director} trailerId={trailerId} />
      <Cast topCast={topCast}></Cast>;
    </>
  );
};

export default Details;
