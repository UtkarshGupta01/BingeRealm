import styled from "styled-components";

export const SearchFor = styled.div`
padding: 40px 0;
font-size: 25px;
font-weight: 500;
color: white;
text-align: center;
@media only screen and (max-width: 600px) {
  font-size: 18px;
    
  }
`

export const Spinner = styled.img`
width: 70px;
display: block;
margin: 220px auto;
@media only screen and (max-width: 600px) {
  width: 50px; 
  }
`

export const NotFound = styled.div`
font-size: 25px;
color: white;
font-weight: 600;
text-align: center;
@media only screen and (max-width: 600px) {
  font-size: 18px;
    
  }

`