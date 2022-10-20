import React, { useState } from 'react';

const ItemCount = ({ stock , initial, onAdd }) => {

    const [availableStock, setStock] = useState(stock -1) //Le resto una unidad ya que el contador selecciona 1 producto desde el inicio
    const [counter, setCounter] = useState(initial);

    const increment = ()=>{
        if (availableStock >= 1){
            setStock(availableStock -1);
            setCounter(counter + 1);
        }else alert("No hay más stock");
    }

    const decrement = ()=>{
        if (counter > 1){
            setStock(stock + 1);
            setCounter(counter - 1);
        }else alert("Tiene que seleccionar al menos un producto para agregar");
    }

    return(
        <>  
        <div className="counter-container">
            <h3>Contador</h3>
            <div>{counter}</div>
            <div>STOCK DISPONIBLE: {availableStock}</div>
            <div className="button-container">
                <button onClick={increment}>Incrementar</button>
                <button onClick={decrement}>Decrementar</button>
                <button onClick={()=>onAdd(counter)}>Agregar al carrito</button>
            </div>
        </div>
        </>
        )
}

export default ItemCount;