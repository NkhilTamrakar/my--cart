import React from 'react';
const NavBar = (props) => {
    const {mes} = props;
    console.log("popop",props.mes);
    return (
            <div className="navbar" id = {props.mes}> 
            <div className="navbar-buttons">
                <button onClick={props.primaryTheme}> Primary </button>
                <button onClick={props.secondaryTheme}> Secondary </button>
            </div>
            
                <div className=" navbar-icon ">
                    <img alt="cart-icon" className="cart-icon" src = "https://cdn-icons-png.flaticon.com/512/3144/3144456.png" />
                    <span className= "cart-icon-span"> {props.count} </span>
                </div>
            </div>

        );
    }


    






export default NavBar;