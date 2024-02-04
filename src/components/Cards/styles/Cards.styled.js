import styled from "styled-components";

export const Card = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardMedia = styled.div`
  background-color: #283044;
  padding: 1px 5px ;
  color: white;
  font-size: 14px;
  font-weight: 700;
  position: absolute;
  top:0;
  right: 0;
`;

export const CardGenres = styled.div`
  background-color: #283044;
  padding: 1px ;
  width: 100%;
  color: white;
  display: flex;
  flex-wrap: wrap;
  column-gap:15px ;
  justify-content:center;
  font-size: 12px;
  font-weight: 500;
  position: absolute;
  bottom:0;
  right: 0;
  `;
