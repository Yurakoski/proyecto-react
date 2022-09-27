import './App.css';
import NavBar from './Componentes/NavBar/NavBar'
import Title from './Componentes/Title/Title';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import CartView from './Componentes/CartView/CartView';

import ItemCount from './Componentes/ItemCount/ItemCount';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar>
           <Title/>
        </NavBar>

        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos"/>}/>
          <Route path='/category/:IdCategory' element={<ItemListContainer greeting="Bienvenidos"/>}/>
          <Route path='/product/:IdProduct' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartView/>}/>
        </Routes>

        
        
      </BrowserRouter>
      <ItemCount stock={5} initial={1}/>
    </>
  );
}

export default App;
