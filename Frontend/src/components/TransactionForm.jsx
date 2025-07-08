import React, { useState } from 'react'

const TransactionForm = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [type, setType] = useState('expense')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd({
      title,
      amount: parseFloat(amount),
      category,
      type
    })
    setTitle('')
    setAmount('')
    setCategory('')
    setType('expense')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} required />
      <input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
      <div>
        <label><input type="radio" value="income" checked={type === 'income'} onChange={e => setType(e.target.value)} /> Income</label>
        <label><input type="radio" value="expense" checked={type === 'expense'} onChange={e => setType(e.target.value)} /> Expense</label>
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  )
}

export default TransactionForm
