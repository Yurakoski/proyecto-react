import React from 'react';
import { useState, useEffect } from 'react';
import products from '../../assets/products.js';
import ItemList from '../ItemList/ItemList.jsx';
import { SpinnerCircular } from 'spinners-react';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting })=> {
    const URL_HOME = 'https://fakestoreapi.com/products?limit=3'
    const URL_CATEGORY = 'https://fakestoreapi.com/products/category/'
    let {IdCategory} = useParams();
    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const getItems = async() =>{ 
            let url = URL_CATEGORY;
           
            if (IdCategory === undefined){
                url = URL_HOME;
            }else{
                url=`${URL_CATEGORY}${IdCategory}`
            }

            try{
                const responseApi = await fetch(url);
                const responseParse = await responseApi.json();
                setListProducts(responseParse);
                }
            catch(err){
                console.error(err);
                }
            finally{
                setLoading(false);
                }        
            }
            getItems();
            }, [IdCategory]);

    return(
        <>
            <h2>{greeting}</h2>
            { loading ? <SpinnerCircular /> : <ItemList products= {listProducts} />}
        </>
    )
}

export default ItemListContainer;