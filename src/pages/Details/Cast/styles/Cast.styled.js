import styled from "styled-components";

export const Title = styled.div`
padding-left: 10px;
font-size: 30px;
color: white;
font-weight: 500;

`

export const CastCarousal = styled.div`
margin: 30px 10px;
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
export const Casts = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const CastProfile = styled.div`
width: 150px;
height: 150px;
border-radius: 100px;
overflow: hidden;
border: 3px solid white;

`
export const CastImage = styled.img`
width: 100%;
`
export const CastInfo = styled.div`
text-align: center;
color: white;
font-weight:500;
`
export const CastName = styled.div`
`
export const CastCharName = styled.div`
opacity: 0.6;
`