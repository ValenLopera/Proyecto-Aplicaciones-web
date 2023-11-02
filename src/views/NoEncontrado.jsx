import React from 'react';
import '../styles/Fondo.css'

function NoEncontrado() {
  return (
    <div className='fondo'>
      <h1 className='my-8 font-bold font-serif text-5xl'>Lo sentimos, la palabra que buscas no existe</h1>
      <img src="/Error404.png" alt="Error Page Not found" width={300} className='mx-auto'/>
    </div>
  );
}

export default NoEncontrado;
