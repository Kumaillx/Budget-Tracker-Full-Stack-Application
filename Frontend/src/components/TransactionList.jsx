const TransactionList = ({ transactions, onDelete }) => (
  <ul>
    {transactions.map(t => (
      <li key={t.id}>
        {t.title} - ${t.amount} ({t.category}) [{t.type}]
        <button onClick={() => onDelete(t.id)}>Delete</button>
      </li>
    ))}
  </ul>
)

export default TransactionList
// This component displays a list of transactions.