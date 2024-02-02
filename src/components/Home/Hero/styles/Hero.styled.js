import styled from "@emotion/styled";

export const HeroContainer = styled('div')(() => ({
  backgroundColor: 'black',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '5px',
  overflow: 'hidden',
  width: '100%',
  height: "660px"
}))

export const HeroVid = styled('video')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  opacity: '0.3'
}))

export const WelcomeArea = styled('div')(() => ({
  position: 'absolute',
  top: '65%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '1',
  color: 'white',
  textAlign: 'center'
}))

export const Welcome = styled('div')(() => ({
  fontSize: '35px',
  fontWeight: '700',
}))

export const WelcomeMsg = styled('div')(() => ({
  marginTop: '10px',
  fontSize: '20px',
  fontWeight: '500',
}))

export const SearchArea = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '40px',

}))

export const SearchBar = styled('input')(() => ({
  outline: '0',
  border: '0',
  width: '50%',
  fontFamily: '"M PLUS Rounded 1c", sans-serif',
  fontSize: '22px',
  fontWeight: '500',
  padding: '10px 15px',
  borderRadius: '15px 0  0 15px',
}))

export const SearchIcon = styled('button')(() => ({
  border: '2px solid white',
  backgroundColor: '#283044',
  fontSize: "20px",
  padding: '12.5px 16px',
  borderRadius: '0 15px 15px 0',
  cursor: 'pointer',
  color: 'white',
}))


