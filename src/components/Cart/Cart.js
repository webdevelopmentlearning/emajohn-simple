import React from 'react';

const Cart = (props) => {
    const product = props.cart;
    const totalPrice = product.reduce((total,prd)=>total+prd.price,0);
    let shipping = 0;
    if (totalPrice>100) {
        shipping = 4.2;
    }
    else if(totalPrice>0){
        shipping =12
    }
    const tax = totalPrice/10;
    const grandTotal = totalPrice+shipping+tax;
   
// formatNum(rana){
// return Number(num.toFixed(2))
// }
// // const formatNum=(num)=>{
// //     return  Number(num.toFiexed(2));
// // }
    return (
        <div>
            <h2>Order Summery</h2>
            <h4>Items Ordered {product.length}</h4>
            <p><small>Shipping:{shipping}</small></p>
            <p><small>Tax+VAT {tax}</small></p>
            <p>Product Price: {totalPrice}</p>
            <p>Total Price: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;