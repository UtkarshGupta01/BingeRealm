import styled from "styled-components";

export const WatchPlatforms = styled.div`
display: flex;
justify-content: center;
gap: 20px;
flex-wrap: wrap;

@media only screen and (max-width: 600px) {
  gap: 5px;
}
`

export const PlatformName = styled.div`
margin-top: 10px;
font-size: 15px;
font-weight: 400;
color: #35405A;
transition: all 0.4s;

@media only screen and (max-width: 600px) {
  font-size: 14px;
}
`

export const PlatformIcon = styled.img`
width: 65%;
cursor: pointer;
border: 3px solid transparent;
border-radius: 20px;
padding: 10px;
transition: all 0.4s;
@media only screen and (max-width: 1056px) {
  width: 55%;
  border-radius: 15px;
  
}
@media only screen and (max-width: 600px) {
  width: 48%;
  border-radius: 15px;
  padding: 10px;
}
`
export const Platform = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
&:hover ${PlatformIcon}{
  transform: scale(1.2);
  border-color:white;
}
&:hover ${PlatformName}{
  color: white;
}

`