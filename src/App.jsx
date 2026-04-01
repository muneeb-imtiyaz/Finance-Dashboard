import { useContext } from "react";
import { AppProvider, AppContext } from "./context/AppContext";
import SummaryCard from "./compnents/SummaryCard";
import Charts from "./compnents/Charts";
import TransactionTable from "./compnents/TransactionDetails";
import RoleSwitcher from "./compnents/RoleSwitcher";
import Insights from "./compnents/Insights";

function Dashboard() {
  const { transactions } = useContext(AppContext);

  const income = transactions.filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions.filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Finance Dashboard</h1>
        <RoleSwitcher />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Balance" value={income - expense} />
        <SummaryCard title="Income" value={income} />
        <SummaryCard title="Expenses" value={expense} />
      </div>

      <div className="mt-6">
        <Charts />
      </div>

      <Insights />
      <TransactionTable />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Dashboard />
    </AppProvider>
  );
}