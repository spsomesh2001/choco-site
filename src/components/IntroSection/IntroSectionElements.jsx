import styled from 'styled-components'
import { FaArrowRight } from 'react-icons/fa'

export const IntroContainer = styled.div`
  width: 100%;
  height: ${({hh}) => (hh)}px;
  margin-top: -80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Video = styled.video`
  width: 100%;
  height: 100%;
  z-index: -2;
  object-fit: cover;
  position: fixed;
  filter: brightness(30%);
`

export const IntroContent = styled.div`
  width: min(80%,800px);
  margin: 0 70px 50px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Quote = styled.h2`
  color: #fff;
  font-family: "Kaushan Script", "PT Sans", sans-serif;
  font-size: clamp(1.8rem, 10vw, 2.5rem);
`

export const GoDown =styled.button`
  padding: 10px 15px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  color: #fff;
  background: transparent;
  border-radius: 5px;
  border: 1.5px solid #fff;
  cursor: pointer;
  transition: all 0.4s ease-out;

  &:hover {
    background: #fff;
    color: #843434;
    transition: all 0.4s ease-out;
  }

  &:hover .sign {
    color: #843434;
    transform: rotate(90deg);
    transition: all 0.4s ease-out;
  }
`

export const SignWrap = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4px;
`

export const Sign = styled(FaArrowRight)`
  height: 100%;
  margin-left: 15px;
  font-size: 1.4rem;
  color: #fff;
  align-self: center;
  transition: all 0.4s ease-out;
`