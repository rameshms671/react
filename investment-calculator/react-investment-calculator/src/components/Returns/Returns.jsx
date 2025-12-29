import { calculateInvestmentResults, formatter } from '../../util/investment'

export default function Returns({userInput}) {
  const annualData = calculateInvestmentResults(userInput);

  let totalInterest = 0;
  let totalInvestment = userInput.initialInvestment;
  const computedAnnualData = annualData.map(data => {
    totalInterest += data.interest,
      totalInvestment += userInput.annualInvestment
    return {
      ...data,
      totalInterest,
      totalInvestment
    }
  })

  return (
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
  );
}