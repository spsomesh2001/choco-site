import React from 'react';
import {
  ContactHeading,
  ContactLogo,
  ContactPara,
  ContactText,
  CRight,
  FooterContainer,
  FooterLinks,
  FooterLinkSec,
  FooterWrapper,
  LinkHeading,
  LinkItem,
  Logo,
  RightsSec,
  WebLogo,
  WName
} from './FooterElements';
import { Link as SLink, animateScroll as scroll } from 'react-scroll';

const Footer = () => {

  const scrollToTop = () => {
    scroll.scrollToTop()
  };

  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinkSec>
            <FooterLinks>
              <LinkHeading>Shop</LinkHeading>
              <LinkItem to="gifts" spy={true} smooth={true} offset={-90} duration={600}>Gifts</LinkItem>
              <LinkItem to="collections" spy={true} smooth={true} offset={-90} duration={600}>Collections</LinkItem>
              <LinkItem to="">Special Offers</LinkItem>
            </FooterLinks>

            <FooterLinks>
              <LinkHeading>About Us</LinkHeading>
              <LinkItem to="">Story</LinkItem>
              <LinkItem to="">Blog</LinkItem>
              <LinkItem to="">Locations</LinkItem>
            </FooterLinks>
          </FooterLinkSec>

          <FooterLinkSec>
            <FooterLinks>
              <LinkHeading>Connect With Us</LinkHeading>
              <LinkItem to="">Twitter</LinkItem>
              <LinkItem to="">Instagram</LinkItem>
              <LinkItem to="">Facebook</LinkItem>
            </FooterLinks>

            <FooterLinks>
              <ContactHeading>
                <ContactLogo></ContactLogo>
                <ContactText>Contact Us</ContactText>
              </ContactHeading>
              <ContactPara>422, Main Street, London W74 8OJ</ContactPara>
              <pre>
                Telephone: +44 (20) 45XX XXXX , <br/>
                <p style={{textIndent : '79px'}}>+44 (20) 47XX XXXX</p>
              </pre>
            </FooterLinks>
          </FooterLinkSec>
        </FooterWrapper>

      </FooterContainer>
      <RightsSec>
        <SLink to="" onClick={scrollToTop}>
          <WebLogo>
            <Logo></Logo>
            <WName>Choco</WName>
          </WebLogo>
        </SLink>
          <CRight>
            © 2021, All Rights Reserved
          </CRight>
        </RightsSec>
    </>
  );
}

export default Footer;
