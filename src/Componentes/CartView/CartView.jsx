import React, { useContext, useState, useEffect } from 'react';
import { Context } from "../CartContext/CartContext";
import { Link } from 'react-router-dom';

const CartView = () => {

    const {cart, removeItem} = useContext(Context);
    console.log(cart);

    const [totalPrice, setTotalPrice] = useState(0);

    //Suma el precio de todos los ítems agregados al carrito
    const totalPriceCart = ()=>{
        const priceItems = cart.map(item => item.product.price * item.counter);
        const price= priceItems.reduce((sum, item) => sum + item, 0);
        setTotalPrice(price)
    }

    //Se ejecuta cada vez que se agrega o elimina un producto del carrito
    useEffect(() => {
        totalPriceCart();
    }, [cart]);

    //Si el carrito está vacío devuelve la leyenda con el link indicado, sino muestra los ítems
    return(
        <>
        {cart.length === 0 ? (<div>No agregaste ningún producto, para ver los productos, haz click <Link to="/">aquí</Link></div>) :
         (<>
            {cart.map((prod) => {
                return <>
                        <div key={prod.product.id}>
                        <img className="product-detail" src={prod.product.image}></img>
                            Producto: {prod.product.title} 
                            CANTIDAD: {prod.counter}</div>
                        <button key={`${prod.product.id}-${prod.product.title}`} onClick={()=>removeItem(prod.product.id)}>Borrar</button>
                    </>
                })}
                <div>TOTAL: ${totalPrice}</div>
                <Link to="/form"><button>Finalizar Compra</button></Link>
         </>)}
        </>
    )
}

export default CartView;
