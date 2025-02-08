import React, { Fragment } from "react";
import {menu} from "../Data";
const Menu=()=>{
    return(
        <Fragment>
            <section className="menu" id="menu">
                <h1>our <span>menu</span></h1>
                <div className="box-container">
                    {
                        menu.map((item, index)=>(
                            <div className="box">
                                <img src={item.img} alt=""/>
                                <h3>tasty and healthy</h3>
                                <div className="price">
                                    $15.99 <span> 20.99</span>
                                </div>
                                <a className="btn" href="#">
                                    add to cart
                                </a>
                            </div>
                        ))
                    }
                </div>
            </section>
        </Fragment>
    )
}
export default Menu;