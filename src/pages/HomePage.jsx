import React, { useEffect } from 'react';
import { Footer, Header, IntroSection, MainSection } from '../components/index';
import { animateScroll as scroll } from 'react-scroll';

const HomePage = () => {

  useEffect(() => {
    return () => {
      scroll.scrollTo(0, {duration: 0, delay: 0});
    }
  }, [])

  return (
    <>
      <Header changeColorY={81} Nhome={false}></Header>
      <IntroSection></IntroSection>
      <MainSection></MainSection>
      <Footer></Footer>
    </>
  )
}

export default HomePage
