import React, { FC, useState, useEffect } from 'react';
import './App.css';

const App: FC = () => {
  return (
    <>
      <div className="App">
        <div className="screen">
          <div className="control">
            <span className="icon">&#129307;</span>
            <button className="button">Rock</button>
          </div>
          <div className="control">
            <span className="icon">&#x1F91A;</span>
            <button className="button">Paper</button>
          </div>
          <div className="control">
            <span className="icon">&#9996;</span>
            <button className="button">Scissors</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
