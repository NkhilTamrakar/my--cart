import React from 'react';

const CartItem = (props) => {
        const { price, title ,quantity,} = props.product;
        const {product} = props;
        return (
            <div className="cart-item">

                <div className="left-block">
                <img style={styles.image} alt = " product"  src = {product.img}/>
                </div>
                <div className="right-block">

                    <div style={styles.doc}> Name  : {title} </div>
                    <div style={styles.net}> Price : {price} </div>
                    <div style={styles.net}> Quantity: {quantity} </div>

                    <div className='cart-item-actions'>
                        {/*button*/}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png" 
                            onClick={() => props.onIncreaseQuantity(props.product)}
                        />

                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828899.png" 
                            onClick={() => props.onDecreaseQuantity(props.product)}
                        />
                        
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/3096/3096687.png"
                            onClick={() => props.onDeleteButton(props.product.id)}
                        />

                    </div>
                </div>
            </div>
        )
    }

const styles = {
    image: {
        height:110,
        width : 110,
        borderRadius: 4,
        background: '#ccc',

    },

    doc: {
        color: "black",
        fontSize : 24
    },
    net: {
        color: "rgb(110, 26, 148)",
        fontSize : 23
    }
};



export default CartItem;