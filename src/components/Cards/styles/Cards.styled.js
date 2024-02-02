import styled from "styled-components";

export const Card = styled.div`
  border-radius: 10px;
  width: 100%;
  min-height: 271px;
  background-color: white;
  overflow: hidden;
  position: relative;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardInfo = styled.div`
  color: black;
  font-size: 40px;
  position: absolute;
  bottom:0;
  left: 0;
`;