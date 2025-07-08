const Summary = ({ transactions }) => {
  const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0)
  const expense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0)
  const balance = income - expense

  return (
    <div>
      <h3>Summary</h3>
      <p>Total Income: ${income}</p>
      <p>Total Expenses: ${expense}</p>
      <p>Balance: ${balance}</p>
    </div>
  )
}

export default Summary
