import React, {createContext, useState} from 'react';
export const Context = createContext();


const CartProvider = ({children})=>{
    
    const [cart, setCart] = useState([]);

    const addItem= (product, counter) => {
        if (isInCart(product.id)){

        }else{
            setCart([...cart, {product, counter}]);
        }
    }

    const removeItem= (id) =>{
        setCart(cart.filter((product)=>{
            return product.id !== id}));
    }

    const isInCart = (id)=>{
        return cart.some((product)=> product.id === id);
    }

    const clear = ()=>{
        setCart([]);
    }

    return (
        <>
        <Context.Provider value={{cart, addItem, clear}}>{children}</Context.Provider>
        </>
    )
}

export default CartProvider;