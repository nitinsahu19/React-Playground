import React from "react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import { Route } from "react-router-dom";
import Welcome from "./components/Welcome.js";
import Products from "./components/Products.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <header className="bg-light p-4 d-flex justify-content-center">
        <MainHeader />
      </header>
      <main className="container mt-3">
        <Route path="/welcome">
          <div className="bg-success text-white p-3 text-center">
            <Welcome />
          </div>
        </Route>
        <Route path="/products">
          <div className="bg-warning text-dark p-3 text-center">
            <Products />
          </div>
        </Route>
      </main>
    </>
  );
}

export default App;
