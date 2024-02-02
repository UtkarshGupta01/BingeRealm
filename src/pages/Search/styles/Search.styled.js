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
`;

export const SearchBar = styled.input`
  border: 0;
  width: 50%;
  background-color: #283044;
  color: white;
  font-size: 22px;
  padding: 10px 20px;
  border-radius: 5px;
`;

export const SearchIcon = styled.div`
  background-color: #283044;
  font-size: 30px;
  padding: 4px 10px 0;
  border-radius: 5px;
  cursor: pointer;
`;
