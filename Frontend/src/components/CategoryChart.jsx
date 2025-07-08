import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042']

const CategoryChart = ({ transactions }) => {
  const data = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, curr) => {
      const found = acc.find(d => d.name === curr.category)
      if (found) found.value += curr.amount
      else acc.push({ name: curr.category, value: curr.amount })
      return acc
    }, [])

  return (
    <PieChart width={300} height={250}>
      <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} label>
        {data.map((entry, index) => (
          <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  )
}

export default CategoryChart
