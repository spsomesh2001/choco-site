import React from 'react'
// import { collections, gifts } from './data'
import { items } from './data'
import { MainContainer, MainContentWrapper } from './MainSectionElements'
import ProdContent from './ProdContent'

const MainSection = () => {
  return (
    <>
      <MainContainer>
       <MainContentWrapper>
         <ProdContent id="gifts" heading="Gifts" data={items["gifts"]}></ProdContent>
         <ProdContent id="collections" heading="Collections" data={items["collections"]}></ProdContent>
       </MainContentWrapper>
      </MainContainer>
    </>
  )
}

export default MainSection
