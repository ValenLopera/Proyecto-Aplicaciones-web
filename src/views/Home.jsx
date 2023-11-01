import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import aleacionesData from '../components/AleacionesData';
import biomaterialesData from '../components/BiomaterialesData';
import dispositivosData from '../components/DispositivosData';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const result = buscarResultado(searchTerm);
    if (result) {
      navigate(`/${result.section}/${result.id}`);
    } else {
      navigate('/no-encontrado');
    }
  };

  const buscarResultado = (term) => {
    let data, section;

    // Buscar en biomaterialesData
    data = biomaterialesData.find((biomaterial) =>
      biomaterial.name.toLowerCase() === term.toLowerCase()
    );
    section = 'biomateriales';

    if (!data) {
      // Buscar en aleacionesData
      data = aleacionesData.find((aleacion) =>
        aleacion.name.toLowerCase() === term.toLowerCase()
      );
      section = 'aleaciones';
    }

    if (!data) {
      // Buscar en dispositivosData
      data = dispositivosData.find((dispositivo) =>
        dispositivo.name.toLowerCase() === term.toLowerCase()
      );
      section = 'dispositivos';
    }

    if (data) {
      return { id: data.id, section };
    }

    return null;
  };

  // Esta función manejará la búsqueda cuando se presione "Enter" en el campo de búsqueda.
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='flex flex-col h-screen'>
      <div className='background-image-Home'></div>
      <div className='background-rectangle'></div>
      <div className='flex items-center justify-between p-6'>
        <img src="/BioSearch1.png" alt="Logo biomat" width={300}/>
        <input 
          type="text"
          placeholder='Buscar una palabra'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="py-2 px-60 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mx-10"
        />
        <button onClick={() => handleSearch(searchTerm)} className='bg-cyan-500 text-white py-2 px-4 rounded-lg '>
          Buscar
        </button>
      </div>
      <div className='flex justify-center mt-40'>
        <Link to="/biomateriales" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="w-80 h-80 bg-cyan-300 rounded-lg mr-4 flex flex-col items-center">
            <h1 className="my-8 font-bold font-serif text-3xl">Biomaterial</h1>
            <img src="/hidroxiapatita.png" alt="hidroxiapatita" width={300} />
          </div>
        </Link>
        <Link to="/aleaciones" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="w-80 h-80 bg-cyan-400 rounded-lg mr-4 flex flex-col items-center">
            <h1 className="my-8 font-bold font-serif text-3xl">Aleación</h1>
            <img src="/aleacion.png" alt="Aleacion" width={300} />
          </div>          
        </Link >
        <Link to="/dispositivos" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="w-80 h-80 bg-cyan-500 rounded-lg flex flex-col items-center justify-center" >
            <h1 className="my-4 font-bold font-serif text-3xl">Dispositivo</h1>
            <img src="/Protesis.png" alt="Protesis" width={300} />
          </div>          
        </Link>
      </div>
    </div>
  );
}

export default Home;

