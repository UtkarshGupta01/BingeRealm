import styled from "styled-components";

export const DetailsMain = styled.div`
color: white;
margin:  100px 80px;
display: flex;
padding: 40px;
background-color: #1e2433;
border-radius: 25px;
box-shadow: inset 0 0 25px 0 black;
justify-content: flex-start;
gap: 80px;
font-weight: 500;
`


export const MediaPoster = styled.div`
max-width: 350px;
border: 3px solid rgb(255,255,255,0.5);
border-radius: 20px;
overflow: hidden;
`

export const PosterImage = styled.img`
width: 100%;
`

export const MediaTitle = styled.div`
font-size: 30px;
font-weight: 600;
display: flex;
align-items: center;
gap: 10px;

`
export const MediaYear = styled.span`
font-size: 25px;

`
export const MediaTagline = styled.div`
font-size: 18px;
opacity: 0.7;
margin-top:-5px;
`

export const MediaGenres = styled.div`
display: flex;
margin-top: 15px;
gap:10px

`
export const MediaDirector = styled.div`
margin-top: 10px;
opacity: 0.6;


`
export const MediaRatings = styled.div`
margin-top: 10px;
opacity: 0.6;

`
export const MediaTime = styled.div`
margin-top: 10px;
display: flex;
gap: 50px;
opacity: 0.6;

`


export const MediaDate = styled.div`
margin-top: 10px;
opacity: 0.6;

`
export const MediaOverview = styled.div`
margin-top: 10px;
font-size: 20px;
`

export const OverviewDesciption = styled.div`
font-size: 15px;
font-weight: 400;
height: 130px;
`


export const MediaTrailer = styled.div`
font-size: 40px;

`
export const MediaHomepage = styled.div`
margin-top: 15px;


`

export const HomepageLink = styled.a`
background-color: black;
padding: 3px 15px;
color: white;
font-weight: 500;
border:2px solid transparent;
text-decoration: none;
border-radius: 10px;
transition:all 0.3s;
&:hover{
  border-color: white;
}

`
