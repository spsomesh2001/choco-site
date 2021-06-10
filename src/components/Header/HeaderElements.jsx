import styled from 'styled-components';
import { FaShoppingBasket } from 'react-icons/fa';
import { GiChocolateBar } from 'react-icons/gi'
import { Link as SLink } from 'react-scroll';
import { HashLink as Link } from 'react-router-hash-link';

export const HeaderContainer = styled.div`
  height: 80px;
  background: ${({scrolled, mobilemenu}) => {
    if((!scrolled)&&(mobilemenu)) {
      return "rgba(0,0,0,0.7)"
    }
    else if(scrolled) {
      return "#843434"
    }
    else {
      return "transparent";
    }
  }};
  border-bottom: ${({scrolled}) => ( scrolled ? "1px solid #000" : "none")};
  transition: all 0.3s ease-out;
  position: sticky;
  top: 0;
  z-index: 999;
`

export const HeaderWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;

  @media screen and (max-width: 950px) {
    padding: 10px 20px;
  }
`

export const SiteLogo = styled.div`
  width: 130px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  cursor: pointer;
`

export const Logo = styled(GiChocolateBar)`
  font-size: 3rem;
`

export const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 850px) {
    display: block;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    color: #fff;
    font-size: 1.7rem;
    transition: all 0.3s ease-out;
  }
`

export const NavMenu = styled.ul`
  width: 550px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 65%;
    height: ${({hh}) => (hh - 80)}px;
    position: absolute;
    top: 80px;
    right: ${({mobilemenu}) => ( mobilemenu ? "0" : "100%")};
    background: ${({scrolled}) => (scrolled ? "#843434" : "rgba(0,0,0,0.7)")};
    transition: all 0.3s ease-out;
  }
`

export const NavMenuItem = styled.li`
  height: 100%;
  font-size: 1.2rem;
  color: #fff;
  display: flex;
  align-items: center;
`


export const ItemLink = styled(SLink)`
  cursor: pointer;
  color: #fff;

  &:hover {
    color: #a9a9a9;
    transition: all 0.4s ease-out;
  }
`

export const NHomeItemLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #fff;

  &:hover {
    color: #a9a9a9;
    transition: all 0.4s ease-out;
  }
`

export const Cart = styled(FaShoppingBasket)`
  font-size: 2.1rem;
  padding: 5px;
  border: 0.5px solid #fff;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    color: #843434;
    background: #fff;
    transition: all 0.2s ease-out;
  }
`