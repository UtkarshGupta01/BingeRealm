import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import MovieDetails from "./MovieDetails/MovieDetails";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data: videos, loading: videoLoading } = useFetch(
    `/${mediaType}/${id}/videos`
  );
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  const director = credits?.crew.filter((d) => d.job === "Director");

  const trailerId = videos?.results.filter((t) => t.type === "Trailer")[0].key;

  return <MovieDetails director={director} trailerId={trailerId} />;
};

export default Details;
