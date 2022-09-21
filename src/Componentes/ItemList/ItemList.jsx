import React from 'react';
import Item from '../Item/Item'

const ItemList = ({ products }) => {
   
    return(
        <>
            {products.map((prod, index) =>  <Item key= {`${prod.id}-${index}`} product = {prod}/>)}
        </>
    )
}

export default ItemList;