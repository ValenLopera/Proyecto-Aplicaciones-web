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
    <div className='container'>
      <div className='background-image background-image-Home'></div>
      <div className='background-rectangle'></div>
      <div className='banner-container'>
        <img src="/BioSearch1.png" alt="Logo biomat" className='logo-biomat'/>
        <input 
          type="text"
          placeholder='Buscar una palabra'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="barra-busqueda"
        />
        <button onClick={() => handleSearch(searchTerm)} className='boton'>
          Buscar
        </button>
      </div>
      <div className='cajones'>
        <Link to="/biomateriales" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="cajon cajon-biomaterial">
            <h1 className="titulos-cajones">Biomaterial</h1>
            <img src="/hidroxiapatita.png" alt="hidroxiapatita"  className='imagen-cajones'/>
          </div>
        </Link>
        <Link to="/aleaciones" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="cajon cajon-aleacion">
            <h1 className="titulos-cajones">Aleación</h1>
            <img src="/aleacion.png" alt="Aleacion" className='imagen-cajones' />
          </div>          
        </Link >
        <Link to="/dispositivos" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="cajon cajon-dispositivo" >
            <h1 className="titulos-cajones">Dispositivo</h1>
            <img src="/Protesis.png" alt="Protesis"  className='imagen-cajones' />
          </div>          
        </Link>
      </div>
    </div>
  );
}

export default Home;

