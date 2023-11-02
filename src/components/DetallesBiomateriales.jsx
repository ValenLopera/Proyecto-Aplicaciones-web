import React from 'react';
import { Link,useParams } from 'react-router-dom';
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
        <div className="aleaciones-container ">
          <h2 className='subtitulo'>Aleaciones relacionadas:</h2>
          <ul>
            {aleacionesRelacionadas.map((aleacion) => (
              <Link to={`/aleaciones/${aleacion.id}`} key={aleacion.id} className="enlace-aleacion">
                <li>
                  <div className='aleacion'>
                    <p>{aleacion.name}</p>
                    <img src={aleacion.image} alt={aleacion.name} className="imagen-relacionada-aleaciones" />
                  </div>
                </li>
              </Link>
            ))}
            {aleacionesRelacionadas.length === 0 && (
              <p className="font-family-serif">Este biomaterial no tiene aleaciones relacionadas.</p>
            )}
          </ul>
        </div>
        <div className="dispositivos-container">
          <h2 className='subtitulo'>Dispositivos relacionados:</h2>
          <ul>
            {dispositivosRelacionados.map((dispositivo) => (
              <Link to={`/dispositivos/${dispositivo.id}`} key={dispositivo.id} className="enlace-dispositivo">
                <li>
                  <div className='dispositivo'>
                    <p>{dispositivo.name}</p>
                    <img src={dispositivo.image} alt={dispositivo.name} className="imagen-relacionada-dispositivos" />
                  </div>
                </li>
              </Link>
            ))}
            {dispositivosRelacionados.length === 0 && (
              <p className="font-family-serif">Este biomaterial no tiene dispositivos relacionados.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetallesBiomateriales;
