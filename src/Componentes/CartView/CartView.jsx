
import React, {useContext} from 'react'
import { Context } from "../CartContext/CartContext";
import {Link} from 'react-router-dom'

const CartView = () => {

    const {cart, removeItem} = useContext(Context);
    console.log(cart);
    return(
        <>
        {cart.length === 0 ? (<div>No agregaste ningún producto, para ver los productos, haz click <Link to="/">aquí</Link></div>) :
         (<>
            {cart.map((prod) => {
                return <><div key={prod.product.id}>Producto: {prod.product.title} CANTIDAD: {prod.counter}</div>
                <button key={`${prod.product.id}-${prod.product.title}`} onClick={(()=>removeItem(prod.product.id))}>borrar</button></>
                })}
         </>)}
            
        </>
    )
}
//<div>{cart.length}</div>
//<div>{cart[0].product.title}</div>
//<div>{cart[0].counter}</div>

export default CartView;
