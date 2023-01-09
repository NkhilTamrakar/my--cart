import React from 'react';

const NavBar = (props) => {
    return (
            <div className="navbar"> 
                <div className=" navbar-icon ">
                    <img alt="cart-icon" className="cart-icon" src = "https://cdn-icons-png.flaticon.com/512/3144/3144456.png" />
                    <span className= "cart-icon-span"> {props.count} </span>
                </div>
            </div>

        );
    }






export default NavBar;