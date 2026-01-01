import { useRef, useState } from "react";

export default function Player() {
  const [ playerName, setPlayerName ] = useState();
  const playerNameInput = useRef();

  function handleSetName() {
    setPlayerName(playerNameInput.current.value);
    playerNameInput.current.value = '';
  }

  return (
    <div id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <div className="player-input-group">
        <input ref={playerNameInput} type='text' />
        <button onClick={handleSetName}>Set Name</button>
      </div>
    </div>
  );
}