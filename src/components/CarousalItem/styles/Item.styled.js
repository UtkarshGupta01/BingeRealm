import styled from "styled-components";

export const CarousalItem = styled.div`
width: 200px;
cursor: pointer;
flex-shrink: 0;
transition: all 0.35s;
&:hover{
  transform: scale(1.05);
}
@media only screen and (max-width: 1056px) {
  width: 180px;
  }
  @media only screen and (max-width: 600px) {
    width: 130px; 
}
  `
export const CardMediaInfo = styled.div`
padding-top: 10px;
color: white;
`
export const CardMediaName = styled.div`
font-size: 18px;
font-weight: 500;
@media only screen and (max-width: 1056px) {
  font-size: 17px;
}
@media only screen and (max-width: 600px) {
    font-size: 15px; 
}
`
export const CardMediaDate = styled.div`
font-size: 14px;
font-weight: 300;
@media only screen and (max-width: 600px) {
    font-size: 12px; 
}
`
