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
  AuthWrapper,
} from "./pages";
import { Navbar, Sidebar, Footer } from "./components";

function App() {
  return (
    <AuthWrapper>
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
          <Route exact path='/products/:id' children={<SingleProduct />} />
          <PrivateRoute exact path='/checkout'>
            <Checkout />
          </PrivateRoute>
          <Route exact path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
