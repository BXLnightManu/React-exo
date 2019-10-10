import React from 'react';
import Desctruct from './Desctruct';
import './Root.css';

function Root() {
  return (
    <div>
      <header>
        <Desctruct ob={{hello: true}}/>
      </header>
    </div>
  );
}

export default Root;
