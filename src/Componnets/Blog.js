import { Fragment } from 'react';
import {blog} from '../Data';
const Blog =()=>{
    return(
        <Fragment>
            <section className='blog' id='blog'>
                <h1>our <span>blogs</span></h1>
                <div className='box-container'>
                    {
                        blog.map((item, index)=>(
                            <div className='box' key={index}>
                                <div className='image'>
                                    <img src={item.img} alt=''/>
                                </div>
                            <div class="content">
                                <a href="#" class="title">
                                    tasty and refreshing spices
                                </a>
                                <span>by admin / 21st may, 2021</span>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                                    dicta.
                                   </p>
                                <a href="#" class="btn">
                                    read more
                                </a>
                            </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </Fragment>
    )
}
export default Blog;