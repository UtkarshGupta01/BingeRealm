import styled from "@emotion/styled";

export const NavBar = styled('nav')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 5%',
  alignItems: 'center',
  color: 'white',
  fontSize: '20px',
  fontWeight: '600',
  // backgroundColor: '#1e2433d4',
  backgroundColor: 'rgb(255,255,255,0)',
  backdropFilter: 'blur(15px)'
}));

export const SearchIcon = styled('div')(() => ({
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#cdcdcd',
  }
}))

export const Logo = styled('img')(() => ({
  width: '90%'
}))

export const NavUl = styled('ul')(() => ({
  display: 'flex',
  listStyle: 'none',
  gap: '70px'

}));

export const NavUlItems = styled('a')(() => ({
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'white',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#CC0000',
    textShadow: '2px 2px 25px #CC000094'
  }

}));