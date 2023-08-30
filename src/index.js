import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { SidebarProvider } from "./context/sidebar_context";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

// domain: dev-bb63opllm0auvlri.us.auth0.com
// client ID: yWweOPF58KsftW3Z2eT2rSE6PCklWgCC

root.render(
  <Auth0Provider
    domain='dev-bb63opllm0auvlri.us.auth0.com'
    clientId='yWweOPF58KsftW3Z2eT2rSE6PCklWgCC'
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}>
    <UserProvider>
      <SidebarProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </SidebarProvider>
    </UserProvider>
  </Auth0Provider>
);
