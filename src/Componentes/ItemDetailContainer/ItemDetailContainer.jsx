import React from "react";
import { SpinnerCircular } from 'spinners-react';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { doc, getDoc, collection } from 'firebase/firestore';

const ItemDetailContainer = ()=> {

    let {IdProduct} = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const productCollection = collection(db,'products');
        const refDoc = doc(productCollection, IdProduct);
        getDoc(refDoc).then((result) => {
            setProduct({ ...result.data(), id: result.idProduct})
        })
        .catch((err)=>{
            console.error(err);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [IdProduct]);


    /*    const getItem = async() =>{ 
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

*/
    return(
        <>
            { loading ? <SpinnerCircular /> : <ItemDetail product = {product}/> }
        </>
    )
}

export default ItemDetailContainer;