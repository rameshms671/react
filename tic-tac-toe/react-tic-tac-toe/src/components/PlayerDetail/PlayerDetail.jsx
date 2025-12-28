import { useState } from "react";

export default function PlayerDetail({ initialPlayerName, playerSymbol, isCurrentPlayer, savePlayerName }) {
  const [isEditable, setIsEditable] = useState(false);
  const [playerName, setPlayerName] = useState(initialPlayerName);

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function handleEditButtonClick(playerSymbol, newName){
    setIsEditable((isEditable) => !isEditable)

    if(isEditable){
      savePlayerName(playerSymbol, newName)
    }
  }

  return (
    <div className={isCurrentPlayer ? 'player-details active' : 'player-details'}>
      {isEditable &&
        (
          <input type="text" value={playerName} onChange={handleChange} />
        )
      }
      {!isEditable &&
        (
          <p className="player-name">{playerName}</p>
        )
      }
      <p className="player-symbol">{playerSymbol}</p>
      <button onClick={() => handleEditButtonClick(playerSymbol, playerName)}>
        {isEditable ? 'Save' : 'Edit'}
      </button>
    </div>
  );
}