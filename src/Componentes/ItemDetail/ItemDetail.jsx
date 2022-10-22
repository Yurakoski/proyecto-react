import React, {useState, useContext} from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import { Context } from "../CartContext/CartContext";

const ItemDetail = ({ product }) => {
    
    const [purchaseCompleted, setPurchaseCompleted] = useState(false);
    const {addItem} = useContext(Context);
    
    const finishBuying = () => {
        setPurchaseCompleted(true); 
    }

    //Se ejecuta desde el ItemCount
    const onAdd = (counter) =>{
        finishBuying();
        addItem(product, counter); //Recibe el producto y la cantidad desde el ItemCount
    }
    
    return(
        <>
        <div className="container-card">
        <div className="card">
            <h2>DETALLE DEL PRODUCTO ELEGIDO</h2>
            <h3>{product.title}</h3>
            <img className="productImage" src={product.image}></img>
            <p className="price">${product.price}</p>
            <p>Descripción: {product.description}</p>
        </div>
        </div>
        { purchaseCompleted ? 
            <Link to='/cart'>
                <div className="container-to-cart">
                    <button className="button-to-cart">Ir al carrito</button>
                </div>
            </Link> : <ItemCount onAdd={onAdd} stock={product.stock} initial={1} finishBuying={finishBuying} /> }
        </>
    )
}

export default ItemDetail;
