import React, { Fragment } from "react";

const Contact =()=>{
    return(
        <Fragment>
            <section className="contact" id="contact">
                <h1><span>Contact </span>us</h1>
            <div className="row">
                <iframe
                     class="map"
                     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11993.267641772954!2d-72.8480109!3d41.2802068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x36c6fa619c4f5603!2sMcDonald&#39;s!5e0!3m2!1sen!2s!4v1633364807635!5m2!1sen!2s"
                     allowfullscreen=""
                     title="google"
                     loading="lazy">
               </iframe>
            <form>
                   <h3>get in touch</h3>
            <div className="inputBox">
                <span class="fas fa-user"></span>
                <input type="text" placeholder="name"/>
            </div>
            <div class="inputBox">
                <span class="fas fa-envelope"></span>
                <input type="email" placeholder="email" />
            </div>
            <div class="inputBox">
                <span class="fas fa-phone"></span>
                <input type="number" placeholder="number" />
            </div>
                <input type="submit" value="contact now" class="btn" />
            </form>
            </div>
            </section>
        </Fragment>
    )
}
export default Contact;