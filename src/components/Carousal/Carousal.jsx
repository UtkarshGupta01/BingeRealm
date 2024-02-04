import React, { useRef } from "react";
import Item from "../CarousalItem/Item";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import LazyLoadImg from "../LazyLoad/LazyLoadImg";
import {
  CarousalSection,
  NavArrowLeft,
  NavArrowRight,
  CarousalItems,
} from "./Carousal.styled";
import poster from "/images/Poster.png";

const Carousal = ({ data, loading }) => {
  console.log(data);
  const { url, genres } = useSelector((state) => state.home);
  return (
    <CarousalSection className="carousel">
      {!loading ? (
        <CarousalItems className="carouselItems">
          {data?.map((item) => {
            const posterUrl = item.poster_path
              ? url.poster + item.poster_path
              : poster;
            let mediaType = "";
            // let genres = [];
            {
              item.genre_ids.map((g) => {
                console.log(genres[g].name);
              });
            }
            if (item.media_type === "tv") {
              mediaType = "TV";
            } else {
              mediaType = "Movie";
            }
            return (
              <Item
                key={item.id}
                posterUrl={posterUrl}
                posterName={item.title || item.original_name}
                posterRelease={dayjs(
                  item.first_air_date || item.release_date
                ).format("DD MMM, YYYY")}
                mediaType={mediaType}
              />
            );
          })}
        </CarousalItems>
      ) : (
        <span>Loading....</span>
      )}
      <NavArrowLeft>
        <FaArrowLeft />
      </NavArrowLeft>
      <NavArrowRight>
        <FaArrowRight />
      </NavArrowRight>
    </CarousalSection>
  );
};

export default Carousal;
