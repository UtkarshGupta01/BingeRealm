import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Cast from "./Cast/Cast";
import VideoClips from "./VideoClips/VideoClips";
import Similars from "./Carousals/Similars";
import Recommendations from "./Carousals/Recommendations";
import DetailsBanner from "./DetailsBanner.jsx/DetailsBanner";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data: videos, loading: videoLoading } = useFetch(
    `/${mediaType}/${id}/videos`
  );
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  console.log(data);
  console.log(credits);
  console.log(videos);

  const director = credits?.crew.filter((d) => d.job === "Director");
  const writer = credits?.crew.filter((w) => w.job === "Original Concept");
  const topCast = credits?.cast
    .filter((actor) => actor.known_for_department === "Acting")
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 15);

  let trailerId = "";
  const trailerVideo = videos?.results.find((t) => t.type === "Trailer");
  if (trailerVideo) {
    trailerId = trailerVideo.key;
  } else if (videos?.results.length > 0) {
    trailerId = videos?.results[0].key;
  }

  return (
    <>
      <DetailsBanner
        director={director}
        writer={writer}
        trailerId={trailerId}
      ></DetailsBanner>
      <Cast topCast={topCast}></Cast>
      <VideoClips videos={videos?.results}></VideoClips>
      <Similars mediaType={mediaType} id={id}></Similars>
      <Recommendations mediaType={mediaType} id={id}></Recommendations>
    </>
  );
};

export default Details;
