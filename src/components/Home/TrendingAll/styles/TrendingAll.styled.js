import styled from "@emotion/styled";


export const TrendingSection = styled('div')(() => ({
  margin: '30px 4% 30px 4%'
}))

export const Heading = styled('div')(() => ({
  color: 'white',
  fontSize: '25px',
  fontWeight: '600'

}))

export const Container = styled('div')(() => ({
  margin: '20px 0',
  height: '40vh',
  backgroundColor: '#1e2433',
  borderRadius: '25px',
  boxShadow: 'inset 0 0 25px 0 black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '40px'
}))

export const Card = styled('div')(() => ({
  borderRadius: '10px',
  width: '15%',
  height: '35vh',
  backgroundColor: 'white',
  overflow: 'hidden',
}))

export const CardImage = styled('img')(() => ({
  width: '100%',
  height: '100%',
  backgroundSize: 'fit'
}))

export const CardInfo = styled('div')(() => ({
  color: 'white',
  fontSize: '40px'
}))