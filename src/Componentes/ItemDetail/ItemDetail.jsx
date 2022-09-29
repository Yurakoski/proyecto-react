import React, {useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

const ItemDetail = ( {product} ) => {

    const [purchaseCompleted, setPurchaseCompleted] = useState(false);

    const finishBuying = () => {
        setPurchaseCompleted(true);
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
        {purchaseCompleted ? <Link to='/cart'>Finalizar compra</Link> : <ItemCount stock={5} initial={1} finishBuying={finishBuying} />}
        </>
    )
}

export default ItemDetail;
