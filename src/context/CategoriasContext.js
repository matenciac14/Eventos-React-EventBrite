import React, { Component } from 'react';
import axios from 'axios'; //importamos axios para consumir la api

//crear el context
const CategoriasContext= React.createContext(); //sintaxis para crear context
export const CategoriasConsumer = CategoriasContext.Consumer; //se crea el consumer 

class CategoriasProvider extends Component {// proveedor de datos

    token = 'YVSQKJ4GFJAR2U6YGP6I';//variable de la clave de nuestro usuario par la api

    state = { 
        categorias : []
     }


//cuando el componente este listo carga esta funcion
    componentDidMount(){
        this.obtenerCategorias();
    }

//creamos  la extraccion de datos de la api con axios
    obtenerCategorias = async () =>{
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

        let categorias = await axios.get(url);

        this.setState({
            categorias : categorias.data.categories
        })


    }


    render() { 
        return (
            <CategoriasContext.Provider
                value = {{
                    categorias:this.state.categorias
                }}
            >
                {this.props.children}
            </CategoriasContext.Provider>
          )
    }
}
 
export default CategoriasProvider;