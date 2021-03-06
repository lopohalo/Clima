import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Clima from './components/Clima'
import Error from './components/Error'

function App() {
  const [ busqueda, guardarBusqueda ] = useState({
    ciudad: '',
    pais:''
})
const {ciudad, pais} = busqueda

  const [ consulta, guardarConsulta ] = useState(false)
  const [ resultado, guardarResultado ] = useState({})
  const [ error, guardarError ] = useState(false)

useEffect(() => {
  const consultarAPI = async () => {
        if(consulta){
          
            const appId = '0649a34ca454f75fa6c0865de9e62a03';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}&units=metric`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json();

            guardarResultado(resultado)
            guardarConsulta(false)
          }
          if(resultado.cod === "404" ){
            guardarError(true)
          } else {
               guardarError(false)
          }
        }
    consultarAPI();
    // eslint-disable-next-line
}, [consulta]);

  let componente;
  if(error) {
    componente = <Error mensaje="No hay resultados" />
  } else {
    componente = <Clima 
              resultado={resultado}
              />
  }
  return (
    <Fragment>
    <Header 
      titulo='clima React app'
    />
    <div className="contenedor-form">
      <div className="container">
        <div className="row">
          <div className="col m6 s12">
             <Formulario
             busqueda={busqueda}
             guardarBusqueda={guardarBusqueda}
             guardarConsulta={guardarConsulta}
             />
           </div>
          <div className="col m6 s12">
              {componente}
           </div> 
        </div>
      </div>

    </div>
    </Fragment>
  );
}

export default App;
