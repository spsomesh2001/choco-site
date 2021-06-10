import React from "react";
import { CartSection, Footer, Header } from "../components";

const CartPage = ({cart, setCart}) => {
  return (
    <>
      <Header changeColorY={0} Nhome={true}></Header>
      <CartSection cart={cart} setCart={setCart}></CartSection>
      <Footer></Footer>
    </>
  );
};

export default CartPage;
