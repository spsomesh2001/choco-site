import React from 'react'
import { GoDown, IntroContainer, IntroContent, Quote, Sign, SignWrap, Video } from './IntroSectionElements'
import bgvideo from "../../media/choco-video.mp4"
import { Link as SLink } from "react-scroll"

const IntroSection = () => {
  return (
    <>
     <IntroContainer>
        <Video src = {bgvideo} autoPlay loop/>
        <IntroContent>
          <Quote>
          Life is like a box of chocolates... you never know what you're gonna get.
          </Quote>
        </IntroContent>
        <SLink to="gifts" spy={true} smooth={true} offset={-100} duration={600}>
          <GoDown>
            <h4>Start Shopping</h4><SignWrap><Sign className="sign"></Sign></SignWrap> 
          </GoDown>
        </SLink>
      </IntroContainer> 
    </>
  )
}

export default IntroSection
