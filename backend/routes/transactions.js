const express = require('express');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

let transactions = [];

// GET all
router.get('/', (req, res) => {
  res.json(transactions);
});

// POST new
router.post('/', (req, res) => {
  const { title, amount, category, type } = req.body;

  if (!title || typeof amount !== 'number' || amount <= 0 || !['income', 'expense'].includes(type)) {
    return res.status(400).json({ message: 'Invalid transaction data' });
  }

  const newTransaction = {
    id: uuidv4(),
    title,
    amount,
    category,
    type,
    date: new Date().toISOString(),
  };

  transactions.push(newTransaction);
  res.status(201).json(newTransaction);
});

// DELETE by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  transactions = transactions.filter(tx => tx.id !== id);
  res.status(200).json({ message: 'Transaction deleted' });
});

module.exports = router;
