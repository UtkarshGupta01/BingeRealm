import styled from "styled-components";

export const WatchPlatforms = styled.div`
display: flex;
justify-content: center;
gap: 20px;
`

export const PlatformName = styled.div`
margin-top: 10px;
font-size: 15px;
font-weight: 400;
color: #35405A;
`
export const Platform = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
&:hover ${PlatformName}{
  color: white;
}
`
export const PlatformIcon = styled.img`
width: 65%;
cursor: pointer;
border: 3px solid transparent;
border-radius: 20px;
padding: 10px;
transition: all 0.4s;
&:hover{
  transform: scale(1.2);
  border-color:white;
}

`