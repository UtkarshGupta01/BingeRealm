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
background-color: #2D364D;
padding: 5% 7%;
border-radius: 15px;
box-shadow: 0 0 5px 0 black;
cursor: pointer;
transition: all 0.3s;
&:hover{
  transform:scale(1.25);
  box-shadow: 0 0 15px 2px black;
}
`
