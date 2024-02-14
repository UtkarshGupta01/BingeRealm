import styled from "styled-components";

export const Heading = styled.div`
  color: white;
  font-size: 25px;
  font-weight: 600;
  @media only screen and (max-width: 1056px) {
    font-size: 23px;
}
  @media only screen and (max-width: 600px) {
    font-size: 20px;
}
`;

export const HeadingContainer = styled.div`
display: flex;
align-items: center;
gap: 40px;
@media only screen and (max-width: 1056px) {
  gap: 30px;
}
@media only screen and (max-width: 600px) {
  gap: 10px;
  flex-direction: column;
}


`
