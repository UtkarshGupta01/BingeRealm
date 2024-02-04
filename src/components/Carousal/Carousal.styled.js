import styled from "styled-components";

const sharedStyle = styled.div`
color: white;
font-size: 25px;
background-color: rgb(0,0,0,0.2);
padding: 10px 12px 3px;
border-radius: 30px;
z-index: 5;
top: 44.8%;
transition: all 0.35s;
&:hover{
  background-color: rgb(0,0,0,0.5);
  cursor: pointer;
  transform: scale(1.15);
}

`

export const CarousalSection = styled.div`
  margin: 20px 0;
  padding: 30px;
  height: 332px;
  position:relative ;
  background-color: #1e2433;
  border-radius: 25px;
  box-shadow: inset 0 0 25px 0 black;
  /* display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px; */
`;

export const NavArrowLeft = styled(sharedStyle)`
position: absolute;
left: 20px;

`
export const NavArrowRight = styled(sharedStyle)`
position: absolute;
right: 20px;

`

export const CarousalItems = styled.div`


`