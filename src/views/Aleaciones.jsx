import React from 'react';
import { Link } from 'react-router-dom';
import aleacionesData from '../components/AleacionesData';

function Aleaciones() {
  return (
    <div>
      <div className='background-image-Aleaciones'></div>
      <div className='background-rectangle-biomat'>
       <h1 className="items-center font-bold font-serif text-6xl my-4">Aleaciones</h1>
      </div>      
      <div className="grid grid-cols-3 gap-4 mt-20 ">
        {aleacionesData.map((aleacion) => (
          <Link key={aleacion.id} to={`/aleaciones/${aleacion.id}`}>
            <div className="bg-white bg-opacity-60 p-4 rounded-lg w-80 h-52">
              <h2 className="font-bold font-serif text-xl ">{aleacion.name}</h2>
              <img src={aleacion.image} alt={aleacion.name} width={aleacion.width} height={aleacion.height} className='flex mx-auto my-auto items-center py-1'/>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Aleaciones;