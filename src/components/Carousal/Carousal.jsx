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
  // const carousalContainer = useRref();
  return (
    <CarousalSection>
      <CarousalItems>
        <Item />
      </CarousalItems>
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
