import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { ImgContainer, SlideContainer } from "./ProductSectionElements";

const SlideGallery = ({ imgSrc, imgAlt }) => {
  const [imgS, setImgS] = useState([]);

  useEffect(() => {
    // console.log("sources => ", imgSrc);
    // console.log("alts => ", imgAlt);
    var tmp = [];
    imgSrc.forEach((ele, index) => {
      tmp.push(<ImgContainer src={ele} alt={imgAlt[index]}></ImgContainer>);
    });
    setImgS(tmp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgSrc, imgAlt]);

  // useEffect(() => console.log(imgS), [imgS]);

  return (
    <>
      <SlideContainer>
        <AliceCarousel
          items={imgS}
          stagePadding={{ paddingLeft: "50px", paddingRight: "50px" }}
        ></AliceCarousel>
      </SlideContainer>
    </>
  );
};

export default SlideGallery;
