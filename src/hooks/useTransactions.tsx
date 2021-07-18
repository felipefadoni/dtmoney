import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { api } from "../services/api";

interface TransactionsProviderProps {
  children: ReactNode[];
}

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInputProps = Omit<TransactionProps, "id" | "createdAt">;

interface TransactionContextProps {
  transactions: TransactionProps[];
  createTransaction: (transactionInput: TransactionInputProps) => Promise<void>;
}

const TransactionContext = createContext<TransactionContextProps>(
  {} as TransactionContextProps
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  async function createTransaction(transactionInput: TransactionInputProps) {
    const response = await api.post("transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  }

  useEffect(() => {
    api.get("transactions").then((response) => {
      setTransactions(response.data.transactions);
    });
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext);

  return context;
}
