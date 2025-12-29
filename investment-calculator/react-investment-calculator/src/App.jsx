import { useState } from 'react'
import './App.css'
import { calculateInvestmentResults, formatter } from './util/investment'

function App() {

  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  const annualData = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  let totalInterest = 0;
  let totalInvestment = initialInvestment;
  const computedAnnualData = annualData.map(data => {
    totalInterest+=data.interest,
    totalInvestment+=annualInvestment
    return {
      ...data,
      totalInterest,
      totalInvestment
    }
  })

  return (
    <>
      <main>
        <section className="user-input">
          <div className="input-group">
            <p>
              <label>Initial Investment</label>
              <input type="number" value={initialInvestment} onChange={e => setInitialInvestment(+e.target.value)} />
            </p>
            <p>
              <label>Annual Investment</label>
              <input type="number" value={annualInvestment} onChange={e => setAnnualInvestment(+e.target.value)} />
            </p>
          </div>
          <div className="input-group">
            <p>
              <label>Expected Return</label>
              <input type="number" value={expectedReturn} onChange={e => setExpectedReturn(+e.target.value)} />
            </p>
            <p>
              <label>Duration in Years</label>
              <input type="number" value={duration} onChange={e => setDuration(+e.target.value)} />
            </p>
          </div>
        </section>
        <table className="returns">
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {
              computedAnnualData.map((data) => (
                <tr>
                  <td>{data.year}</td>
                  <td>{formatter.format(data.valueEndOfYear)}</td>
                  <td>{formatter.format(data.interest)}</td>
                  <td>{formatter.format(data.totalInterest)}</td>
                  <td>{formatter.format(data.totalInvestment)}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </main>
    </>
  )
}

export default App
