import React, { useState } from 'react';
import { Cart, HeaderContainer, HeaderWrapper, ItemLink, Logo, MobileMenu, NavMenu, NavMenuItem, SiteLogo } from './HeaderElements';
import { Button } from '../../globalStyles'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as SLink, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const [mobilemenu, setMobilemenu] = useState(false)
  const [scrolled, setScrolled] = useState(false);

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

  window.addEventListener('scroll', handleScrolled);
  window.addEventListener('resize', handleResize);

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

          <NavMenu mobilemenu={mobilemenu} onClick={handleMobile} scrolled={scrolled}>
            <NavMenuItem>
              <ItemLink to="gifts" spy={true} smooth={true} offset={-90} duration={600} onClick={handleMobile}>Shop</ItemLink>
            </NavMenuItem>
            <NavMenuItem>
              <ItemLink to="gifts" spy={true} smooth={true} offset={-90} duration={600} onClick={handleMobile}>Gifts</ItemLink>
            </NavMenuItem>
            <NavMenuItem>
              <ItemLink to="collections" spy={true} smooth={true} offset={-90} duration={600} onClick={handleMobile}>Collections</ItemLink>
            </NavMenuItem>
            <NavMenuItem>
              <ItemLink to="gifts" spy={true} smooth={true} offset={-90} duration={600} onClick={handleMobile}>
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
