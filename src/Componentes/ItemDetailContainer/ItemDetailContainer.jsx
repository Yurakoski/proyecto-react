import React from "react";
import { SpinnerCircular } from 'spinners-react';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ()=> {

    const [product, setproduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getItem = async() =>{ 
        try{
            const responseApi = await fetch('https://fakestoreapi.com/products/1');
            const responseParse = await responseApi.json();
            setproduct(responseParse);
            }

        catch(err){
            console.error(err);
            }

        finally{
            setLoading(false);
            }        
        }

        getItem();

        }, []);

    return(
        <>
            { loading ? <SpinnerCircular /> : <ItemDetail product = {product}/> }
        </>
    )
}

export default ItemDetailContainer;