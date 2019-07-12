import React from 'react'
import {EventosConsumer} from '../context/EventosContext'
import Evento from './Evento'

const Listaeventos = () => {
    return (  
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <EventosConsumer>
                { (value) => {
                    return value.eventos.map( evento => (
                        
                        <Evento
                        //en este caso utilizamos props para mejor legbildad de nuestro codigo
                            key={evento.id}//propiedad unica de cada objeto de dato
                            evento={evento}// pasamos el objetos al componente Evento

                        />
                    )
                        
                    )
                } }
            </EventosConsumer>
        </div>
    );
}
 
export default Listaeventos;