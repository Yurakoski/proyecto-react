import React from "react";
import { SpinnerCircular } from 'spinners-react';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ()=> {

    const [product, setproduct] = useState({});
    const [loading, setLoading] = useState(true);
    let {IdProduct} = useParams();

    useEffect(() => {
        const getItem = async() =>{ 
        try{
            const responseApi = await fetch(`https://fakestoreapi.com/products/${IdProduct}`);
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
        }, [IdProduct]);

    return(
        <>
            { loading ? <SpinnerCircular /> : <ItemDetail product = {product}/> }
        </>
    )
}

export default ItemDetailContainer;