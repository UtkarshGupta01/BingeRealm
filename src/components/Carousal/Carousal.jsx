import { useRef } from "react";
import Item from "../CarousalItem/Item";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import {
  CarousalSection,
  NavArrowLeft,
  NavArrowRight,
  CarousalItems,
  Loading,
  LoadingGif,
} from "./styles/Carousal.styled";
import poster from "/images/Poster.png";
import loadingGif from "/gif/loading.gif";

const Carousal = ({ data, loading, current_media }) => {
  const { url } = useSelector((state) => state.home);
  const carousalContainer = useRef();
  const navigate = useNavigate();
  const carousalNavigation = (dir) => {
    const container = carousalContainer.current;

    const scrollVal =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth - 20)
        : container.scrollLeft + (container.offsetWidth - 20);

    container.scrollTo({
      left: scrollVal,
      behaviour: "smooth",
    });
  };

  return (
    <CarousalSection>
      {!loading ? (
        <CarousalItems ref={carousalContainer}>
          {data?.map((item) => {
            const posterUrl = item.poster_path
              ? url.poster + item.poster_path
              : poster;
            let mediaType = "";
            if (item.media_type) {
              if (item.media_type === "tv") {
                mediaType = "TV";
              } else {
                mediaType = "Movie";
              }
            } else {
              mediaType = null;
            }
            return (
              <Item
                key={item.id}
                posterUrl={posterUrl}
                posterName={item.title || item.name}
                posterRelease={dayjs(
                  item.first_air_date || item.release_date
                ).format("DD MMM, YYYY")}
                mediaType={mediaType}
                genres={item.genre_ids}
                onClick={() =>
                  navigate(`/${item.media_type || current_media}/${item.id}`)
                }
              />
            );
          })}
        </CarousalItems>
      ) : (
        <Loading>
          <LoadingGif src={loadingGif} alt="" />
          <LoadingGif src={loadingGif} alt="" />
          <LoadingGif src={loadingGif} alt="" />
          <LoadingGif src={loadingGif} alt="" />
          <LoadingGif src={loadingGif} alt="" />
          <LoadingGif src={loadingGif} alt="" />
        </Loading>
      )}
      <NavArrowLeft onClick={() => carousalNavigation("left")}>
        <FaArrowLeft />
      </NavArrowLeft>
      <NavArrowRight onClick={() => carousalNavigation("right")}>
        <FaArrowRight />
      </NavArrowRight>
    </CarousalSection>
  );
};

export default Carousal;
