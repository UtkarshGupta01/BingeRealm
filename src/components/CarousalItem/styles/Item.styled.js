import styled from "styled-components";

export const CarousalItem = styled.div`
width: 200px;
cursor: pointer;
flex-shrink: 0;
transition: all 0.35s;
&:hover{
  transform: scale(1.05);
}

`
export const CardMediaInfo = styled.div`
padding-top: 10px;
color: white;
`
export const CardMediaName = styled.div`
font-size: 18px;
font-weight: 500;
`
export const CardMediaDate = styled.div`
font-size: 14px;
font-weight: 300;
`
