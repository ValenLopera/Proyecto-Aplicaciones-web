import React from 'react';
import { Link } from 'react-router-dom';
import aleacionesData from '../components/AleacionesData';

function Aleaciones() {
  return (
    <div>
      <div className='background-image background-image-Aleaciones'></div>
      <div className='background-rectangle-biomat'>
       <h1 className="items-center font-bold font-serif text-6xl my-4">Aleaciones</h1>
      </div>      
      <div className='cuadricula-container'>
      <div className="cuadricula">
        {aleacionesData.map((aleacion) => (
          <Link key={aleacion.id} to={`/aleaciones/${aleacion.id}`}>
            <div className="cuadricula-background ">
              <h2 className="font-bold font-serif text-xl ">{aleacion.name}</h2>
              <img src={aleacion.image} alt={aleacion.name} width={aleacion.width} height={aleacion.height} className='imagen-cuadricula'/>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Aleaciones;