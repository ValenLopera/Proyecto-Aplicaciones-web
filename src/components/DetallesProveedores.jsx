import React from 'react';
import { Link,useParams } from 'react-router-dom';
import dispositivosData from './DispositivosData';
import proveedoresData from './ProveedoresData';
import paises_Data from './PaisesData';
import '../styles/DetallesBiomateriales.css'

function DetallesProveedores() {
  const { id } = useParams();
  const proveedor = proveedoresData.find((item) => item.id === parseInt(id));

  if (!proveedor) {
    // Manejar caso de no encontrar el biomaterial
    return <div><p>No se encontró el proveedor.</p></div>;
  }

  const buscardispositivosPorId = (ids) => {
    return dispositivosData.filter((dispositivo) => ids.includes(dispositivo.id));
  };

  const buscarpaisesPorId = (ids) => {
    return paises_Data.filter((pais) => ids.includes(pais.id));
  };

  const dispositivosRelacionados = buscardispositivosPorId(proveedor.dispositivosId);
  const paisesRelacionados = buscarpaisesPorId(proveedor.paisesId);


 

  return (
    <div className="detalles-container">
      <h1 className="titulo">{proveedor.name}</h1>
      <img src={proveedor.Image} alt={proveedor.name} className="imagen" />
      <p className="descripcion">{proveedor.description}</p>
      <p className="descripcion">Telefono: {proveedor.telefono}</p>
      <p className="descripcion">URL: {proveedor.Url}</p>
      <p className="descripcion">Email: {proveedor.Email}</p>
      <div className="relacionados">
        <div className="aleaciones-container ">
          <h2 className='subtitulo'>Dispositivos Relacionados:</h2>
          <ul>
            {dispositivosRelacionados.map((dispositivo) => (
              <Link to={`/dispositivos/${dispositivo.id}`} key={dispositivo.id} className="enlace-aleacion">
                <li>
                  <div className='aleacion'>
                    <p>{dispositivo.name}</p>
                    <img src={dispositivo.image} alt={dispositivo.name} className="imagen-relacionada-aleaciones" />
                  </div>
                </li>
              </Link>
            ))}
            {dispositivosRelacionados.length === 0 && (
              <p className="font-family-serif">Este proveedor no tiene dispositivos relacionados.</p>
            )}
          </ul>
        </div>
        <div className="aleaciones-container ">
          <h2 className='subtitulo'>Paises Relacionados:</h2>
          <ul>
            {paisesRelacionados.map((pais) => (
              <Link to={`/paises/${pais.id}`} key={pais.id} className="enlace-aleacion">
                <li>
                  <div className='aleacion'>
                    <p>{pais.name}</p>
                    <img src={pais.Image} alt={pais.name} className="imagen-relacionada-aleaciones" />
                  </div>
                </li>
              </Link>
            ))}
            {paisesRelacionados.length === 0 && (
              <p className="font-family-serif">Este proveedor no tiene paises relacionados.</p>
            )}
          </ul>
        </div>
    </div>
    </div>
  );
}

export default DetallesProveedores;