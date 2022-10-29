import React, { useContext, useState, useEffect } from 'react';
import { Context } from "../CartContext/CartContext";
import { Link } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const CartView = () => {

    const {cart, removeItem} = useContext(Context);
    console.log(cart);

    const [totalPrice, setTotalPrice] = useState(0);

    //Suma el precio de todos los ítems agregados
    const totalPriceCart = ()=>{
        const priceItems = cart.map(item => item.product.price * item.counter);
        const price= priceItems.reduce((sum, item) => sum + item, 0);
        setTotalPrice(price)
    }

    //Se ejecuta cada vez que se agrega o elimina un producto del carrito
    useEffect(() => {
        totalPriceCart();
    }, [cart]);

    //A cada producto agregado, se le resta la cantidad seleccionada y se actualiza el stock de Firebase
    const updateStock = () => {
        cart.forEach(p => 
            updateDoc(doc(db, "products", p.product.id),{stock: p.product.stock - p.counter}));
    }

    //Si el carrito está vacío devuelve la leyenda con el link indicado, sino muestra los ítems
    return(
        <>
        {cart.length === 0 ? (<div className="cart-container">No agregaste ningún producto, para ver los productos, haz click<Link to="/">aquí</Link></div>) :
         (<>
            {cart.map((prod) => {
                return <>
                        <div key={prod.product.id} className="container-detail">
                            <img className="product-detail" src={prod.product.image}></img>
                            Producto: {prod.product.title} 
                            CANTIDAD: {prod.counter}
                        <button className="button-delete" key={`${prod.product.id}-${prod.product.title}`} 
                                    onClick={()=>removeItem(prod.product.id)}>Borrar</button>
                        </div>
                    </>
                })}
                <div className="container-detail">
                    <div className="total-price">TOTAL: ${totalPrice}</div>
                    <Link to="/form"><button className="button" onClick={updateStock}>Finalizar Compra</button></Link>
                </div>
         </>)}
        </>
    )
}

export default CartView;
