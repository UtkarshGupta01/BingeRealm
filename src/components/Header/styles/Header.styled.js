import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 90%;
  z-index: 99;
  padding: 0 5%;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: 600;
  /* background-color: ${({ setnavbar }) => (setnavbar === "show" ? "#1e2433eb" : "transparent")};
  transform:${({ setnavbar }) => (setnavbar === "hide" ? "translateY(-80px)" : "none")} ; */
  background-color: ${({ $setnavbar }) => ($setnavbar === "show" ? "#1e2433eb" : "transparent")};
  transform: ${({ $setnavbar }) => ($setnavbar === "hide" ? "translateY(-80px)" : "none")};
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(3.5px);
`;

export const SearchIcon = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: #cdcdcd;
  }
`;

export const Logo = styled.img`
  width: 90%;
  cursor: pointer;
`;

export const NavUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 70px;
`;

export const NavUlItems = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  &:hover {
    color: #cc0000;
    text-shadow: 2px 2px 25px #cc000094;
  }
`;
