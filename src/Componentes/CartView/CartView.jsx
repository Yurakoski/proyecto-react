import React, {useContext, useState, useEffect} from 'react'
import {Context} from "../CartContext/CartContext";
import {Link} from 'react-router-dom'

const CartView = () => {

    const {cart, removeItem} = useContext(Context);
    console.log(cart);

    const [totalPrice, setTotalPrice] = useState(0);

    const totalPriceCart = ()=>{
        const priceItems = cart.map(item => item.product.price * item.counter);
        const price= priceItems.reduce((sum, item) => sum + item, 0);
        setTotalPrice(price)
    }

    useEffect(() => {
        totalPriceCart();
    }, [cart]);

    return(
        <>
        {cart.length === 0 ? (<div>No agregaste ningún producto, para ver los productos, haz click <Link to="/">aquí</Link></div>) :
         (<>
            {cart.map((prod) => {
                return <>
                        <div key={prod.product.id}>Producto: {prod.product.title} CANTIDAD: {prod.counter}</div>
                        <button key={`${prod.product.id}-${prod.product.title}`} onClick={()=>removeItem(prod.product.id)}>Borrar</button>
                    </>
                })}
                <div>TOTAL: ${totalPrice}</div>
         </>)}
        </>
    )
}

export default CartView;
