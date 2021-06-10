import React from "react";
import { CheckOut, Footer, Header } from "../components";

const CheckOutPage = ({cart, setCart}) => {
  return (
    <>
      <Header changeColorY={0} Nhome={true}></Header>
      <CheckOut cart={cart} setCart={setCart}></CheckOut>
      <Footer></Footer>
    </>
  );
};

export default CheckOutPage;
