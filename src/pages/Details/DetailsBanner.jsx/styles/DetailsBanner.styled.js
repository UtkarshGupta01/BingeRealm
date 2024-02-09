import styled from "styled-components";

export const DetailsMain = styled.div`
color: white;
margin:  100px 50px 0;
display: flex;
padding: 40px;
background-color: #1e2433;
border-radius: 25px;
box-shadow: inset 0 0 25px 0 black;
justify-content: flex-start;
gap: 60px;
font-weight: 500;
`

export const MediaPoster = styled.div`
max-width: 380px;
`

export const PosterImage = styled.img`
border: 3px solid rgb(255,255,255,0.5);
border-radius: 20px;
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
export const Genre = styled.div`
background-color: #35405A;
padding: 2px 10px 5px;
border-radius: 7px;
`


export const MediaDirector = styled.div`
margin-top: 10px;
opacity: 0.6;


`

export const MediaLength = styled.div`
margin-top: 10px;
opacity: 0.6;
display: flex;
gap: 40px;

`

export const MediaRatings = styled.div`
margin-top: 10px;
opacity: 0.6;

`
export const MediaTime = styled.div`
margin-top: 10px;
opacity: 0.6;

`


export const MediaDate = styled.div`
margin-top: 10px;
display: flex;
gap: 50px;
opacity: 0.6;
`

export const MediaEpisodeInfo = styled.div`
margin-top: 10px;
display: flex;
gap: 50px;
opacity: 0.6;

`

export const MediaOverview = styled.div`
margin-top: 10px;
font-size: 20px;
`

export const OverviewDesciption = styled.div`
font-size: 15px;
font-weight: 400;
/* height: 170px; */
`


export const MediaTrailer = styled.div`
margin-top: 20px;
font-size: 20px;
display: flex;
align-items: center;
gap: 10px;
border: 3px solid transparent;
background-color: #283044;
border-radius:15px;
width: 190px;
padding: 10px;
box-shadow: 0 0 20px 0 black;
transition: all 0.3s;
cursor: pointer;
&:hover{
  border-color:white;
}
`
export const YoutubeIcon = styled.img`
width: 50px;
`

export const MediaHomepage = styled.div`
margin-top: 15px;
`

export const HomepageLink = styled.a`
background-color: #283044;
padding: 3px 15px;
color: white;
font-weight: 500;
border:2px solid transparent;
border-radius: 10px;
transition:all 0.3s;
text-underline-offset:5px;

&:hover{
  border-color: white;
}

`
