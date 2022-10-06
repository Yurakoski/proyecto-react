
import React, {useContext} from 'react'
import { Context } from "../CartContext/CartContext";


const CartView = () => {

    const {cart} = useContext(Context);

    return(
        <div>CartView</div>
    )
}

export default CartView;