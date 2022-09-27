import React from 'react';

const Item = ({ product }) => {

    const { title , description , price, image } = product;

    return(
        <>
        <div className="container-card">

        <div className="card">
            <h3>Producto: {title}</h3>
            <p>Descripción: {description}</p>
            <p>Precio: {price}</p>
            <img className="product-image" src={image}></img>
        </div>
        </div>
        </>
    )
}

export default Item;