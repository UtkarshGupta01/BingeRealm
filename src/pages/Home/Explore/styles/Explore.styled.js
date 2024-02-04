import styled from "styled-components"

export const Heading = styled.div`
  color: white;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
`

export const MediaTypeContainer = styled.div`
margin: 40px;
display: flex;
justify-content: center;
align-items: center;
gap: 50px;
`


export const MediaCard = styled.div`
color: white;
font-size:20px;
font-weight: 600;
width: 300px;
background-color: #2D364D;
/* padding: 65px 95px; */
border-radius: 15px;
box-shadow: 0 0 5px 0 black;
transform:scale(1.25);
cursor: pointer;
position: relative;
overflow: hidden;
transition: all 0.3s;
&:hover{
  box-shadow: 0 0 15px 2px black;
}
`

export const MediaVideo = styled.video`
width: 100%;
height: 100%;
object-fit: cover;
/* display: none; */
`
export const MediaTitle = styled.div`
position:absolute;
top: 40%;
right: 40% ;

`
