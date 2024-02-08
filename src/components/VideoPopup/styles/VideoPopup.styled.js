import styled from "styled-components";

export const VideoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: end;
position: fixed;
width: 60%;
height: 70%;
top: 10%;
left: 20%;
`
export const VideoOpacityLayer = styled.div`
 background-color: black;
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
opacity: 0.5;
backdrop-filter: blur(8px);
z-index: 1;

`
export const VideoClose = styled.div`
font-size: 40px;
color: white;
z-index: 9;
cursor: pointer;
`

export const Video = styled.div`
width: 100%;
height: 100%;
z-index: 9;
`