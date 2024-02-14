import styled from "styled-components";

export const Title = styled.div`
padding-left: 10px;
font-size: 25px;
color: white;
font-weight: 500;
@media only screen and (max-width: 1056px) {
    font-size: 23px;
}
  @media only screen and (max-width: 425px) {
    font-size: 20px;
}

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
@media only screen and (max-width: 425px) {
  margin: 15px 10px 0;
  gap: 20px;
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
@media only screen and (max-width: 1056px) {
  width: 100px;
  height: 100px;
}
@media only screen and (max-width: 425px) {
  width: 80px;
  height: 80px;
}

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
font-size: 18px;
@media only screen and (max-width: 1056px) {
    font-size: 16px;
}
@media only screen and (max-width: 425px) {
    font-size: 14px;
}
`
export const CastCharName = styled.div`
font-size: 15px;
opacity: 0.6;
@media only screen and (max-width: 1056px) {
    font-size: 14px;
}
@media only screen and (max-width: 425px) {
    font-size: 13px;
}
`