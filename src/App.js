import React, { useEffect, useState } from 'react';
import { GlobalContainer} from './globalStyles';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import { CartPage, CheckOutPage, HomePage, ProductPage } from './pages/index'


function App() {

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('myCart')) || {});

  useEffect(() => {
    return () => {
      scroll.scrollTo(0, {duration: 0, delay: 0});
    }
  }, []);

  useEffect(() => {
    // console.log("Writing in storage");
    localStorage.setItem('myCart', JSON.stringify(cart));
  }, [cart]);

  return (
    <>
    <Router>
      <GlobalContainer></GlobalContainer>
      <Switch>
        <Route exact path="/">
          <HomePage cart={cart} setCart={setCart}></HomePage>
        </Route>
        <Route exact path="/cart">
          <CartPage cart={cart} setCart={setCart}></CartPage>
        </Route>
        <Route exact path="/checkout">
          <CheckOutPage cart={cart} setCart={setCart}></CheckOutPage>
        </Route>
        <Route path="/:ptype/:pid">
          <ProductPage cart={cart} setCart={setCart}></ProductPage>
        </Route>
        <Route path="*"><h1>404 Page Not Found</h1></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
