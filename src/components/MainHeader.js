import React from "react";
const MainHeader = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/welcome">
          Welcome Page
        </a>
        <a className="navbar-brand" href="/products">
          Products Page
        </a>
      </nav>
    </>
  );
};

export default MainHeader;
