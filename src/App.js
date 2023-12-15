import React from "react";
import MainHeader from "./components/MainHeader";
import { Redirect, Route, Switch } from "react-router-dom";
import ProductDetails from "./components/Pages/ProductDetails.js";
import Welcome from "./components/Pages/Welcome.js";
import Products from "./components/Pages/Products.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <header className="bg-light p-4 d-flex justify-content-center">
        <MainHeader />
      </header>

      <main className="container mt-3">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"></Redirect>
          </Route>
          <Route path="/welcome">
            <div className="bg-success text-white p-3 text-center">
              <Welcome />
            </div>
          </Route>

          {/* The exact prop is used to ensure that the specified component (<Products /> in this case) is only rendered when the path exactly matches the specified path ("/products"), and not when it matches partially. */}
          <Route path="/products" exact>
            <div
              className="bg-warning text-dark 
            p-3 text-center"
            >
              <Products />
            </div>
          </Route>

          <Route path="/products/:productId">
            <div className="bg-secondary text-dark p-3 text-center">
              <ProductDetails />
            </div>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
