export default function GameResult({ onRematchClick, winner}){
  return (
    <div className="game-result">
      <h2>Game Over!</h2>
      <p>
        {winner && winner !== 'No one' ? `${winner} won!` : 'It\'s a draw!'}
      </p>
      <button onClick={onRematchClick}>Rematch!</button>
    </div>
  );
}