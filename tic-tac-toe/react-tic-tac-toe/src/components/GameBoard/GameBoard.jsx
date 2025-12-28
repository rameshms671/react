export default function GamePlay({ gameBoard, handlePlayButtonClick }) {
  
  return (
    <div className="play-buttons">
      {
        gameBoard.map((gameRow, row) => 
          gameRow.map((gameCol, col) => 
             <button onClick={() => handlePlayButtonClick(row, col)} disabled={gameBoard[row][col] !== ''}>
              { 
                gameBoard[row][col]
              }
             </button>
          )
        )
      }
    </div>
  );
}