import styled from "styled-components";

const sharedStyle = styled.div`
color: white;
font-size: 30px;
background-color: rgb(0,0,0);
padding: 40px 20px 30px;
z-index: 5;
top: 35%;
transition: all 0.35s;
opacity: 0.3;
display: none;
&:hover{
  background-color: rgb(0,0,0);
  opacity: 0.8;
  cursor: pointer;
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
  &:hover ${sharedStyle}{
    display: block;
  }
  `;

export const NavArrowLeft = styled(sharedStyle)`
position: absolute;
left: 0px;
border-radius: 0 100px 100px 0;
&:hover{
  padding-left: 10px;
  padding-right: 30px;
}
`
export const NavArrowRight = styled(sharedStyle)`
position: absolute;
right: 0;
border-radius: 100px 0 0 100px;
&:hover{
  padding-left: 30px;
  padding-right: 10px;
}
`

export const CarousalItems = styled.div`
display: flex;
gap: 30px;
overflow-y: auto;
margin-right: -30px;
margin-left: -30px;
padding: 12px 50px;

&::-webkit-scrollbar {
  height:0;
}
&::-webkit-scrollbar-thumb {
  background-color: transparent;
}

`