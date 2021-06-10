import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CartBtns,
  CartHeading,
  CartItem,
  CartItemContent,
  CartItemImg,
  CartItemName,
  CartItemPrice,
  // CartItemQuan,
  CartList,
  CartNoText,
  CartSectionContainer,
  CartWrapper,
  CheckoutWrapper,
  // QuanChange,
  // QuanDisplay,
  RemoveButton,
} from "./CartSectionElements";
import { items } from "../MainSection/data";
import { Add, ClearAll, Delete, Remove } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import {
  CartChangeB,
  CartQuanContainer,
  // H,
  QuanDisplay,
} from "../ProductSection/ProductSectionElements";

const CartSection = ({ cart, setCart }) => {
  let history = useHistory();

  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    if (Object.entries(cart).length === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }, [cart]);

  const handleSub = (pid) => {
    if (cart.hasOwnProperty(pid)) {
      const new_quan = cart[pid][0] - 1;
      if (new_quan === 0) {
        const new_cart = Object.fromEntries(
          Object.entries(cart).filter(([id, q]) => id !== pid)
        );
        // console.log("Cart: ", cart);
        // console.log("New Cart: ", new_cart);
        setCart(new_cart);
      } else {
        setCart({ ...cart, [pid]: [new_quan, cart[pid][1]] });
      }
    }
  };

  // To add item quan
  const handleAdd = (pid) => {
    if (cart.hasOwnProperty(pid)) {
      const new_quan = cart[pid][0] + 1;
      setCart({ ...cart, [pid]: [new_quan, cart[pid][1]] });
    } else {
      setCart({ ...cart, [pid]: [1, cart[pid][1]] });
    }
  };

  // To remove item from Cart
  const handleRemove = (pid) => {
    const new_cart = Object.fromEntries(
      Object.entries(cart).filter(([id, q]) => id !== pid)
    );
    setCart(new_cart);
  };

  const elements = Object.entries(cart).map((d) => {
    // console.log("CartElement: ",d[0]);

    for (let category in items) {
      // console.log(category);
      if (items[category].hasOwnProperty(d[0])) {
        let p = items[category][d[0]];
        return (
          <CartItem key={d[0]}>
            <CartItemImg src={p.src[0]} alt={p.alt}></CartItemImg>
            <CartItemContent>
              <CartItemName>
                {p.name}
              </CartItemName>
              <CartItemPrice>
                {p.price}
              </CartItemPrice>
              <CartBtns>
                <CartQuanContainer bg={true}>
                  <CartChangeB onClick={() => handleSub(d[0])}>
                    <Remove style={{ height: "100%", color: "white", stroke: "white", strokeWidth: "0.5" }}/>
                    {/* <H>-</H> */}
                  </CartChangeB>
                  <QuanDisplay>{d[1][0]}</QuanDisplay>
                  <CartChangeB onClick={() => handleAdd(d[0])}>
                  <Add style={{ height: "100%", color: "white", stroke: "white", strokeWidth: "0.5" }}/>
                    {/* <H>+</H> */}
                  </CartChangeB>
                </CartQuanContainer>
                <RemoveButton onClick={() => handleRemove(d[0])}>
                  <Delete style={{ color: "#fff" }} />
                </RemoveButton>
              </CartBtns>
            </CartItemContent>
          </CartItem>
        );
      }
    }

    // If item in cart is not in items data, then we can redirect to error page.
    // history.push("/not-found");
    return (
      <CartItem>
        <h2>Item not in database</h2>
      </CartItem>
    );
  });

  return (
    <>
      {/* <h1 style={{"height": "calc(100vh - 80px)"}}>Cart Page</h1> */}
      <CartSectionContainer>
        <CartWrapper>
          <CartHeading>Cart</CartHeading>
          <CartList empty={empty}>
            {empty ? <CartNoText>Cart Empty</CartNoText> : elements}
          </CartList>
          <CheckoutWrapper>
            {empty ? (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#843434", padding: "10px" }}
                  onClick={() => history.push("/")}
                >
                  Go to Shop
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    margin: "10px",
                    backgroundColor: "#843434",
                    padding: "10px",
                  }}
                  onClick={() => setCart({})}
                >
                  <ClearAll style={{ marginRight: "2px" }} />
                  Clear All
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    margin: "0 10px 0 0",
                    backgroundColor: "#843434",
                    padding: "10px",
                  }}
                  onClick={() => history.push("/checkout")}
                >
                  Proceed To Checkout
                </Button>
              </>
            )}
          </CheckoutWrapper>
        </CartWrapper>
      </CartSectionContainer>
    </>
  );
};

export default CartSection;
