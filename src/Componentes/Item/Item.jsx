import React from 'react';

const Item = ( {product} ) => {
    return(
        <>
            <h3>Producto: {product.title}</h3>
            <p>Descripción: {product.description}</p>
            <p>Precio: {product.price}</p>
        </>
    )
}


export default Item;