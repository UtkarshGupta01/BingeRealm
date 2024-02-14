import styled from "styled-components";

export const ExploreTitle = styled.div`
padding: 30px 0;
font-size: 25px;
font-weight: 500;
color: white;
text-align: center;
@media only screen and (max-width: 600px) {
  font-size: 20px;
}
`

export const Filters = styled.div`
display: flex;
gap: 30px;
margin: 0 10px 30px;
@media only screen and (max-width: 600px) {
  flex-direction: column;
  gap: 15px;
}
`

export const Spinner = styled.img`
width: 5%;
display: block;
margin: 220px auto 320px;
`

export const MediaSection = styled.div`
font-size: 25px;
font-weight: 500;
color: white;
display: grid;
justify-items: center;
text-align: center;
grid-template-columns: repeat(auto-fill,minmax(205px, 1fr));
margin: 15px;
column-gap: 20px;
row-gap: 20px;
@media only screen and (max-width: 1056px) {
  grid-template-columns: repeat(auto-fill,minmax(165px, 1fr));
  
}
@media only screen and (max-width: 600px) {
  grid-template-columns: repeat(auto-fill,minmax(120px, 1fr));
  margin: 1px;
}
@media only screen and (max-width: 320px) {
  column-gap: 5px;
}
`

export const NotFound = styled.div`
font-size: 25px;
color: white;
font-weight: 600;
`