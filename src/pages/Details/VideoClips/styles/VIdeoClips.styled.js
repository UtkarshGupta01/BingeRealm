import styled from "styled-components";

export const VideosCarousal = styled.div`
margin: 15px;
padding: 15px;
display: flex;
overflow-y: hidden;
padding: 15px;
gap: 30px;
&::-webkit-scrollbar {
  height:0;
}
&::-webkit-scrollbar-thumb {
  background-color: transparent;
}
@media only screen and (max-width: 1056px) {
  margin: 10px;
  gap: 20px;
}
@media only screen and (max-width: 425px) {
  margin: 10px 5px;
  padding: 0;
  gap: 10px;
}

`
export const VideoImg = styled.img`
border: 3px solid black;
border-radius:10px;
transition:all 0.4s;
@media only screen and (max-width: 1056px) {
  width:250px;
}
@media only screen and (max-width: 425px) {
  width:180px;
  border-radius:8px;
  
}

`
export const PlayIcon = styled.div`
font-size: 45px;
color: white;
position: absolute;
border-radius:8px;
top: 0;
background-color: rgb(0,0,0,0.5);
padding: 17.7% 42.8%;
margin: 0.8%;
display: none;
transition: all 0.4s;
@media only screen and (max-width: 1056px) {
  padding: 15.9% 41.4%;
  font-size: 40px;
}
@media only screen and (max-width: 425px) {
  padding: 16.5% 41.4%;
  font-size: 28px;
  border-radius:7px;
  
}
`
export const Video = styled.div`
border-radius: 10px;
transition:all 0.4s;
cursor: pointer;
width: 320px;
@media only screen and (max-width: 1056px) {
  width: 255px;
}
@media only screen and (max-width: 425px) {
  width: 185px;
}

&:hover{
  transform: scale(1.1);
  @media only screen and (max-width: 425px) {
 transform: none;
}
}
&:hover ${VideoImg}{
  border-color: white;
}
&:hover ${PlayIcon}{
  display: block;
}
`
export const VideoThumbnail = styled.div`
position: relative;

`

export const VideosName = styled.div`
color: white;
font-weight: 500;
font-size: 17px;
text-align: center;
@media only screen and (max-width: 425px) {
  font-size: 15px;
  
}
`