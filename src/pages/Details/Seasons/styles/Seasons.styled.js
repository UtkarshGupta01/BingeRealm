import styled from "styled-components";

export const SeasonSection = styled.div`
color:white;
padding: 40px;
background-color: #1e2433;
border-radius: 25px;
box-shadow: inset 0 0 25px 0 black;
margin: 0 5%;
font-weight: 500;
`


export const SeasonHeading = styled.div`
display: flex;
gap: 50px;
align-items: center;
`
export const SeasonNumber = styled.select`
background-color: #35405A;
font-family: "M PLUS Rounded 1c", sans-serif;
color:white;
font-size: 23px;
font-weight: 600;
padding: 10px 50px 10px 20px;
border: 2px solid white;
border-radius: 15px;
outline: 0;
-webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg fill='white' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0 center;
`
export const SeasonOption = styled.option`
font-family: "M PLUS Rounded 1c", sans-serif;
`
export const SeasonTitle = styled.div`
font-size: 23px;
font-weight: 600;
display: flex;
align-items: center;
gap: 8px;

`

export const SeasonEpisodes = styled.div`
margin: 30px 10px 0;
font-size: 18px;


`
export const SeasonOverview = styled.div`
margin: 10px 10px 0;
font-size: 18px;

`