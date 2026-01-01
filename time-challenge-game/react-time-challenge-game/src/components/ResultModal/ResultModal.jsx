import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, resetChallenge }, ref) {
  const dialog = useRef(null);

  useImperativeHandle(ref, () => ({
    open: () => dialog.current.showModal(),
    close: () => dialog.current.close()
  }));

  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100).toFixed(0);

  return (
    <dialog ref={dialog} className="result-modal">
      <div>
        <h2>{remainingTime <= 0 ? 'You lost' : `Your score: ${score}`}</h2>
        <p>The target time was <strong>{targetTime} seconds</strong></p>
        <p>You stopped the timer with <strong>{remainingTime / 1000} seconds left</strong></p>
        <form method="dialog" onSubmit={resetChallenge}>
          <button>Close</button>
        </form>
      </div>
    </dialog>
  )
});

export default ResultModal;