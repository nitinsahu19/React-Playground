import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul class="list-unstyled">
        <li>
          <Link to="/products/p1">Book</Link>
        </li>
        <li>
          <Link to="/products/p2">Tshirt</Link>
        </li>
        <li>
          <Link to="/products/p3">Mobile</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
