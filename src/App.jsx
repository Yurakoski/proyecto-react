import './App.css';
import NavBar from './Componentes/NavBar/NavBar'
import Title from './Componentes/NavBar/Title';
import ItemListContainer from './Componentes/NavBar/ItemListContainer';

const App = () => {
  return (
    <>
      <NavBar>
        <Title/>
      </NavBar>
      <ItemListContainer greeting="Bienvenidos"/>
    </>
  );
}

export default App;
