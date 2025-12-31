import './App.css'

function App() {
  return (
    <>
      <div id="content">
        <header id="header">
          <h1>THE <em>ALMOST</em> FINAL COUNTDOWN</h1>
          <h2>Stop the timer once you estimate that time is (almost) up</h2>
        </header>
        <div id="player">
          <h2>Welcome unknown entity</h2>
          <div class="player-input-group">
            <input type='text' />
            <button>Set Name</button>
          </div>
        </div>
        <section id="challenges">
          <div class="challenge">
            <h2>easy</h2>
            <p class="time">1 second</p>
            <button>Start Challenge</button>
            <p>Timer inactive</p>
          </div>
          <div class="challenge">
            <h2>Not easy</h2>
            <p class="time">5 seconds</p>
            <button>Start Challenge</button>
            <p>Timer inactive</p>
          </div>
          <div class="challenge">
            <h2>Getting tough</h2>
            <p class="time">10 seconds</p>
            <button>Start Challenge</button>
            <p>Timer inactive</p>
          </div>
          <div class="challenge">
            <h2>Pros only</h2>
            <p class="time">15 seconds</p>
            <button>Start Challenge</button>
            <p>Timer inactive</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
