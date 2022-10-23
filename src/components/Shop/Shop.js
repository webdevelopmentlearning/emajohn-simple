import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json'
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
const first10 = fakeData.slice(0,10);
const [products,setProducts]=useState(first10)

    return (
        <div className='shop-container'>
            <div className="products">
                {
                    products.map(product=><Product product={product}></Product>)
                }
            </div>
            <div className="cart">
                <h3>This is Cart</h3>
            </div>
        </div>
    );
};

export default Shop;