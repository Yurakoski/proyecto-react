import { React, useState, useContext } from 'react';
import { db } from '../../firebase/firebase.js';
import { collection, addDoc, serverTimestamp} from 'firebase/firestore';
import { Context } from '../CartContext/CartContext';

const Form = ()=>{
    const {cart,clear} = useContext(Context);
    
    //Objeto donde guardo los datos de los input
    const buyer = { 
       name: "",
       phone: "",
       email: ""
    }

    //Lo inicializo con buyer, para indicar que los campos empiezan vacíos
    const [user, setUser] = useState(buyer)
    
    //Función que captura los inputs
    const infoInput = (e) =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value});
    }

    const saveData = async (e) =>{
        e.preventDefault(); //evita que se vuelva a recargar
        setUser({...buyer}) //vuelve a dejar los campos vacíos
    }
    
    //Envía el formulario a la base de datos
    const finishBuying = () =>{ 
        const salesCollection = collection(db, 'sales');
        addDoc(salesCollection, { 
            user: user, 
            items: cart , 
            date: serverTimestamp()
        }).then(()=>{ clear() })
    }

    return(
        <>
        <form onSubmit={saveData}>
            <div>Nombre</div>
            <input type="text" name="name" placeholder="Ingrese su nombre" onChange={infoInput} value={user.name}/>
            <div>Teléfono</div>
            <input type="text" name="phone" placeholder="Ingrese su teléfono" onChange={infoInput} value={user.phone}/>
            <div>Email</div>
            <input type="email" name="email" placeholder="Ingrese su correo electrónico" onChange={infoInput} value={user.email}/>
        </form>
        <button onClick={finishBuying}>Enviar</button>
        </>
    )
}

export default Form;