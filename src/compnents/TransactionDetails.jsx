import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function TransactionTable() {
  const { transactions, filter, setFilter } = useContext(AppContext);

  const filtered = transactions.filter((tx) =>
    tx.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="mt-6">
      <input
        placeholder="Search category..."
        className="border p-2 rounded mb-4 w-full"
        onChange={(e) => setFilter(e.target.value)}
      />

      <table className="w-full bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((tx) => (
            <tr key={tx.id} className="text-center border-t">
              <td className="p-2">{tx.date}</td>
              <td>₹{tx.amount}</td>
              <td>{tx.category}</td>
              <td className={tx.type === "income" ? "text-green-500" : "text-red-500"}>
                {tx.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}