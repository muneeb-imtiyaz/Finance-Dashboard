import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Insights() {
  const { transactions } = useContext(AppContext);

  const expenses = transactions.filter((transaction) => transaction.type === "expense");

  const highest = expenses.reduce(
    (max, transaction) => (transaction.amount > (max?.amount || 0) ? transaction : max),
    {}
  );

  return (
    <div className="bg-white p-4 rounded shadow mt-6">
      <h2 className="font-bold mb-2">Insights</h2>
      <p>
        Highest Spending: {highest?.category} (₹{highest?.amount || 0})
      </p>
    </div>
  );
}