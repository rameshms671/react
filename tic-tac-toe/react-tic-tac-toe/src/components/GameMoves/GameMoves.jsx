export default function GameMoves({ gameState }) {
  return (
    <section className="game-moves">
      <ul>
      {
        [...gameState].map((move, index) => (
          <li key={index}>{move.player} selected {move.row},{move.col}</li>
        ))
      }
      </ul>
    </section>
  );
}