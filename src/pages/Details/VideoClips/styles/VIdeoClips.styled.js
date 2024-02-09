import styled from "styled-components";

export const VideosCarousal = styled.div`
margin: 15px;
padding: 15px;
display: flex;
overflow-y: hidden;
gap: 30px;
&::-webkit-scrollbar {
  height:0;
}
&::-webkit-scrollbar-thumb {
  background-color: transparent;
}

`
export const VideoImg = styled.img`
border: 3px solid black;
border-radius:10px;
transition:all 0.4s

`
export const PlayIcon = styled.div`
font-size: 45px;
color: white;
position: absolute;
border-radius:8px;
top: 0;
background-color: rgb(0,0,0,0.5);
padding: 17.4% 42.3%;
margin: 0.8%;
display: none;
transition: all 0.4s;
`
export const Video = styled.div`
border-radius: 10px;
transition:all 0.4s;
cursor: pointer;
&:hover{
  transform: scale(1.1);
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
`