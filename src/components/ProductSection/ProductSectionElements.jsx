import styled from "styled-components";
import { HashLink as Link } from 'react-router-hash-link';
import { Button } from "@material-ui/core";

export const ProdPageContainer = styled.div`
  background: #fff;
  width: 100%;
  min-height: calc(100vh - 80px);

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

// Image Side =====================================================================================================
// Only Product image
export const ProdImgSide = styled.div`
  margin: 25px 0;
  height: 80vh;
  width: 100%;
  max-width: 550px;
  border-radius: 10px;
  box-shadow: hsla(240, 30.069930069930066%, 28.03921568627451%, 0.25) 0px 30px
      60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  border-bottom: #a1d1d1 0.5px solid;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    width: 80%;
  }

  @media screen and (min-height: 600px) and (max-width: 499px){
    max-height: 490px;
  }

  @media screen and (min-height: 1000px) and (max-height: 1500px) {
      max-height: 530px;
  }
`;

export const ProdMainImgContainer = styled.div`
  height: 75%;
  width: 80%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

export const ProdMainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ProdImgSlide = styled.div`
  margin: 2px;
  border: 1px solid #000;
  height: 15%;
  width: 88%;
`;

// Carousel Styles
export const SlideContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 10px;
`;

export const ImgContainer = styled.img`
  height: 400px;
  width: 100%;
  min-width: 450px;
  padding: 0 10px;
  object-fit: contain;
  border-bottom: #a1d1d1 0.5px solid;
  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.02);
    z-index: 999;
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 600px) {
    padding: 0 10px;
    min-width: 0;
    height: 350px;
  }
`;

// ######################### Image Side ======================================================================

export const ProdContentSide = styled.div`
  margin: 25px 0;
  width: 100%;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const ProdCategory = styled.p`
  margin: 10px 10px 0;
  color: #8a8686;
  text-decoration: underline;
`;

export const ProdHeading = styled.h1`
  margin: 10px;
  font-size: 2.7rem;
`;

export const ProdDesc = styled.p`
  margin: 20px 10px;
  font-size: 1.3rem;
`;

export const ProdPrice = styled.h3`
  margin: 10px 20px;
  font-size: 1.8rem;
`;

export const Offers = styled.div`
  margin: 20px 10px;
  height: 10px;
`;

export const ButtonsWrapper = styled.div`
  margin: 20px 10px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const CartQuanContainer = styled.div`
  margin-right: 10px;
  width: ${({ bg }) => (bg ? "170px" : "")};
  display: flex;
  align-items: center;
  height: 44px;
  background-color: ${({ bg }) => (bg ? "#843434" : "")};
  border-radius: 5px;
`;

export const CartChangeB = styled(Button)`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-out;
`;

export const QuanDisplay = styled.p`
  padding: 8px 15px;
  background-color: #f7f7f7;
  font-weight: bold;
`;

export const CartButton = styled(Button)`
  width: 80px;
  cursor: pointer;
`;

export const Features = styled.div`
  margin: 20px 10px;
  height: 10px;
`;

export const GoToHome = styled(Link)`
  margin: 20px 10px;
  cursor: pointer;
  color: #843434;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: underline;

  &:hover {
    color: #a9a9a9;
    transition: all 0.4s ease-out;
  }
`;

export const H = styled.h4`
  font-size: 1rem;
  color: #fff;
`;
