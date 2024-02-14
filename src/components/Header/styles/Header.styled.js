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
  background-color: ${({ $setnavbar }) => ($setnavbar === "show" ? "#35405A" : "transparent")};
  transform: ${({ $setnavbar }) => ($setnavbar === "hide" ? "translateY(-80px)" : "none")};
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(3.5px);
  @media only screen and (max-width: 1056px) {
    font-size: 18px;
}

`;

export const Icons = styled.div`
display: flex;
gap: 15px;
font-size: 25px;
align-items: center;
padding: 10px 0 5px;
@media only screen and (max-width: 600px) {
  font-size: 21px;
    
  }
`

export const SearchIcon = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: #cdcdcd;
  }
`;

export const Logo = styled.img`
  width: 118px;
  cursor: pointer;
  @media only screen and (max-width: 1056px) {
    width: 98px;
    
  }
  @media only screen and (max-width: 600px) {
    width: 98px;
    
  }
  `;

export const NavUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 70px;
  @media only screen and (max-width: 1056px) {
    gap: 40px;
  }
  @media only screen and (max-width: 600px) {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    position: absolute;
    top:${({ $menuOpen }) => ($menuOpen ? "61px" : " -100px")};
    transform: ${({ $setnavbar }) => ($setnavbar === "hide" ? "translateY(-80px)" : "none")};
    transition: all 0.3s ease-in-out;
  left: 0;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  background-color: #35405A;
  width: 100%;
  padding: 10px 0;

}
`;

export const NavUlItems = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  &:hover {
    color: #cc0000;
  }
  `

export const HamburgerIcons = styled.div`
@media only screen and (min-width: 600px) {
    display: none;
  }
`

export const HamburgerOpen = styled.div`
display: ${({ $menuOpen }) => ($menuOpen ? "none" : "block")};
cursor: pointer;

`
export const HamburgerClose = styled.div`
    display: ${({ $menuOpen }) => ($menuOpen ? "block" : "none")};
    cursor: pointer;

`
