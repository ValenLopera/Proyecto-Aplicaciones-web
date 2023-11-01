import React from 'react';
import { Link } from 'react-router-dom';
import dispositivosData from '../components/DispositivosData';

function Dispositivos() {
  return (
    <div>
      <div className='background-image-Dispositivos'></div>
      <div className='background-rectangle-biomat'>
       <h1 className="items-center font-bold font-serif text-6xl my-4">Dispositivos</h1>
      </div>      
      <div className="grid grid-cols-3 gap-4 mt-20 ">
        {dispositivosData.map((dispositivo) => (
          <Link key={dispositivo.id} to={`/aleaciones/${dispositivo.id}`}>
            <div className="bg-white bg-opacity-70 p-4 rounded-lg w-80 h-52">
              <h2 className="font-bold font-serif text-xl ">{dispositivo.name}</h2>
              <img src={dispositivo.image} alt={dispositivo.name} width={dispositivo.width} height={dispositivo.height} className='flex mx-auto my-auto items-center py-1'/>
              {/* Agrega más información del biomaterial si es necesario */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dispositivos;