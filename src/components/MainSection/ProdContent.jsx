import React from 'react';
import {
  ProdContainHeading,
  ProductContainer,
  Products,
  ProdItem,
  ProdImg,
  ProdName,
  ProdDesc,
  ProdPrice,
  ProdInfo,
  ProdButton,
  ProdBgBox
} from './prodContentElements';

const ProdContent = ({id,heading, lightBg, data}) => {
  return (
    <>
      <ProductContainer lightBg={lightBg}>
        <ProdContainHeading id={id}>{heading}</ProdContainHeading>
        <Products> {
          data.map((prod) => {
            return (
              <ProdBgBox>
                <ProdItem>
                  <ProdImg src={prod.src} alt={prod.alt}></ProdImg>
                  <ProdInfo>
                    <ProdName>{prod.name}</ProdName>
                    <ProdDesc>{prod.desc}</ProdDesc>
                    <ProdPrice>{prod.price}</ProdPrice>
                  </ProdInfo>
                  <ProdButton>Add to Cart</ProdButton>
                </ProdItem>
              </ProdBgBox>
            );
          })
        }
        </Products>
      </ProductContainer>
    </>
  );
}

export default ProdContent;
