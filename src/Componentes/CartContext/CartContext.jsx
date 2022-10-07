import React, {createContext, useState, useEffect} from 'react';

export const Context = createContext();

const CartProvider = ({children})=>{
    
    const [cart, setCart] = useState([]);
    const [counterProducts, setCounterProducts] = useState(0);

    useEffect(() => {
        quantityInCart();
    }, [cart]);

    const addItem= (product, counter) => {
       if (isInCart(product.id)){
        const index= cart.findIndex(prod=> prod.product.id === product.id);
        const newCart = cart.filter(prod=> prod !== product[index])
        cart[index].counter = cart[index].counter + counter;
        quantityInCart();
    }else{
            setCart([...cart, {product, counter}]);
            }
    }

    const quantityInCart= () => {
        const quantitiesProducts = cart.map(item => item.counter);
        const quantity = quantitiesProducts.reduce((sum, item) => sum + item, 0);
        setCounterProducts(quantity);
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
        <Context.Provider value={{cart, counterProducts, addItem, clear}}>{children}</Context.Provider>
        </>
    )
}

export default CartProvider;