import styled from "styled-components";

const sharedStyle = styled.div`
color: white;
font-size: 20px;
background-color: rgb(0,0,0,0.4);
padding: 10px 12px 3px;
border-radius: 30px;
z-index: 5;
top: 40%;
transition: all 0.35s;
&:hover{
  background-color: rgb(0,0,0,0.8);
  padding-bottom: 5px;
  cursor: pointer;
  transform: scale(1.5);
}
`

export const CarousalSection = styled.div`
  margin: 20px 0;
  padding: 30px;
  min-height: 342px;
  position:relative ;
  background-color: #1e2433;
  border-radius: 25px;
  box-shadow: inset 0 0 25px 0 black;
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
display: flex;
gap: 30px;
overflow-y: auto;
margin-right: -30px;
margin-left: -30px;
padding: 10px 20px;

&::-webkit-scrollbar {
  height:0;
}
&::-webkit-scrollbar-thumb {
  background-color: transparent;
}

`