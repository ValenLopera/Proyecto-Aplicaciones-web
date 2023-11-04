import React from 'react';
import { Link,useParams } from 'react-router-dom';
import biomaterialesData from './BiomaterialesData';
import aleacionesData from './AleacionesData';
import dispositivosData from './DispositivosData';
import '../styles/DetallesBiomateriales.css'

function DetallesAleaciones() {
  const { id } = useParams();
  const aleacion = aleacionesData.find((item) => item.id === parseInt(id));

  if (!aleacion) {
    // Manejar caso de no encontrar el biomaterial
    return <div><p>No se encontró el biomaterial.</p></div>;
  }

  const buscarBiomaterialesPorId = (ids) => {
    return biomaterialesData.filter((biomaterial) => ids.includes(biomaterial.id));
  };

  const buscarDispositivosPorId = (ids) => {
    return dispositivosData.filter((dispositivo) => ids.includes(dispositivo.id));
  };

  const biomaterialesRelacionados = buscarBiomaterialesPorId(aleacion.biomaterialesId);
  const dispositivosRelacionados = buscarDispositivosPorId(aleacion.dispositivosId);


  return (
    <div className="detalles-container">
      <h1 className="titulo">{aleacion.name}</h1>
      <img src={aleacion.image} alt={aleacion.name} className="imagen" />
      <p className="descripcion">{aleacion.description}</p>
      <div className="relacionados">
        <div className="aleaciones-container ">
          <h2 className='subtitulo'>Biomateriales relacionados:</h2>
          <ul>
            {biomaterialesRelacionados.map((biomaterial) => (
              <Link to={`/biomateriales/${biomaterial.id}`} key={biomaterial.id} className="enlace-aleacion">
                <li>
                  <div className='aleacion'>
                    <p>{biomaterial.name}</p>
                    <img src={biomaterial.image} alt={biomaterial.name} className="imagen-relacionada-aleaciones" />
                  </div>
                </li>
              </Link>
            ))}
            {biomaterialesRelacionados.length === 0 && (
              <p className="font-family-serif">Esta aleación no tiene biomateriales relacionados.</p>
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
              <p className="font-family-serif">Esta aleación no tiene dispositivos relacionados.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetallesAleaciones;
