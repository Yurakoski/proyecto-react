import React, {useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from "../CartContext/CartContext";

const CartWidget = () => {
    const {cart} = useContext(Context);

    return(
        <>
            <ShoppingCartIcon/>
            <div>{cart.length}</div>
        </>
        )
}

export default CartWidget;