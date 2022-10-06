import React, {useState, useContext} from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import { Context } from "../CartContext/CartContext";

const ItemDetail = ( {product} ) => {
    
    const [purchaseCompleted, setPurchaseCompleted] = useState(false);
    const {addItem} = useContext(Context);
    
    const finishBuying = () => {
        setPurchaseCompleted(true);
    }
    const onAdd = (counter) =>{
        finishBuying();
        addItem(product, counter);
    }
    
    return(
        <>
        <div className="container-card">
        <div className="card">
            <h2>DETALLE DEL PRODUCTO ELEGIDO</h2>
            <h3>Producto: {product.title}</h3>
            <p>Descripción: {product.description}</p>
            <img className="productImage" src={product.image}></img>
            <p>Precio: {product.price}</p>
        </div>
        </div>
        {purchaseCompleted ? <Link to='/cart'>Finalizar compra</Link> : <ItemCount onAdd={onAdd} stock={5} initial={1} finishBuying={finishBuying} />}
        </>
    )
}

export default ItemDetail;
