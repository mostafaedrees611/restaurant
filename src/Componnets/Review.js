import React, { Fragment } from "react";
import {review} from '../Data';
import qoutImage from '../images/quote-img.png';
const Review =()=>{
    return(
        <Fragment>
            <section className="review" id="review">
                <h1>Customer's <span>review</span></h1>
                <div className="box-container">
                    {
                        review.map((item, index)=>(
                            <div className="box">
                                <img src={qoutImage} alt=""/>
                                <p>
                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                                     nulla sit libero nemo fuga sequi nobis? Necessitatibus aut
                                     laborum, nisi quas eaque laudantium consequuntur iste ex aliquam
                                     minus vel? Nemo.
                                </p>
                                <img src={item.img} alt="" className="user"/>
                                <h3>Mostafa Edrees</h3>
                                <div className="stars">
                                     <i className="fas fa-star"></i>
                                     <i className="fas fa-star"></i>
                                     <i className="fas fa-star"></i>
                                     <i className="fas fa-star"></i>
                                     <i className="fas fa-star-half-alt"></i>
                                 </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </Fragment>
    )
}
export default Review;