export default function GameMoves({ gameState }) {
  return (
    <section className="game-moves">
      <ul>
      {
        [...gameState].map((move, index) => (
          <li key={`${move.row}-${move.col}`}>{move.player} selected {move.row},{move.col}</li>
        ))
      }
      </ul>
    </section>
  );
}