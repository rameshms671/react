import Player from './components/Player/Player'
import Challenge from './components/Challenge/Challenge'
import './App.css'

function App() {
  return (
    <>
      <div id="content">
        <header id="header">
          <h1>THE <em>ALMOST</em> FINAL COUNTDOWN</h1>
          <h2>Stop the timer once you estimate that time is (almost) up</h2>
        </header>
        <Player />
        <section id="challenges">
          <Challenge title="easy" targetTime={1}/>
          <Challenge title="not easy" targetTime={5}/>
          <Challenge title="getting tough" targetTime={10}/>
          <Challenge title="pros only" targetTime={15}/>
        </section>
      </div>
    </>
  )
}

export default App
