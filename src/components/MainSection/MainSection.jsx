import React from 'react'
import { collections, gifts } from './data'
import { MainContainer, MainContentWrapper } from './MainSectionElements'
import ProdContent from './ProdContent'

const MainSection = () => {
  return (
    <>
      <MainContainer>
       <MainContentWrapper>
          <ProdContent heading="Gifts" data={gifts}></ProdContent>
          <ProdContent heading="Collections" data={collections}></ProdContent>
       </MainContentWrapper>
      </MainContainer>
    </>
  )
}

export default MainSection
