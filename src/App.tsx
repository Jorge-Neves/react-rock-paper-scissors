import React, { FC, useState, useEffect } from 'react';
import './App.css';

enum PlayerChoiceOptions {
  DEFAULT = 'default',
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSORTS = 'scissorts',
}

enum WinnerOptions {
  DEFAULT = 'default',
  COMPUTER = 'computer',
  PLAYER = 'player',
}

const App: FC = () => {
  const [playerChoice, setPlayerChoice] = useState<string>(
    PlayerChoiceOptions.DEFAULT
  );

  const [winner, setWinner] = useState<string>(WinnerOptions.DEFAULT);

  const [shouldDisplayResultScreen, setShouldDisplayResultScreen] =
    useState<boolean>(true);

  const closeResultScreenHandler = () => {
    setShouldDisplayResultScreen(false);
  };

  useEffect(() => {
    if (playerChoice !== PlayerChoiceOptions.DEFAULT) return;
  }, [playerChoice]);

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
      {shouldDisplayResultScreen && (
        <>
          <div className="result-screen-background">
            <div className="result-screen">
              <div className="close-button-container">
                <button
                  className="close-button"
                  onClick={() => closeResultScreenHandler()}
                >
                  X
                </button>
              </div>
              <div>
                <p>Results</p>
                <p>{winner}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default App;
