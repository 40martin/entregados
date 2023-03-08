import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  let valor = 0;

  const incrementar = () => {
    console.log('incrementar');
  };
  
  return (
    <div className="container">
      <NavBar />
        <ItemListContainer greeting={'Bienvenidos'} />

        <p>Contador: {valor}</p>
        <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default App;
