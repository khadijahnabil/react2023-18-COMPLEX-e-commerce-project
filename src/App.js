import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CompatRouter } from "react-router-dom-v5-compat";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom-v5-compat";
import {
  HomeLayout,
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <RouterProvider router={router} />
      <Footer />
    </Router>
  );
}

export default App;
