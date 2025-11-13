import { PieChart, Pie, Cell, Legend } from "recharts";

export default function PortfolioAllocationPieChart({ data }) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];
  console.log(data);
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius="50%"
        fill="#8884d8"
        paddingAngle={5}
        nameKey="assetName"
        dataKey="allocation"
        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
}
