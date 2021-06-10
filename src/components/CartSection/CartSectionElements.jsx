import styled from "styled-components";

export const CartSectionContainer = styled.div`
  background: #fff;
  padding: 0 30px;

  @media screen and (max-width: 600px) {
    padding: 0 10px;
  }
`;

export const CartWrapper = styled.div`
  margin: 30px 0;
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CartHeading = styled.h1`
  width: 120px;
  border-bottom: 6px solid #843434;
  border-radius: 0 7px 7px;
  font-size: 2.5rem;
`;

export const CartList = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ empty }) =>
    empty
      ? ""
      : "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"};
`;

export const CartNoText = styled.h1`
  padding: 10px;
  min-height: calc(100vh - 500px);
`;

export const CartItem = styled.div`
  border: 2px solid #a7a7a7;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  background-color: #f7f7f7;
  transition: 0.3s all ease-out;

  :hover {
    transition: 0.3s all ease-out;
    transform: scale(1.02);
    z-index: 1;
  }

  @media screen and (max-width: 440px) {
    flex-direction: column;
    padding: 20px 10px;
  }
`;


export const CartItemImg = styled.img`
  border: 1px solid #000;
  width: 30%;
  height: 80%;
  max-width: 180px;
  min-height: 150px;
  object-fit: cover;

  
  @media screen and (max-width: 440px) {
    min-height: 200px;
    min-width: 180px;
    margin: 10px;
  }
`;

export const CartItemContent = styled.div`
  margin: 20px 2px;
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 850px) {
    justify-content: space-between;
    margin: 0 30px;
  }

  @media screen and (max-width: 650px) {
    margin: 0 20px;
  }

  @media screen and (max-width: 440px) {
    margin: 0 10px;
  }
`;

export const CartItemName = styled.h5`
  font-size: 2.5rem;
  min-width: 200px;
  
  @media screen and (max-width: 850px) {
    width: 100%;
    margin: 3px 0;
  }

  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;

export const CartItemPrice = styled.h5`
  font-size: 1.8rem;
  width: 100px;

  @media screen and (max-width: 650px) {
    width: 100%;
    margin: 10px 0;
  }
  
  @media screen and (max-width: 440px) {
    margin-bottom: 20px; 
    width: 100%;
  }
`;

export const CartBtns = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 850px) {
    width: 70%;
  }

  @media screen and (max-width: 650px) {
    justify-content: space-between;
    width: 85%;
  }
  
  @media screen and (max-width: 350px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const CartItemQuan = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuanChange = styled.button`
  padding: 10px 20px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const QuanDisplay = styled.p`
  padding: 11px 15px;
  height: 100%;
  border-top: 1px solid #a4a4a4;
  border-bottom: 1px solid #a4a4a4;
`;

export const RemoveButton = styled.button`
  padding: 9px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: #843434;
  border: none;
  border-radius: 5px;

  &:hover {
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  }

  @media screen and (max-width: 300px) {
    margin-top: 15px;
  }
`;

export const CheckoutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
`;
