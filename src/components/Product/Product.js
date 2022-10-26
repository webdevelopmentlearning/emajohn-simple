import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
const Product = (props) => {
    const {name,seller,price,img,stock}=props.product;
    return (
        <div className='procutContainer'>
            <div className="product">
                <img src={img} alt="" />
            </div>
            <div className="description">
                <h2>{name}</h2>
                <p><small>By: {seller}</small></p>
                <p><small>{stock} left in stock. Order Soon!</small></p>
                <h4>${price}</h4>
                <button className='main-btn' onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}/> Add To Cart </button>
            </div>
        </div>
    );
};

export default Product;