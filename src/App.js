import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CompatRouter } from "react-router-dom-v5-compat";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom-v5-compat";
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
} from "./pages";
import { Navbar, Sidebar, Footer } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route exact path='products/:id' children={<SingleProduct />} />
        <Route exact path='/checkout'>
          <Checkout />
        </Route>
        <Route exact path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
