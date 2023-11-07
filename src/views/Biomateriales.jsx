import React from 'react';
import { Link } from 'react-router-dom';
import biomaterialesData from '../components/BiomaterialesData';
import '../styles/PaginaBiomat.css'

function Biomateriales() {
  return (
    <div>
      <div className='background-image background-image-Biomateriales'></div>
      <div className='background-rectangle-biomat'>
       <h1 className="titulo-grande">Biomateriales</h1>
      </div>     
      <div className='cuadricula-container'>
      <div className="cuadricula">
        {biomaterialesData.map((biomaterial) => (
          <Link key={biomaterial.id} to={`/biomateriales/${biomaterial.id}`}>
            <div className="cuadricula-background">
              <h2 className="titulo-cuadricula">{biomaterial.name}</h2>
              <img src={biomaterial.image} alt={biomaterial.name} width={biomaterial.width} height={biomaterial.height} className='imagen-cuadricula '/>
              
            </div>
          </Link>
        ))}
      </div>
      </div> 
    </div>
  );
}

export default Biomateriales;

