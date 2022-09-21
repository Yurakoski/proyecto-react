import React from "react";

const ItemDetail = ( {product} ) => {
    return(
        <>
            <h3>Producto: {product.title}</h3>
            <p>Descripción: {product.description}</p>
            <img className="productImage" src={product.image}></img>
            <p>Precio: {product.price}</p>
        </>
    )
}

export default ItemDetail;
