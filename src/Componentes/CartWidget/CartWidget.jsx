import React, {useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from "../CartContext/CartContext";

const CartWidget = () => {
    const {counterProducts} = useContext(Context);
      
    return(
        <>
            <ShoppingCartIcon/>
            <div>{counterProducts}</div>
        </>
        )
}

export default CartWidget;