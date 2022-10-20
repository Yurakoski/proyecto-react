import React from "react";
import { SpinnerCircular } from 'spinners-react';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { doc, getDoc, collection } from 'firebase/firestore';

const ItemDetailContainer = ()=> {

    let { IdProduct } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    //Recibe de la base de datos el producto que coincide con el id y lo retorna
    useEffect(() => {
        const productCollection = collection(db,'products');
        const refDoc = doc(productCollection, IdProduct);
        getDoc(refDoc).then((result) => {
            setProduct({ ...result.data(), id: result.id }) //En Firebase el id se encuentra un paso más atrás del result.data()
        })
        .catch((err)=>{
            console.error(err);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [IdProduct]);

    //Mientras el producto se carga, se muestra un spinner
    return(
        <>
            { loading ? <SpinnerCircular /> : <ItemDetail product= { product }/> }
        </>
    )
}

export default ItemDetailContainer;
