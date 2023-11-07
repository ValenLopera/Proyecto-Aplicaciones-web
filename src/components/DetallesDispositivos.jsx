import React from 'react';
import { Link,useParams } from 'react-router-dom';
import biomaterialesData from './BiomaterialesData';
import aleacionesData from './AleacionesData';
import dispositivosData from './DispositivosData';
import proveedoresData from './ProveedoresData';
import '../styles/DetallesBiomateriales.css'

function DetallesDispositivos() {
  const { id } = useParams();
  const dispositivo = dispositivosData.find((item) => item.id === parseInt(id));

  if (!dispositivo) {
    // Manejar caso de no encontrar el biomaterial
    return <div><p>No se encontró el biomaterial.</p></div>;
  }

  const buscarBiomaterialesPorId = (ids) => {
    return biomaterialesData.filter((biomaterial) => ids.includes(biomaterial.id));
  };

  const buscarAleacionesPorId = (ids) => {
    return aleacionesData.filter((aleacion) => ids.includes(aleacion.id));
  };

  const buscarproveedoresPorId = (ids) => {
    return proveedoresData.filter((proveedor) => ids.includes(proveedor.id));
  };

  const aleacionesRelacionadas = buscarAleacionesPorId(dispositivo.aleacionesId);
  const biomaterialesRelacionados = buscarBiomaterialesPorId(dispositivo.biomaterialesId);
  const proveedoresRelacionados = buscarproveedoresPorId(dispositivo.proveedoresId);

 

  return (
    <div className="detalles-container">
      <h1 className="titulo">{dispositivo.name}</h1>
      <img src={dispositivo.image} alt={dispositivo.name} className="imagen" />
      <p className="descripcion">{dispositivo.description}</p>
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
              <p className="font-family-serif">Este dispositivo no tiene biomateriales relacionados.</p>
            )}
          </ul>
        </div>
        <div className="dispositivos-container">
          <h2 className='subtitulo'>Aleaciones relacionadas:</h2>
          <ul>
            {aleacionesRelacionadas.map((aleacion) => (
              <Link to={`/aleaciones/${aleacion.id}`} key={aleacion.id} className="enlace-dispositivo">
                <li>
                  <div className='dispositivo'>
                    <p>{aleacion.name}</p>
                    <img src={aleacion.image} alt={aleacion.name} className="imagen-relacionada-dispositivos" />
                  </div>
                </li>
              </Link>
            ))}
            {aleacionesRelacionadas.length === 0 && (
              <p className="font-family-serif">Este dispositivo no tiene aleaciones relacionadas.</p>
            )}
          </ul>
        </div>
        <div className="dispositivos-container">
          <h2 className='subtitulo'>Proveedores relacionadas:</h2>
          <ul>
            {proveedoresRelacionados.map((proveedor) => (
              <Link to={`/proveedores/${proveedor.id}`} key={proveedor.id} className="enlace-dispositivo">
                <li>
                  <div className='dispositivo'>
                    <p>{proveedor.name}</p>
                    <img src={proveedor.Image} alt={proveedor.name} className="imagen-relacionada-dispositivos" />
                  </div>
                </li>
              </Link>
            ))}
            {proveedoresRelacionados.length === 0 && (
              <p className="font-family-serif">Este dispositivo no tiene proveedores relacionados.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetallesDispositivos;
