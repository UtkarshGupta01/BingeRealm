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
  @media only screen and (max-width: 450px) {
    height: 500px;
}
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
  top: 450px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: white;
  text-align: center;
  width: 100%;
  @media only screen and (max-width: 450px) {
    top:350px;
}
`;

export const Welcome = styled.div`
  font-size: 35px;
  font-weight: 700;
  @media only screen and (max-width: 1056px) {
    font-size: 30px;
}
  @media only screen and (max-width: 450px) {
    font-size: 20px;
}
`;

export const WelcomeMsg = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;
  @media only screen and (max-width: 1056px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 450px) {
    font-size: 15px;
  }
  `;

export const SearchArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  @media only screen and (max-width: 1056px) {
  margin-top: 30px;
}
@media only screen and (max-width: 450px) {
  margin-top: 20px;
  
}
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
  @media only screen and (max-width: 1056px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 450px) {
    border-radius: 10px 0 0 10px;
    padding: 8px 12px;
    font-size: 15px;
  }
  `;

export const SearchIcon = styled.button`
  border: 2px solid white;
  background-color: #283044;
  font-size: 23px;
  border-radius: 0 15px 15px 0;
  padding: 11.5px 25px 9px;
  cursor: pointer;
  color: white;
  @media only screen and (max-width: 1056px) {
    font-size: 20px;
    padding: 10.5px 16px 8px;
  }
  @media only screen and (max-width: 450px) {
    font-size: 18px;
    padding: 8px 13px 4.5px;
    border-radius: 0 10px 10px 0;
  }
  `;
