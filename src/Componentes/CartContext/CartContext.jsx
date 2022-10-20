import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

const CartProvider = ({ children })=>{
    
    const [cart, setCart] = useState([]);
    const [counterProducts, setCounterProducts] = useState(0);

    //Setea la cantidad de productos cuando se agrega o elimina un producto del carrito
    useEffect(() => {
        quantityInCart();
    }, [cart]);

    //Si el producto no está en el carrito, lo agrega, sino le suma la cantidad al producto repetido
    const addItem= (product, counter) => {
       if (isInCart(product.id)){
        const index= cart.findIndex(prod=> prod.product.id === product.id);
        cart[index].counter = cart[index].counter + counter;
        quantityInCart();
    }else{
            setCart([...cart, {product, counter}]);
            }
    }

    //Suma los productos y sus cantidades
    const quantityInCart= () => {
        const quantitiesProducts = cart.map(item => item.counter);
        const quantity = quantitiesProducts.reduce((sum, item) => sum + item, 0);
        setCounterProducts(quantity);
    }

    const removeItem= (id) =>{
        setCart(cart.filter((prod)=>{ return prod.product.id !== id }));
    }

    const isInCart = (id)=>{
        return cart.some((prod)=> prod.product.id === id);
    }

    const clear = ()=>{
        setCart([]);
    }

    return (
        <>
        <Context.Provider value={ {cart, counterProducts, addItem, clear, removeItem} }>{ children }</Context.Provider>
        </>
    )
}

export default CartProvider;