import styled from "styled-components";

export const Card = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 300px;
  background-color: white;
  overflow: hidden;
  position: relative;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardMedia = styled.div`
  background-color: #283044;
  padding: 5px 10px ;
  color: white;
  font-size: 14px;
  font-weight: 700;
  position: absolute;
  top:0;
  right: 0;
`;

export const CardGenres = styled.div`
  background-color: #283044;
  padding: 5px 10px ;
  color: white;
  font-size: 14px;
  font-weight: 700;
  position: absolute;
  bottom:0;
  right: 0;
`;