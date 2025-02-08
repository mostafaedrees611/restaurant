import React, { Fragment } from "react";
import Navber from "./Componnets/Navbar";
import Home from "./Componnets/Home";
import About from "./Componnets/About";
import Menu from "./Componnets/Menu";
import Product from "./Componnets/Product";
import Review from "./Componnets/Review";
import Contact from "./Componnets/Contact";
import Blog from "./Componnets/Blog";
import Footer from "./Componnets/Footer";
function App() {
  return (
    <Fragment>
      <Navber/>
      <Home/>
      <About/>
      <Menu/>
      <Product/>
      <Review/>
      <Contact/>
      <Blog/>
      <Footer/>
    </Fragment>
  );
}

export default App;
