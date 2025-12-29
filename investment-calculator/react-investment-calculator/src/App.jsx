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
        <Returns userInput={userInput} />
      </main>
    </>
  )
}

export default App
