import React from "react";

const Footer = () => {
  return (
    <>
      <section class="footer">
        <div class="share">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
          <a href="#" class="fab fa-github"></a>
        </div>
        <div class="links">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#product">products</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#blog">blogs</a>
        </div>
        <div class="credit">
          created by <span>Coding circulate</span> | all rights reserved
        </div>
      </section>
    </>
  );
};

export default Footer;
