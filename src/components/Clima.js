import React from 'react';
import PropTypes from 'prop-types';
const Clima = ({resultado}) => {
      const {name, main} = resultado;

      if(!name) return null;

    return ( 
        <div className="card-panel white col s12">
          <div className="black-text">
              <h2>El clima de {name} es: </h2>
              <p className="temperatura">
                  {parseFloat(main.temp ,10).toFixed(2)}<span>&#x2103;</span>
              </p>
              <p >Temperatura Máxima:
                  {parseFloat(main.temp_max ,10).toFixed(2)}<span>&#x2103;</span>
              </p>
              <p >Temperatura Minima:
                  {parseFloat(main.temp_min ,10).toFixed(2)}<span>&#x2103;</span>
              </p>
          </div>

        </div>
     );
}
Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
 
export default Clima;