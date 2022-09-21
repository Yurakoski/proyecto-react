import React from 'react';

const Item = ({ product }) => {

    const { title , description , price } = product;

    return(
        <>
            <h3>Producto: {title}</h3>
            <p>Descripción: {description}</p>
            <p>Precio: {price}</p>
        </>
    )
}

export default Item;