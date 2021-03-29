import styled from 'styled-components'

export const IntroContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: -80px;
`

export const Video = styled.video`
  width: 100%;
  height: 100%;
  z-index: -2;
  object-fit: cover;
  position: fixed;
  filter: brightness(30%);
`