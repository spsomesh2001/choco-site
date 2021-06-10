import React, { useEffect } from 'react';
import { Footer, Header, ProductSection } from '../components';
import { animateScroll as scroll } from 'react-scroll';

const ProductPage = ({cart, setCart}) => {

  useEffect(() => {
    return () => {
      scroll.scrollTo(0, {duration: 0, delay: 0});
    }
  }, []);

  return (
    <>
      <Header changeColorY={0} Nhome={true}></Header>
      <ProductSection cart={cart} setCart={setCart}></ProductSection>
      <Footer></Footer>
    </>
  )
}

export default ProductPage;
