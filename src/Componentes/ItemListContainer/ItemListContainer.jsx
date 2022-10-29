import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList.jsx';
import { SpinnerCircular } from 'spinners-react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = ({ greeting })=> {
  
    let { IdCategory } = useParams();
    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const productsCollection = collection(db,'products');
        const _query = query(productsCollection, where('category', '==' , IdCategory || null))
        
        //Si se selecciona una categoría trae esos productos, sino trae todos
        getDocs(IdCategory ? _query : productsCollection ).then((data)=>{
            const lista = data.docs.map((product) =>{
                return { ...product.data(), 
                        id: product.id } //En Firebase el id se encuentra un paso más atrás del result.data()
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

    return(
        <>
        <section className="background">
            <img className="banner" src="https://i0.wp.com/www.ildivanohome.com/wp-content/uploads/2015/01/banner-ahora12.jpg?ssl=1"></img>
            <div className="title">
                <h2>{ greeting }</h2>
            </div>
            { loading ? <SpinnerCircular /> : <ItemList products= { listProducts } />}
        </section>
        </>
    )
}

export default ItemListContainer;