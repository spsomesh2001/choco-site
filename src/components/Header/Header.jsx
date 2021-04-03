import React, { useState } from 'react';
import { Cart, HeaderContainer, HeaderWrapper, ItemLink, Logo, MobileMenu, NavMenu, NavMenuItem, SiteLogo } from './HeaderElements';
import { Button } from '../../globalStyles'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as SLink, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const [mobilemenu, setMobilemenu] = useState(false)
  const [scrolled, setScrolled] = useState(false);
  const [hh, setHh] = useState(window.innerHeight);

  const handleScrolled = () => {
    if(window.scrollY <= 80) {
      setScrolled(false);
    }
    else {
      setScrolled(true);
    }
  }

  const handleMobile = () => setMobilemenu(!mobilemenu)

  const handleResize = () => {
    if(window.innerWidth > 850) {
      setMobilemenu(false);
    }
    handleScrolled();
  }

  const heightcal = () => {
    setHh(window.innerHeight);
    console.log(window.innerHeight);
  };

  window.addEventListener("resize", heightcal);

  window.addEventListener('scroll', handleScrolled);
  window.addEventListener('resize', () => { 
    handleResize();
    heightcal();
  });

  const scrollToTop = () => {
    scroll.scrollToTop()
  };

  return (
    <>
      <HeaderContainer scrolled={scrolled} mobilemenu={mobilemenu}>
        <HeaderWrapper>
          <SLink onClick={scrollToTop}>
            <SiteLogo>
              <Logo></Logo>
              <h1 style={{letterSpacing: "2"}}>Choco</h1>
            </SiteLogo>
          </SLink>

          <MobileMenu onClick = {handleMobile}>
            {
              mobilemenu ? <FaTimes/> : <FaBars/> 
            }
          </MobileMenu>

          <NavMenu mobilemenu={mobilemenu} onClick={handleMobile} scrolled={scrolled} hh={hh}>
            <NavMenuItem>
              <ItemLink to="gifts" spy={true} smooth={true} offset={-90} duration={600} onClick={mobilemenu ? handleMobile : null}>Shop</ItemLink>
            </NavMenuItem>
            <NavMenuItem>
              <ItemLink to="gifts" spy={true} smooth={true} offset={-90} duration={600} onClick={mobilemenu ? handleMobile : null}>Gifts</ItemLink>
            </NavMenuItem>
            <NavMenuItem>
              <ItemLink to="collections" spy={true} smooth={true} offset={-90} duration={600} onClick={mobilemenu ? handleMobile : null}>Collections</ItemLink>
            </NavMenuItem>
            <NavMenuItem>
              <ItemLink to="gifts" spy={true} smooth={true} offset={-90} duration={600} onClick={mobilemenu ? handleMobile : null}>
                <Cart></Cart>
              </ItemLink>
            </NavMenuItem>
            <NavMenuItem>
              <Button>SIGN UP</Button>
            </NavMenuItem>
            <NavMenuItem>
              <Button>LOGIN</Button>
            </NavMenuItem>
          </NavMenu>
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
}

export default Header;
