import React from 'react';
import { Link } from 'react-router-dom';
import dispositivosData from '../components/DispositivosData';

function Dispositivos() {
  return (
    <div>
      <div className='background-image background-image-Dispositivos'></div>
      <div className='background-rectangle-biomat'>
       <h1 className="titulo-grande">Dispositivos</h1>
      </div>      
      <div className='cuadricula-container'>
      <div className="cuadricula">
        {dispositivosData.map((dispositivo) => (
          <Link key={dispositivo.id} to={`/dispositivos/${dispositivo.id}`}>
            <div className="cuadricula-background">
              <h2 className="subtitulo">{dispositivo.name}</h2>
              <div className='imagen-container'>
                <img src={dispositivo.image} alt={dispositivo.name}  className='imagen-cuadricula'/>
              </div>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Dispositivos;