import React, { FC, useState, useEffect } from 'react';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <div>
        <div>
          <span>&#129307;</span>
          <button>Rock</button>
        </div>
        <div>
          <span>&#x1F91A;</span>
          <button>Paper</button>
        </div>
        <div>
          <span>&#9996;</span>
          <button>Scissors</button>
        </div>
      </div>
    </div>
  );
};

export default App;
