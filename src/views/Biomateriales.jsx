import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import biomaterialesData from '../components/BiomaterialesData';

function Biomateriales() {
  return (
    <div>
      <div className='background-image-Biomateriales'></div>
      <div className='background-rectangle-biomat'>
       <h1 className="items-center font-bold font-serif text-6xl my-4">Biomateriales</h1>
      </div>      
      <div className="grid grid-cols-3 gap-4 mt-20 ">
        {biomaterialesData.map((biomaterial) => (
          <Link key={biomaterial.id} to={`/biomateriales/${biomaterial.id}`}>
            <div className="bg-white bg-opacity-70 p-4 rounded-lg w-80 h-52 ">
              <h2 className="font-bold font-serif text-xl mb-1">{biomaterial.name}</h2>
              <img src={biomaterial.image} alt={biomaterial.name} width={biomaterial.width} height={biomaterial.height} className='flex mx-auto my-auto '/>
              {/* Agrega más información del biomaterial si es necesario */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Biomateriales;

