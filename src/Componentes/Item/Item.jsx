import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {

    const { title , description , price, image } = product;

    return(
        <>
        <div className="container-card">
        <div className="card">
            <h3>Producto: {title}</h3>
            <p>Descripción: {description}</p>
            <p>Precio: {price}</p>
            <Link to={`/products/${product.id}`}><img className="product-image" src={image}></img></Link>
        </div>
        </div>
        </>
    )
}

export default Item;