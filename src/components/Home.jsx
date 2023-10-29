import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex items-center justify-between p-4'>
        <img src="/BioSearch.png" alt="Logo biomat" width={300}/>
        <input 
          type="text"
          placeholder='Buscar una palabra'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="py-2 px-60 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 "
        />
        <button onClick={() => handleSearch(searchTerm)} className='bg-blue-500 text-white py-2 px-4 rounded-lg mx-4'>Buscar</button>
      </div>
      <div className='flex justify-center mt-20'>
        <div className="w-80 h-80 bg-blue-500 inline-block mr-4">
          <h1 className="my-32 font-bold text-2xl">Biomaterial</h1>
        </div>
        <div className="w-80 h-80 bg-green-500 inline-block mr-4">
        <h1 className="my-32 font-bold text-2xl">Aleación</h1>
        </div>
        <div className="w-80 h-80 bg-red-500 inline-block">
        <h1 className="my-32 font-bold text-2xl">Dispositivo</h1>
        </div>
    </div>
    </div>
  );
}

export default Home;
