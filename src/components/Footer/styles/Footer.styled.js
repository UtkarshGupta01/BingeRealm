import styled from "styled-components";

export const FooterSection = styled.div`

background-color: #35405A;
text-align: center;
margin-top:150px;
@media only screen and (max-width: 1056px) {
  margin-top:100px;
}
`

export const FooterList = styled.ul`
display: flex;
padding:80px 18% 50px;
justify-content:space-evenly;
color: rgb(255,255,255,0.5);
font-size: 17px;
@media only screen and (max-width: 1056px) {
  padding:80px 10% 50px;
}
@media only screen and (max-width: 450px) {
  font-size: 15px;
  padding:60px 4% 40px;
}
`

export const sharedListItem = styled.li`
list-style: none;
transition:all 0.3s;
cursor: pointer;
&:hover{
  color: white;
}
`

export const Terms = styled(sharedListItem)`
color:${({ $terms }) => ($terms ? "white" : "none")};
font-weight:${({ $terms }) => ($terms ? "500" : "unset")};
`

export const Watch = styled(sharedListItem)`
color:${({ $watch }) => ($watch ? "white" : "none")};
font-weight:${({ $watch }) => ($watch ? "500" : "unset")};
`

export const About = styled(sharedListItem)`
color:${({ $about }) => ($about ? "white" : "none")};
font-weight:${({ $about }) => ($about ? "500" : "unset")};
`

export const FooterListContent = styled.div`
font-size: 16px;
color: white;
padding: 0 15% 40px;
@media only screen and (max-width: 1056px) {
  padding: 0 8% 40px;
  font-size: 14px;
}
@media only screen and (max-width: 450px) {
  padding: 0 2% 40px;
  font-size: 13px;
}


`
export const ContactTitle = styled.div`
font-size: 20px;
font-weight: 600;
color: white;
@media only screen and (max-width: 450px) {
  font-size: 18px;
}

`
export const ContactMedia = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 50px;
padding: 50px 20px;
@media only screen and (max-width: 450px) {
  gap: 40px;
  padding: 30px 10px;
}
`
export const MediaName = styled.div`
margin-top: 10px;
font-size: 15px;
font-weight: 400;
color: #35405A;
transition: all 0.4s;
@media only screen and (max-width: 450px) {
  font-size: 14px;
}
`
export const MediaIcon = styled.div`
font-size: 35px;
background-color: #35405A;
padding: 10px 15px 3px;
border-radius: 50px;
box-shadow: 0 0 15px 0 black;
cursor: pointer;
transition: all 0.4s;
@media only screen and (max-width: 1056px) {
  font-size: 30px;
}
@media only screen and (max-width: 450px) {
  padding: 8px 13px 1px;
}
`
export const Media = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
&:hover ${MediaName}{
  color: white;
}
&:hover ${MediaIcon}{
  box-shadow: 0 0 15px 0 white;
  color:white;
}

`
export const CopyrightSection = styled.div`
background-color: #283044;
padding: 20px 0;
color: rgba(255, 255, 255, 0.7);
font-weight: 500;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
@media only screen and (max-width: 450px) {
  font-size: 14px;
  padding: 10px 0;
}
  
`

const sharedStyledCopy = styled.div`
display: flex;
align-items: center;
gap: 5px;
`

export const CopyrightInfo = styled(sharedStyledCopy)`

`
export const MadeBy = styled(sharedStyledCopy)`

`