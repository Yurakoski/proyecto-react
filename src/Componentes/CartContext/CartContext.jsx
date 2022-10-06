import React, {createContext, useState} from 'react';

export const Context = createContext();

const CartProvider = ({children})=>{
    
    const [cart, setCart] = useState([]);

    const addItem= (product, counter) => {
       if (isInCart(product.id)){
        const index= cart.findIndex(prod=> prod.product.id === product.id)
        cart[index].counter = cart[index].counter + counter;
    }else{
            setCart([...cart, {product, counter}]);
            }
        }

    const removeItem= (id) =>{
        setCart(cart.filter((product)=>{
            return product.id !== id}));
    }

    const isInCart = (id)=>{
        return cart.some((prod)=> prod.product.id === id);
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