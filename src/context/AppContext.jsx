import { createContext, useState } from "react";
import { transactions as mockData } from "../data/MockData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(mockData);
  const [role, setRole] = useState("viewer");
  const [filter, setFilter] = useState("");

  const addTransaction = (tx) => {
    setTransactions([...transactions, { ...tx, id: Date.now() }]);
  };

  return (
    <AppContext.Provider value={{ transactions, role, setRole, filter, setFilter, addTransaction }}>
      {children}
    </AppContext.Provider>
  );
};