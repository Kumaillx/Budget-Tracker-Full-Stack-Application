import { useState, useEffect } from 'react'
import axios from 'axios'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import Summary from './components/Summary'
import CategoryChart from './components/CategoryChart'

const App = () => {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/transactions')
      .then(res => setTransactions(res.data))
      .catch(err => console.error(err))
  }, [])

  const addTransaction = (data) => {
    axios.post('http://localhost:5000/api/transactions', data)
      .then(res => setTransactions([...transactions, res.data]))
      .catch(err => alert('Error adding transaction'))
  }

  const deleteTransaction = (id) => {
    axios.delete(`http://localhost:5000/api/transactions/${id}`)
      .then(() => setTransactions(transactions.filter(t => t.id !== id)))
      .catch(err => alert('Error deleting transaction'))
  }

  return (
    <div className="container">
      <h1>Budget Tracker</h1>
      <TransactionForm onAdd={addTransaction} />
      <Summary transactions={transactions} />
      <TransactionList transactions={transactions} onDelete={deleteTransaction} />
      <CategoryChart transactions={transactions} />
    </div>
  )
}

export default App

