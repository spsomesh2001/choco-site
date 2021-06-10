import React, { useEffect, useState } from "react";
import {
  ButtonsWrapper,
  CartButton,
  CartChangeB,
  CartQuanContainer,
  // Features,
  GoToHome,
  H,
  Offers,
  ProdCategory,
  ProdContentSide,
  ProdDesc,
  ProdHeading,
  ProdImgSide,
  // ProdImgSlide,
  // ProdMainImg,
  // ProdMainImgContainer,
  ProdPageContainer,
  ProdPrice,
  QuanDisplay,
} from "./ProductSectionElements";
import { items } from "../MainSection/data";
import { useHistory, useParams } from "react-router";
import SlideGallery from "./SlideGallery";
import { CircularProgress } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";

const ProductSection = ({ cart, setCart }) => {
  const { ptype, pid } = useParams();
  const history = useHistory();

  const [prod, setProd] = useState([]);
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    if (items.hasOwnProperty(ptype)) {
      if (items[ptype].hasOwnProperty(pid)) {
        setProd(items[ptype][pid]);
      } else {
        history.push("/not-found");
      }
    } else {
      history.push("/not-found");
    }

    if (cart.hasOwnProperty(pid)) {
      setInCart(true);
    } else {
      setInCart(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, ptype, pid]);

  // To display the add button or not
  useEffect(() => {
    // console.log("Cart => ", cart);
    if (cart.hasOwnProperty(pid)) {
      setInCart(true);
    } else {
      setInCart(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  // To subtract item quan
  const handleSub = () => {
    if (cart.hasOwnProperty(pid)) {
      const new_quan = cart[pid][0] - 1;
      if (new_quan === 0) {
        const new_cart = Object.fromEntries(
          Object.entries(cart).filter(([id, q]) => id !== pid)
        );
        console.log("Cart: ", cart);
        console.log("New Cart: ", new_cart);
        setCart(new_cart);
      } else {
        setCart({ ...cart, [pid]: [new_quan, cart[pid][1]] });
      }
    }
  };

  // To add item quan
  const handleAdd = () => {
    const p = parseFloat(prod.price.slice(1));
    if (cart.hasOwnProperty(pid)) {
      const new_quan = cart[pid][0] + 1;
      setCart({ ...cart, [pid]: [new_quan, p] });
    } else {
      setCart({ ...cart, [pid]: [1, p] });
    }
  };

  // To handle buy button
  const handleBuy = () => {
    const p = parseFloat(prod.price.slice(1));
    if (!cart.hasOwnProperty(pid)) {
      setCart({ ...cart, [pid]: [1, p] });
    }
    history.push("/cart");
  };

  return (
    <>
      <ProdPageContainer>
        <ProdImgSide>
          {prod?.src ? (
            <SlideGallery imgSrc={prod.src} imgAlt={prod.alt}></SlideGallery>
          ) : (
            <CircularProgress />
          )}
          {/* <ProdMainImgContainer>
            {prod?.src ? (
              <ProdMainImg src={prod.src[0]} alt={prod.alt}></ProdMainImg>
             ) : (
              <CircularProgress />
            )}
             </ProdMainImgContainer> */}
        </ProdImgSide>

        <ProdContentSide>
          <ProdCategory>{`${
            ptype.charAt(0).toUpperCase() + ptype.slice(1)
          } > `}</ProdCategory>
          <ProdHeading>{prod.name}</ProdHeading>
          <ProdDesc>{prod.desc}</ProdDesc>
          <ProdPrice>{prod.price}</ProdPrice>
          <Offers>
            <H style={{ color: "#243434" }}>First Time Purchase: Discount of amount $4.99</H>
          </Offers>
          <ButtonsWrapper>
            <CartQuanContainer bg={inCart}>
              {inCart ? (
                <>
                  <CartChangeB
                    variant="contained"
                    color="primary"
                    style={{ height: "100%", backgroundColor: "#843434" }}
                    onClick={handleSub}
                  >
                    {/* <H>-</H> */}
                    <Remove style={{ height: "100%", stroke: "white", strokeWidth: "0.5" }} />
                  </CartChangeB>
                  <QuanDisplay>{cart[pid] ? cart[pid][0] : ""}</QuanDisplay>
                  <CartChangeB
                    variant="contained"
                    color="primary"
                    style={{ height: "100%", backgroundColor: "#843434" }}
                    onClick={handleAdd}
                  >
                    {/* <H>+</H> */}
                    <Add style={{ height: "100%", stroke: "white", strokeWidth: "0.5" }} />
                  </CartChangeB>
                </>
              ) : (
                <CartButton
                  variant="contained"
                  color="primary"
                  style={{ height: "100%", backgroundColor: "#843434" }}
                  onClick={handleAdd}
                >
                  <H>Add</H>
                </CartButton>
              )}
            </CartQuanContainer>
            <CartQuanContainer bg={false}>
              <CartButton
                variant="contained"
                color="primary"
                style={{ height: "100%", backgroundColor: "#843434" }}
                onClick={handleBuy}
              >
                <H>Buy</H>
              </CartButton>
            </CartQuanContainer>
          </ButtonsWrapper>
          {/* <Features>
            <H style={{ color: "#243434" }}>Features</H>
          </Features> */}
          <GoToHome to="/">Go Home</GoToHome>
        </ProdContentSide>
      </ProdPageContainer>
    </>
  );
};

export default ProductSection;
