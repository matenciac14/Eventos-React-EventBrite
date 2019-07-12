import React from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import ListaEventos from './componentes/ListaEventos'

import CategoriasProvider from './context/CategoriasContext';
import EventosProvider from './context/EventosContext';

function App() {
  return (
    <EventosProvider>
    <CategoriasProvider>
      <Header/>

      <div className="uk-container">
        <Formulario/>
         <ListaEventos/>
      </div>

     
      
    </CategoriasProvider>
    </EventosProvider>
    
    
  );
}

export default App;
