import react, { Fragment } from 'react';
import { product } from '../Data';
const Product =()=>{
    return(
        <Fragment>
            <section className='product' id='product'>
            <h1>our<span> product</span></h1>
            <div className='box-container'>
                {
                    product.map((item, index)=>(
                        <div className='box'>
                            <div className='icons'>
                                <a href='#' className='fas fa-shopping-cart'></a>
                                <a href='#' className='fas fa-heart'></a>
                                <a href='#' className='fas fa-eye'></a>
                            </div>
                            <div className='image'>
                                <img src={item.img}/>
                            </div>
                            <div className='content'>
                                <h3>fresh Coffee</h3>
                                <div className='stars'>
                                    <i className='fas fa-star'/>
                                    <i className='fas fa-star'/>
                                    <i className='fas fa-star'/>
                                    <i className='fas fa-star'/>
                                    <i className='fas fa-star-half-alt'/>
                                </div>
                                <div className='price'>
                                    $15.99 <span>$20.99</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            </section>
        </Fragment>
    )
}
export default Product;