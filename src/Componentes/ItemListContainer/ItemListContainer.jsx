import React from 'react';
import { useState, useEffect } from 'react';
import products from '../../assets/products.js';
import customFetch from '../../utils/customFetch';
import ItemList from '../ItemList/ItemList.jsx';
import { SpinnerCircular } from 'spinners-react';

const ItemListContainer = ({ greeting })=> {

    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        customFetch(products).then(res => {
                setListProducts(res);
                setLoading(false);
                })
        }, []);

    return(
        <>
            <h2>{greeting}</h2>
            { loading ? <SpinnerCircular /> : <ItemList products= {listProducts} />}
        </>
    )
}

export default ItemListContainer;