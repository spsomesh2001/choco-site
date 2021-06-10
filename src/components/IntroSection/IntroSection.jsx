import React, { useState } from 'react'
import { GoDown, IntroContainer, IntroContent, Quote, Sign, SignWrap, Video } from './IntroSectionElements'
import bgvideo from "../../media/choco-video.mp4"
import { Link as SLink } from "react-scroll"

const IntroSection = () => {
  const [hh, setHh] = useState(window.innerHeight);

  const heightcal = () => {
    setHh(window.innerHeight);
    // console.log(window.innerHeight);
  };

  window.addEventListener("resize", heightcal);
  
  return (
    <>
     <IntroContainer hh = {hh}>
        <Video src = {bgvideo} autoPlay loop muted/>
        <IntroContent>
          <Quote>
          Life is like a box of chocolates... you never know what you're gonna get.
          </Quote>
        </IntroContent>
        <SLink to="gifts" spy={true} smooth={true} offset={-90} duration={600}>
          <GoDown>
            <h4>Start Shopping</h4><SignWrap><Sign className="sign"></Sign></SignWrap> 
          </GoDown>
        </SLink>
      </IntroContainer> 
    </>
  )
}

export default IntroSection
