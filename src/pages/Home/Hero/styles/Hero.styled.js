import styled from "styled-components";

export const HeroContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  height: 660px;
  position: relative;
`;

export const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
`;

export const MergeLayer = styled.div`
  width: 100%;
height: 100px;
background: linear-gradient(
    180deg,
    rgba(4, 90, 95, 0) 0%,
    #283044 80.17%
);
position: absolute;
bottom: 0;
left: 0;
`;

export const WelcomeArea = styled.div`
  position: absolute;
  top: 500px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: white;
  text-align: center;
`;

export const Welcome = styled.div`
  font-size: 35px;
  font-weight: 700;
`;

export const WelcomeMsg = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;
`;

export const SearchArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const SearchBar = styled.input`
  outline: 0;
  border: 0;
  width: 50%;
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-size: 22px;
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 15px 0 0 15px;
`;

export const SearchIcon = styled.button`
  border: 2px solid white;
  background-color: #283044;
  font-size: 20px;
  padding: 12.5px 16px;
  border-radius: 0 15px 15px 0;
  cursor: pointer;
  color: white;
`;
