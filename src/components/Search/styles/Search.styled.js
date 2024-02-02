import styled from "@emotion/styled";

export const SearchContainer = styled('div')(() => ({
  position: 'fixed',
  zIndex: '200',
  top: '0',
  backgroundColor: 'rgb(0,0,0,0.9)',
  width: '100%',
  height: '100vh'

}))

export const SearchArea = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '80px',
  gap: '20px',
  color: 'white',

}))

export const SearchBar = styled('input')(() => ({
  border: '0',
  width: '50%',
  backgroundColor: '#283044',
  color: 'white',
  fontSize: '22px',
  padding: '10px 20px',
  borderRadius: '5px',

}))

export const SearchIcon = styled('div')(() => ({
  backgroundColor: '#283044',
  fontSize: "30px",
  padding: '4px 10px 0',
  borderRadius: '5px',
  cursor: 'pointer',
}))