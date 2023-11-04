import React from 'react';
import { Link,useParams } from 'react-router-dom';
import dispositivosData from './DispositivosData';
import proveedoresData from './ProveedoresData';
import paises_Data from './PaisesData';
import '../styles/DetallesBiomateriales.css'

function DetallesPaises() {
  const { id } = useParams();
  const pais = paises_Data.find((item) => item.id === parseInt(id));

  if (!pais) {
    // Manejar caso de no encontrar el biomaterial
    return <div><p>No se encontró el pais.</p></div>;
  }

  const buscarproveedoresPorId = (ids) => {
    return proveedoresData.filter((proveedor) => ids.includes(proveedor.id));
  };

  const proveedoresRelacionados = buscarproveedoresPorId(pais.proveedoresId);


  return (
    <div className="detalles-container">
      <h1 className="titulo">{pais.name}</h1>
      <img src={pais.Image} alt={pais.name} className="imagen" />
      <div className="relacionados">
        <div className="aleaciones-container ">
          <h2 className='subtitulo'>Proveedores Relacionados:</h2>
          <ul>
            {proveedoresRelacionados.map((proveedor) => (
              <Link to={`/proveedores/${proveedor.id}`} key={proveedor.id} className="enlace-aleacion">
                <li>
                  <div className='aleacion'>
                    <p>{proveedor.name}</p>
                    <img src={proveedor.image} alt={proveedor.name} className="imagen-relacionada-aleaciones" />
                  </div>
                </li>
              </Link>
            ))}
            {proveedoresRelacionados.length === 0 && (
              <p className="font-family-serif">Este pais no tiene proveedores relacionados.</p>
            )}
          </ul>
        </div>
    </div>
    </div>
  );
}

export default DetallesPaises;