
import React, {useContext} from 'react'
import { Context } from "../CartContext/CartContext";

const CartView = () => {

    const {cart} = useContext(Context);
    console.log(cart);
    return(
        <>
            {cart.map((prod) => {
                return <div key={prod.product.id}>Producto: {prod.product.title} Cantidad: {prod.counter}</div>
                })}
        </>
    )
}
//<div>{cart.length}</div>
//<div>{cart[0].product.title}</div>
//<div>{cart[0].counter}</div>

export default CartView;
