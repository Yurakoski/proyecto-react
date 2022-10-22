import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {

    const { title , description , price, image } = product;

    return(
        <>
        <div className="container-card">
        <div className="card">
            <h3>{title}</h3>
            <Link to={`/products/${product.id}`}><img className="product-image" src={image}></img></Link>
            <p className="price">$ {price}</p>
        </div>
        </div>
        </>
    )
}

export default Item;