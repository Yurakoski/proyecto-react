import React, {useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from "../CartContext/CartContext";

const CartWidget = () => {
    const {counterProducts} = useContext(Context);
      
    return(
        <>
            <ShoppingCartIcon/>
            
            {counterProducts !== 0 ? (<div>{counterProducts}</div>) : (<div></div>)  }
        </>
        )
}

export default CartWidget;