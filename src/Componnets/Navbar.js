import React, { useRef } from "react";
import logo from '../images/logo.png';
import {cart} from "../Data";
const Navber =()=>{
    const searchRef = useRef();
    const cartRef = useRef();
    const navRef = useRef();

    const searchHandler =()=>{
        searchRef.current.classList.toggle("active")
        cartRef.current.classList.remove("active")
        navRef.current.classList.remove('active')
    }
    const cartHandler =()=>{
        cartRef.current.classList.toggle("active")
        searchRef.current.classList.remove("active")
        navRef.current.classList.remove('active')
    }
    const navHandler=()=>{
        navRef.current.classList.toggle('active')
        searchRef.current.classList.remove("active")
        cartRef.current.classList.remove("active")
    }
    return(
        <div>
            <header className="header">
                <a href="#" className="logo">
                    <img src={logo}/>
                </a>
                <nav className="navbar" ref={navRef}>
                    <a href="#"className="option">Home</a>
                    <a href="#about">About</a>
                    <a href="#menu">Menu</a>
                    <a href="#product">Products</a>
                    <a href="#review">review</a>
                    <a href="#contact">Contact</a> 
                    <a href="#blog">blogs</a>
                </nav>
                <div className="icons">
                    <div className="fas fa-search"onClick={searchHandler}></div>
                    <div className="fas fa-shopping-cart" onClick={cartHandler}></div>
                    <div className="fas fa-bars" id="menu-btn"onClick={navHandler}></div>
                </div>
                <div className="search-form" ref={searchRef}>
                    <input type="search" placeholder="Search here..." id="search-box"/>
                    <label htmlFor="search-box" className="fas fa-search"></label>
                </div>
                <div className="cart-items-container"ref={cartRef}>
                    {cart.map((item, index)=>(
                        <div className="cart-item" key={index}>
                            <span className="fas fa-times"></span>
                            <img src={item.img}/>
                            <div className="content">
                                <h3>cart item 01</h3>
                                <div className="price">$15.99/-</div>
                            </div>
                        </div>
                    ))}
                    <a className="btn" href="#">
                        Checkout now
                    </a>
                </div>
            </header>
        </div>
    )
}
export default Navber;