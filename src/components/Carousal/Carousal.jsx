import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { CarousalSection } from "./Carousal.styled";
import CarousalItem from "../CarousalItem/CarousalItem";

const Carousal = () => {
  return (
    <CarousalSection>
      <CarousalItem />
      <CarousalItem />
      <CarousalItem />
    </CarousalSection>
  );
};

export default Carousal;
