import React from 'react';
import { useHistory } from 'react-router';
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
  // ProdButton,
  ProdBgBox
} from './prodContentElements';

const ProdContent = ({id, heading, lightBg, data}) => {

  const history = useHistory();

  const elements = Object.entries(data).map((d) => {
    // console.log(Object.entries(data));
    // console.log("/" + id + "/" + d[0]);
    return (
      <ProdBgBox key={d[0]} onClick={() => history.push("/" + id + "/" + d[0])}>
        <ProdItem>
          <ProdImg src={d[1].src[0]} alt={d[1].alt[0]}></ProdImg>
          <ProdInfo>
            <ProdName>{d[1].name}</ProdName>
            <ProdDesc>{d[1].desc}</ProdDesc>
            <ProdPrice>{d[1].price}</ProdPrice>
          </ProdInfo>
          {/* <ProdButton onClick={() => history.push("/" + id + "/" + d[0])}>View Product</ProdButton> */}
        </ProdItem>
      </ProdBgBox>
    );
  });

  return (
    <>
      <ProductContainer lightBg={lightBg}>
        <ProdContainHeading id={id}>{heading}</ProdContainHeading>
        <Products>
          {elements}
          {/* {data.map((prod, index) => {
            return (
              <ProdBgBox key={index}>
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
          })} */}
        </Products>
      </ProductContainer>
    </>
  );
}

export default ProdContent;
