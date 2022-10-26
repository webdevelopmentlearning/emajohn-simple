import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
const [cart,setCart]=useState([]);
const handleAddProduct=(product)=>{
    const newCart = [...cart,product];
    setCart(newCart)
}
const data = fakeData;
const [products,setProducts]=useState(data)

    return (
        <div className='shop-container'>
            <div className="products">
                {
                    products.map(product=><Product key={product.id} handleAddProduct={handleAddProduct} product={product}></Product>)
                }
            </div>
            <div className="cart">
                {
                    <Cart cart={cart}></Cart>
                }
            </div>
        </div>
    );
};

export default Shop;