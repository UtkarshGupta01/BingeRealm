import styled from "styled-components";

export const SearchContainer = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  background-color: rgb(0, 0, 0, 0.9);
  width: 100%;
  height: 100vh;
`;

export const SearchArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  gap: 20px;
  color: white;
  @media only screen and (max-width: 340px) {
    flex-direction: column-reverse;
}
`;

export const SearchBar = styled.input`
  border: 0;
  width: 50%;
  background-color: #283044;
  color: white;
  font-size: 22px;
  padding: 10px 20px;
  border-radius: 5px;
  @media only screen and (max-width: 1056px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 18px;
    padding: 10px 10px;
    width: 70%;
  
}
`;

export const SearchIcon = styled.div`
  background-color: #283044;
  font-size: 26px;
  padding: 4px 10px 0;
  border-radius: 5px;
  cursor: pointer;
  border:2px solid transparent;
  transition: border 0.35s;
  &:hover{
    border:2px solid white;
  }
  @media only screen and (max-width: 1056px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 22px;
  
}
`;
