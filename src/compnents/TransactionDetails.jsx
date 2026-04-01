import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function TransactionDetails() {
  const { transactions, filter, setFilter } = useContext(AppContext);

  const sortedTransaction = transactions.filter((resource) =>
    resource.category.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className="mt-6 p-4 rounded shadow">
      <input
        placeholder="Search category..."
        className="border p-2 rounded mb-4 w-full bg-slate-300"
        onChange={(event) => setFilter(event.target.value)}
      />

      <table className="w-full bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-gray-100 ">
            <th className="p-2">Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {
          sortedTransaction.map((resource) => (
            <tr key={resource.id} className="text-center border-t capitalize">
              <td className="p-2">{resource.date}</td>
              <td>₹{resource.amount}</td>
              <td>{resource.category}</td>
              <td
                className={
                  resource.type === "income" ? "text-green-500" : "text-red-500"
                }
              >
                {resource.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
