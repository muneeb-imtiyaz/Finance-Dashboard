import { LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie } from "recharts";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Charts() {
  const { transactions } = useContext(AppContext);

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <LineChart width={300} height={200} data={transactions}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line dataKey="amount" />
      </LineChart>

      <PieChart width={300} height={200}>
        <Pie data={transactions} dataKey="amount" nameKey="category" />
      </PieChart>
    </div>
  );
}