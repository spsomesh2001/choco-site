import { Button, CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
  BreakLeft,
  BreakRight,
  CheckContainer,
  CheckIcon,
  CheckOutContainer,
  CheckOutContent,
  CheckOutH,
  CheckOutWrapper,
  CheckText,
  CirCon,
  GoCon,
  PlaceContainer,
  PriceBreakCon,
  ProceedCon,
} from "./CheckOutElements";

const Checkout = ({ cart, setCart }) => {
  const history = useHistory();

  const deliveryCharge = 10.0;
  const firstOff = 4.99;

  const [price, setPrice] = useState(null);
  const [tprice, setTPrice] = useState(null);
  const [placed, setPlaced] = useState(false);

  useEffect(() => {
    if (Object.entries(cart).length === 0) {
      alert("Cart is empty. Can't proceed to checkout");
      history.push("/");
    }

    let pp = 0;
    for (var property in cart) {
      pp += cart[property][0] * cart[property][1];
    }
    setPrice(pp);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    var tp = price + deliveryCharge - firstOff;
    setTPrice(tp);
  }, [price]);

  return (
    <>
      <CheckOutContainer>
        <CheckOutWrapper p={placed}>
          {placed ? (
            // <></>
            <PlaceContainer>
              <CheckContainer>
                <CheckIcon style={{height: "200px", width: "200px", color: "#843434"}} />
              </CheckContainer>
              <CheckText>Order Placed!</CheckText>
              <GoCon>
                <Button variant="contained" style={{backgroundColor: "#843434", color: "#fff", fontWeight: "bold"}} onClick={() => history.push("/")}>Go To Home</Button>
              </GoCon>
            </PlaceContainer>
          ) : (
            <>
              <CheckOutH>Summary</CheckOutH>
              {price && tprice ? (
                <>
                  <CheckOutContent>
                    <PriceBreakCon>
                      <BreakLeft>Price</BreakLeft>
                      <BreakRight>:</BreakRight>
                      <BreakRight p={true}>{`$${price.toFixed(2)}`}</BreakRight>
                    </PriceBreakCon>
                    <PriceBreakCon>
                      <BreakLeft>Delivery Charge</BreakLeft>
                      <BreakRight>:</BreakRight>
                      <BreakRight p={true}>{`$${deliveryCharge.toFixed(
                        2
                      )}`}</BreakRight>
                    </PriceBreakCon>
                    <PriceBreakCon>
                      <BreakLeft>First Buy Offer</BreakLeft>
                      <BreakRight>:</BreakRight>
                      <BreakRight p={true}>{`-$${firstOff.toFixed(
                        2
                      )}`}</BreakRight>
                    </PriceBreakCon>
                    <PriceBreakCon>
                      <BreakLeft>Total Bill</BreakLeft>
                      <BreakRight>:</BreakRight>
                      <BreakRight
                        p={true}
                        style={{ fontWeight: "bold" }}
                      >{`$${tprice.toFixed(2)}`}</BreakRight>
                    </PriceBreakCon>

                    <ProceedCon>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#843434", color: "#fff" }}
                        onClick={() => {
                          setPlaced(true);
                          setCart({});
                        }}
                      >
                        Place Order
                      </Button>
                    </ProceedCon>
                  </CheckOutContent>
                </>
              ) : (
                <CirCon>
                  <CircularProgress />
                </CirCon>
              )}
            </>
          )}
        </CheckOutWrapper>
      </CheckOutContainer>
    </>
  );
};

export default Checkout;
