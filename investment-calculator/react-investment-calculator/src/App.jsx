import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <main>
        <section className="user-input">
          <div className="input-group">
            <p>
              <label>Initial Investment</label>
              <input type="number" />
            </p>
            <p>
              <label>Annual Investment</label>
              <input type="number" />
            </p>
          </div>
          <div className="input-group">
            <p>
              <label>Expected Return</label>
              <input type="number" />
            </p>
            <p>
              <label>Duration in Years</label>
              <input type="number" />
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
            <tr>
              <td>1</td>
              <td>$2,060</td>
              <td>$60</td>
              <td>$60</td>
              <td>$2,000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>$3,184</td>
              <td>$124</td>
              <td>$184</td>
              <td>$3,000</td>
            </tr>
            <tr>
              <td>3</td>
              <td>$4,375</td>
              <td>$191</td>
              <td>$375</td>
              <td>$4,000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>$5,637</td>
              <td>$262</td>
              <td>$637</td>
              <td>$5,000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>$6,975</td>
              <td>$338</td>
              <td>$975</td>
              <td>$6000</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  )
}

export default App
