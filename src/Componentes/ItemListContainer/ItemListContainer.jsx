import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList.jsx';
import { SpinnerCircular } from 'spinners-react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = ({ greeting })=> {
    //const URL_HOME = 'https://fakestoreapi.com/products?limit=3'
    //const URL_CATEGORY = 'https://fakestoreapi.com/products/category/'
    let {IdCategory} = useParams();
    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const productsCollection = collection(db,'products');
        const _query = query(productsCollection, where('category','==',IdCategory || null))
        
        getDocs(IdCategory ? _query : productsCollection ).then((data)=>{
            const lista = data.docs.map((product) =>{
                return {...product.data(), 
                        id: product.id}
            })
            setListProducts(lista);
        })
        .catch((err)=>{
            console.error(err);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [IdCategory]);

        /*const getItems = async() =>{ 
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
            }, [IdCategory]);*/

    return(
        <>
            <div className="title">
                <h2>{greeting}</h2>
            </div>
            { loading ? <SpinnerCircular /> : <ItemList products= {listProducts} />}
        </>
    )
}

export default ItemListContainer;