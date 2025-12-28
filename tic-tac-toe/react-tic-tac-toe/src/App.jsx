import { useState } from 'react';
import './App.css'
import GameBoard from "./components/GameBoard/GameBoard";
import GameResult from "./components/GameResult/GameResult";
import PlayerDetail from "./components/PlayerDetail/PlayerDetail";
import GameMoves from './components/GameMoves/GameMoves'
import { WIN_PATTERNS } from "./win_patterns";

const INITIAL_PLAYER_DETAILS = {
  X: 'Player 1',
  O: 'Player 2'
}

const INITIAL_GAME_BOARD = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function getGameBoard(gameState) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(value => [...value])];

  for (const item of gameState) {
    gameBoard[item.row][item.col] = item.player;
  }

  return gameBoard;
}

function getMatchResult(gameBoard) {
  for (const pattern of WIN_PATTERNS) {
    const [pos1, pos2, pos3] = pattern;
    const val1 = gameBoard[pos1[0]][pos1[1]];
    const val2 = gameBoard[pos2[0]][pos2[1]];
    const val3 = gameBoard[pos3[0]][pos3[1]];
    if (val1 && val1 === val2 && val2 === val3) {
      return val1;
    }
  }
}

function getCurrentPlayer(gameState) {
  if (gameState.length === 0) return 'X';
  let lastTurn = gameState[0];
  return lastTurn.player === 'X' ? 'O' : 'X';
}

function App() {
  const [gameState, setGameState] = useState([]);
  const [playerDetails, setPlayerDetails] = useState(INITIAL_PLAYER_DETAILS);

  const gameBoard = getGameBoard(gameState);
  const currentPlayer = getCurrentPlayer(gameState);
  const winner = getMatchResult(gameBoard, gameState);
  const hasDraw = !winner && gameState.length === 9;

  function handlePlayButtonClick(row, col) {
    setGameState((prevState) => {
      let currentPlayer = getCurrentPlayer(prevState);
      return [{ player: currentPlayer, row, col }, ...prevState];
    });
  }

  function resetGameBoard() {
    setGameState([]);
  }

  function savePlayerName(playerSymbol, newName) {
    setPlayerDetails((prevDetails) => {
      return {
        ...prevDetails,
        [playerSymbol]: newName
      };
    })
  }

  return (
    <>
      <main>
        <section className="game-board">
          <div className="player-details-container">
            <PlayerDetail initialPlayerName={playerDetails['X']} playerSymbol="X" isCurrentPlayer={currentPlayer === 'X'} savePlayerName={savePlayerName} />
            <PlayerDetail initialPlayerName={playerDetails['O']} playerSymbol="O" isCurrentPlayer={currentPlayer === 'O'} savePlayerName={savePlayerName} />
          </div>
          <GameBoard gameBoard={gameBoard} handlePlayButtonClick={handlePlayButtonClick} />
          { hasDraw || winner ? <GameResult onRematchClick={resetGameBoard} winner={playerDetails[winner]} /> : null }
        </section>
        <GameMoves gameState={gameState} />
      </main>
    </>
  )
}

export default App
