import { useRef, useState } from "react";
import ResultModal from "../ResultModal/ResultModal";

export default function Challenge({ title, targetTime }) {
  const timer = useRef(null);
  const dialog = useRef(null);

  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
  const isTimerActive = remainingTime > 0 && remainingTime < targetTime * 1000;

  if (remainingTime <= 0) {
    handleStopChallenge();
  }

  function handleStartChallenge() {
    timer.current = setInterval(() => {
      setRemainingTime(time => time - 10);
    }, 10);
  }

  function handleStopChallenge() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  function resetChallenge() {
    setRemainingTime(targetTime * 1000);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} remainingTime={remainingTime} resetChallenge={resetChallenge} />
      <div className="challenge">
        <h2>{title}</h2>
        <p className="time">{targetTime} second{targetTime > 1 && 's'}</p>
        <button onClick={isTimerActive ? handleStopChallenge : handleStartChallenge}>
          {isTimerActive ? 'Stop Challenge' : 'Start Challenge'}
        </button>
        <p>{isTimerActive ? 'Timer is running...' : 'Timer inactive'}</p>
      </div>
    </>
  );
}