import './App.css';
import NavBar from './Componentes/NavBar/NavBar'
import Title from './Componentes/Title/Title';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';

import ItemCount from './Componentes/ItemCount/ItemCount';

const App = () => {

  return (
    <>
      <NavBar>
        <Title/>
      </NavBar>
      <ItemListContainer greeting="Bienvenidos"/>
      <ItemDetailContainer/>
      <ItemCount stock={5} initial={1}/>
    </>
  );
}

export default App;
