import React from 'react'
import { IntroContainer, Video } from './IntroSectionElements'
import bgvideo from "../../media/choco-video.mp4"

const IntroSection = () => {
  return (
    <>
     <IntroContainer>
        <Video src = {bgvideo} autoPlay loop muted/>
      </IntroContainer> 
    </>
  )
}

export default IntroSection
