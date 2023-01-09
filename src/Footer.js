import React from 'react';

const Footer = (props) => {
    return (
            <div className="footer" id = {props.mes} > 
                <div className='footer-center'>
                    Copyright © 2023 Nikhil Tamrakar [ intern P360 ]
                </div>
                <div className=" footer-right ">
                    <p> Total Price = {props.price} </p>
                </div>
            </div>

        );
    }






export default Footer;