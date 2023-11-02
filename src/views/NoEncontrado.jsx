import React from 'react';

function NoEncontrado() {
  return (
    <div>
      <h1 className='titulo'>Lo sentimos, la palabra que buscas no existe</h1>
      <img src="/Error404.png" alt="Error Page Not found" width={300} className='mx-auto'/>
    </div>
  );
}

export default NoEncontrado;
