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
@media only screen and (max-width: 1056px) {
  flex-wrap: wrap;  
  }
@media only screen and (max-width: 600px) {
  margin:  100px 5px 0;
  gap: 40px;
  padding: 20px;
}
@media only screen and (max-width: 425px) {
    margin:  70px 5px 0;

}
`

export const MediaPoster = styled.div`
min-width: 380px;
max-width: 400px;
@media only screen and (max-width: 1056px) {
  display: block;
  margin: 0 auto;
  }
@media only screen and (max-width: 600px) {
  min-width: 0;
  max-width: 400px;
  }
`

export const PosterImage = styled.img`
border: 3px solid rgb(255,255,255,0.5);
border-radius: 20px;
width: 100%;
`

export const MediaDetails = styled.div`
@media only screen and (max-width: 1352px) {
  width: 100%;
  }
`

export const MediaTitle = styled.div`
font-size: 30px;
font-weight: 600;
display: flex;
align-items: center;
gap: 10px;
justify-content: center;
@media only screen and (max-width: 1056px) {
  font-size: 25px;
}
@media only screen and (max-width: 425px) {
    font-size: 20px;
  }
  `
export const MediaYear = styled.span`
font-size: 25px;
@media only screen and (max-width: 1056px) {
  font-size: 20px;
  }
  @media only screen and (max-width: 425px) {
    font-size: 18px;
  }

`
export const MediaTagline = styled.div`
font-size: 18px;
opacity: 0.7;
margin-top:-5px;
text-align: center;
@media only screen and (max-width: 1056px) {
  font-size: 16px;
}
@media only screen and (max-width: 425px) {
    margin-top:0;
    font-size: 15px;
  }

`

export const MediaGenres = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 15px;
gap:10px;
justify-content: center;
@media only screen and (max-width: 1056px) {
  margin-top: 10px;
  }

`
export const Genre = styled.div`
background-color: #35405A;
padding: 5px 10px;
border-radius: 7px;
@media only screen and (max-width: 1056px) {
  font-size: 14px;
}
@media only screen and (max-width: 425px) {
    padding: 4px 8px;
    font-size: 12px;
  }
`


export const MediaDirector = styled.div`
margin-top: 10px;
opacity: 0.6;
@media only screen and (max-width: 1352px) {
  margin-top: 30px;
  }
  @media only screen and (max-width: 425px) {
    font-size: 14px;
  }

`

export const MediaLength = styled.div`
margin-top: 10px;
opacity: 0.6;
display: flex;
flex-wrap: wrap;
row-gap: 10px;
column-gap: 40px;
@media only screen and (max-width: 425px) {
    font-size: 14px;
  }

`

export const MediaRatings = styled.div`
margin-top: 10px;
opacity: 0.6;
@media only screen and (max-width: 425px) {
    font-size: 14px;
  }

`
export const MediaTime = styled.div`
margin-top: 10px;
opacity: 0.6;
@media only screen and (max-width: 425px) {
    font-size: 14px;
  }

`


export const MediaDate = styled.div`
margin-top: 10px;
display: flex;
flex-wrap: wrap;
row-gap: 10px;
column-gap: 50px;
opacity: 0.6;
@media only screen and (max-width: 425px) {
    font-size: 14px;
  }
`

export const MediaEpisodeInfo = styled.div`
margin-top: 10px;
display: flex;
flex-wrap: wrap;
row-gap: 10px;
column-gap: 50px;
opacity: 0.6;
@media only screen and (max-width: 425px) {
    font-size: 14px;
  }
`

export const MediaOverview = styled.div`
margin-top: 10px;
font-size: 20px;
@media only screen and (max-width: 425px) {
    font-size: 18px;
  }
`

export const OverviewDesciption = styled.div`
font-size: 15px;
font-weight: 400;
@media only screen and (max-width: 1056px) {
  font-size: 14px;
  }
  @media only screen and (max-width: 425px) {
    font-size: 14px;
  }
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
width: fit-content;
padding: 10px;
box-shadow: 0 0 20px 0 black;
transition: all 0.3s;
cursor: pointer;
&:hover{
  border-color:white;
}
@media only screen and (max-width: 1056px) {
  margin-top: 15px;
  font-size: 18px;
  width: fit-content;
}
@media only screen and (max-width: 425px) {
  border-radius:10px;
  font-size: 16px;
  padding: 5px;
  width: fit-content;
  }
  `
export const YoutubeIcon = styled.img`
width: 50px;
@media only screen and (max-width: 1056px) {
  width: 40px;
}
@media only screen and (max-width: 425px) {
    width: 40px;
   
  }
`

export const MediaHomepage = styled.div`
margin-top: 15px;
display: flex;
flex-wrap: wrap;
gap: 5px;
align-items: center;
@media only screen and (max-width: 1056px) {
  font-size: 14px;
  }
`

export const HomepageLink = styled.a`
background-color: #283044;
padding: 5px;
color: white;
font-weight: 500;
border:2px solid transparent;
border-radius: 10px;
transition:all 0.3s;
text-underline-offset:5px;
width: fit-content;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

&:hover{
  border-color: white;
}
`
