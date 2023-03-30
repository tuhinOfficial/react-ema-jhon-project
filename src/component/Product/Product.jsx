import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { img,name,price,quantity,seller,ratings  } = props.product;
    return (
        <div className='product'>
            <div className='product-info'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price : ${price}</p>
            <p>Manufacturer : {seller}</p>
            <p>Ratings : {}</p>
            </div>

            
            <button className='cart-btn'>Add to Cart</button>
             
        </div>
    );
};

export default Product;