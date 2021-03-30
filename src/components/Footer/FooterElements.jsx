import { Link as SLink } from 'react-scroll'
import styled from 'styled-components'
import { FaPhoneAlt } from 'react-icons/fa'
import { GiChocolateBar } from 'react-icons/gi'

export const FooterContainer = styled.div`
  padding: 2.5rem 2rem 0;
  background: #e4e4e4;

  @media screen and (max-width: 1280px) {
    padding: 2.5rem 1.5rem 0;
  }
`

export const FooterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

export const FooterLinkSec = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

export const FooterLinks = styled.div`
  width: 300px;
  height: 150px;
  margin-bottom: 20px;
  line-height: 1.7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const LinkHeading = styled.h2`
  text-decoration: underline;
  font-size: 1.5rem;
`

export const LinkItem = styled(SLink)`
  text-decoration: none;
  color: #000;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #843434;
    transition: all 0.2s ease-out;
  }
`

export const ContactHeading = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`

export const ContactLogo = styled(FaPhoneAlt)`
  font-size: 1.7rem;
  margin-right: 5px;
  border: 2px solid #000;
  padding: 3px;
  border-radius: 50%;
`

export const ContactText = styled.h2`
  font-size: 1.6rem;
`

export const ContactPara = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
`

export const RightsSec = styled.div`
  width: 100%;
  height: 80px;
  background: #843434;
  padding: 1.1rem 2.5rem;
  font-size: 1.2rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const WebLogo = styled.div`
  width: 100%;;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  cursor: pointer;
`

export const Logo = styled(GiChocolateBar)`
  font-size: 2.5rem;
  margin-right: 3px;
`

export const WName = styled.h3`
  font-size: 1.6rem;
`

export const CRight = styled.p`
  width: 100%;
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
