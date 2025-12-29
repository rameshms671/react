import { useState } from 'react'
import './App.css'

import UserInput from './components/UserInput/UserInput';
import Returns from './components/Returns/returns';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const isValidInput = Object.values(userInput).every(value => value >= 0);

  function handleChange(inputProperty, value){
    setUserInput((prevUserInput) => (
      {
        ...prevUserInput,
        [inputProperty]: value
      }
    ))
  }

  return (
    <>
      <main>
        <UserInput userInput={userInput} handleChange={handleChange} />
        { !isValidInput && <p className="error-text">Please enter valid (non-negative) values.</p> }
        { isValidInput && <Returns userInput={userInput} /> }
      </main>
    </>
  )
}

export default App
