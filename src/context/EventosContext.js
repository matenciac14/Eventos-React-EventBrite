import React, { Component } from 'react';
import axios from 'axios';

const EventosContext = React.createContext(); //creamos el context
export const EventosConsumer = EventosContext.Consumer;


class EventosProvider extends Component {

    token = 'YVSQKJ4GFJAR2U6YGP6I';//variable de la clave de nuestro usuario par la api
    ordenar = 'date'

    state = { 
        eventos : []
     }

    //metodo para obtener los eventos
    obtenerEventos = async (busqueda) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;
    
        //consultar la api con axios y url
        const eventos = await axios(url);
        this.setState({
            eventos : eventos.data.events
        })
    
    
    }


    render() { 
        return ( 
            <EventosContext.Provider
                value={{
                    eventos: this.state.eventos,
                    obtenerEventos : this.obtenerEventos

                }}
            >
                {this.props.children}
            </EventosContext.Provider>
         );
    }
}
 
export default EventosProvider;