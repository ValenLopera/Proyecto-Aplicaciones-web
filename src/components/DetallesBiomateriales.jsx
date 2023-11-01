import React from 'react';
import { useParams } from 'react-router-dom';
import biomaterialesData from '../components/BiomaterialesData';
import aleacionesData from './AleacionesData';
import dispositivosData from './DispositivosData';
import '../styles/DetallesBiomateriales.css'

function DetallesBiomateriales() {
  const { id } = useParams();
  const biomaterial = biomaterialesData.find((item) => item.id === parseInt(id));

  if (!biomaterial) {
    // Manejar caso de no encontrar el biomaterial
    return <div><p>No se encontró el biomaterial.</p></div>;
  }

  const buscarAleacionesPorId = (ids) => {
    return aleacionesData.filter((aleacion) => ids.includes(aleacion.id));
  };

  const buscarDispositivosPorId = (ids) => {
    return dispositivosData.filter((dispositivo) => ids.includes(dispositivo.id));
  };

  const aleacionesRelacionadas = buscarAleacionesPorId(biomaterial.aleacionesId);
  const dispositivosRelacionados = buscarDispositivosPorId(biomaterial.dispositivosId);

 

  return (
    <div className="detalles-container">
      <h1 className="titulo">{biomaterial.name}</h1>
      <img src={biomaterial.image} alt={biomaterial.name} className="imagen" />
      <p className="descripcion">{biomaterial.description}</p>
      <div className="relacionados">
        <div className="columna">
          <h2 className='subtitulo'>Aleaciones relacionadas:</h2>
          <ul>
            {aleacionesRelacionadas.map((aleacion) => (
              <li key={aleacion.id}>
                <p className='aleacion'>{aleacion.name}</p>
                <img src={aleacion.image} alt={aleacion.name} className="imagen-relacionada-aleaciones" />
              </li>
            ))}
          </ul>
        </div>
        <div className="columna">
          <h2 className='subtitulo'>Dispositivos relacionados:</h2>
          <ul>
            {dispositivosRelacionados.map((dispositivo) => (
              <li key={dispositivo.id}>
                <p className='dispositivo'>{dispositivo.name}</p>
                <img src={dispositivo.image} alt={dispositivo.name} className="imagen-relacionada-dispositivos" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetallesBiomateriales;
