import './App.css';
import NavBar from './Componentes/NavBar/NavBar'
import Title from './Componentes/Title/Title';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import CartView from './Componentes/CartView/CartView';
import Footer from './Componentes/Footer/Footer';
import CartProvider from './Componentes/CartContext/CartContext';
import Form from './Componentes/Form/Form';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <CartProvider> 
        <NavBar>
           <Title />
        </NavBar>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Las mejores ofertas, siempre"/>}/>
          <Route path='/category/:IdCategory' element={<ItemListContainer greeting="Lo mejor para tu hogar"/>}/>
          <Route path='/products/:IdProduct' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<CartView/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
        <Footer />
      </CartProvider> 
    </BrowserRouter>
    </>
  );
}

export default App;
