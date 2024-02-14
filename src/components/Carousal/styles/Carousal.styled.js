import styled from "styled-components";

const sharedStyle = styled.div`
color: white;
font-size: 30px;
background-color: rgb(0,0,0);
padding: 40px 20px 30px;
z-index: 5;
top: 35%;
transition: all 0.35s;
opacity: 0.5;
display: none;
&:hover{
  background-color: rgb(0,0,0);
  opacity: 0.8;
  cursor: pointer;
}
  @media only screen and (max-width: 1056px) {
    font-size: 25px;
padding: 30px 18px 20px;
}
@media only screen and (max-width: 600px) {
    font-size: 20px;
    padding: 20px 16px 13px;
}
`

export const CarousalSection = styled.div`
  margin: 20px 0;
  padding: 30px;
  position:relative ;
  background-color: #1e2433;
  border-radius: 25px;
  box-shadow: inset 0 0 25px 0 black;
  &:hover ${sharedStyle}{
    display: block;
  }
  @media only screen and (max-width: 1056px) {
    padding: 15px;
    border-radius: 20px;
  }
  @media only screen and (max-width: 600px) {
    border-radius: 15px;
    padding: 10px;
}
  `;

export const NavArrowLeft = styled(sharedStyle)`
position: absolute;
left: 0px;
border-radius: 0 100px 100px 0;
&:hover{
  padding-left: 10px;
  padding-right: 30px;
  @media only screen and (max-width: 1056px) {
    padding-left: 9px;
    padding-right: 27px;
  }
  @media only screen and (max-width: 600px) {
    padding-left: 8px;
    padding-right: 24px;
    
}
}
`
export const NavArrowRight = styled(sharedStyle)`
position: absolute;
right: 0;
border-radius: 100px 0 0 100px;
&:hover{
  padding-left: 30px;
  padding-right: 10px;
  @media only screen and (max-width: 1056px) {
    padding-left: 27px;
    padding-right: 9px;
  }
  @media only screen and (max-width: 600px) {
    padding-left: 24px;
    padding-right: 8px;
    
}
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
@media only screen and (max-width: 1056px) {
  margin-right: -15px;
  margin-left: -15px;
  padding: 10px 30px;
  }
  @media only screen and (max-width: 600px) {
    margin-right: -10px;
  margin-left: -10px;
  padding: 9px 20px;
  gap: 15px;
}
`

export const Loading = styled.div`
display: flex;
overflow-y: auto;
padding: 12px 23px;
gap: 30px;
&::-webkit-scrollbar {
  height:0;
}
&::-webkit-scrollbar-thumb {
  background-color: transparent;
}
`

export const LoadingGif = styled.img`
background-color: #272D3F;
width: 78px;
padding: 108px 47px;
border-radius: 15px;
@media only screen and (max-width: 1056px) {
  width: 68px;
  padding: 95px 40px;
}
@media only screen and (max-width: 600px) {
  width: 50px;
  padding: 80px 35px;
}
`