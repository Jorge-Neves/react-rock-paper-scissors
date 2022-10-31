import React, { FC, useState, useEffect } from 'react';
import './App.css';

enum PlayerChoiceOptions {
  DEFAULT = 'default',
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSORS = 'scissorts',
}

enum WinnerOptions {
  DEFAULT = 'default',
  COMPUTER = 'computer',
  PLAYER = 'player',
  DRAW = 'draw',
}

const App: FC = () => {
  const [playerChoice, setPlayerChoice] = useState<string>(
    PlayerChoiceOptions.DEFAULT
  );

  const [winner, setWinner] = useState<string>(WinnerOptions.DEFAULT);

  const [shouldDisplayResultScreen, setShouldDisplayResultScreen] =
    useState<boolean>(false);

  const playerChoiceHandler = (choice: PlayerChoiceOptions) => {
    setPlayerChoice(choice);
  };

  const closeResultScreenHandler = () => {
    setShouldDisplayResultScreen(false);
  };

  const resultsHandler = () => {
    const computerOptions = [
      PlayerChoiceOptions.ROCK,
      PlayerChoiceOptions.PAPER,
      PlayerChoiceOptions.SCISSORS,
    ];

    const ComputerNumber = Math.floor(Math.random() * 2);

    const ComputerChoice = computerOptions[ComputerNumber];

    if (playerChoice === ComputerChoice) {
      setWinner(WinnerOptions.DRAW);
      setShouldDisplayResultScreen(true);
    }

    if (
      (playerChoice === PlayerChoiceOptions.ROCK &&
        ComputerChoice === PlayerChoiceOptions.SCISSORS) ||
      (playerChoice === PlayerChoiceOptions.PAPER &&
        ComputerChoice === PlayerChoiceOptions.ROCK) ||
      (playerChoice === PlayerChoiceOptions.SCISSORS &&
        ComputerChoice === PlayerChoiceOptions.PAPER)
    ) {
      setWinner(WinnerOptions.PLAYER);
      setShouldDisplayResultScreen(true);
    }

    if (
      (ComputerChoice === PlayerChoiceOptions.ROCK &&
        playerChoice === PlayerChoiceOptions.SCISSORS) ||
      (ComputerChoice === PlayerChoiceOptions.PAPER &&
        playerChoice === PlayerChoiceOptions.ROCK) ||
      (ComputerChoice === PlayerChoiceOptions.SCISSORS &&
        playerChoice === PlayerChoiceOptions.PAPER)
    ) {
      setWinner(WinnerOptions.COMPUTER);
      setShouldDisplayResultScreen(true);
    }
    setPlayerChoice(PlayerChoiceOptions.DEFAULT);
  };

  useEffect(() => {
    if (playerChoice !== PlayerChoiceOptions.DEFAULT) {
      resultsHandler();
    }
  }, [playerChoice]);

  return (
    <>
      <div className="App">
        <div className="screen">
          <div className="control">
            <span className="icon">&#129307;</span>
            <button
              onClick={() => playerChoiceHandler(PlayerChoiceOptions.ROCK)}
              className="button"
            >
              Rock
            </button>
          </div>
          <div className="control">
            <span className="icon">&#x1F91A;</span>
            <button
              onClick={() => playerChoiceHandler(PlayerChoiceOptions.PAPER)}
              className="button"
            >
              Paper
            </button>
          </div>
          <div className="control">
            <span className="icon">&#9996;</span>
            <button
              onClick={() => playerChoiceHandler(PlayerChoiceOptions.SCISSORS)}
              className="button"
            >
              Scissors
            </button>
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
                <div className="result-container">
                  <span>
                    {winner === WinnerOptions.PLAYER && (
                      <span className="icon"> &#128100;</span>
                    )}
                    {winner === WinnerOptions.COMPUTER && (
                      <span className="icon">&#128187;</span>
                    )}
                    {winner === WinnerOptions.DRAW && (
                      <span className="icon">&#127937;</span>
                    )}
                  </span>
                  <span>{winner}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default App;
