const express = require('express');
const cors = require('cors');
const transactionsRoutes = require('./routes/transactions');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/transactions', transactionsRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
