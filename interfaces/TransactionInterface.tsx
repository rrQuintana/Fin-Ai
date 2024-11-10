import {
  ExpenseCategoryInfo,
  ExpenseCategory,
  IncomeCategoryInfo,
  IncomeCategory,
} from "@src/types/ExpenseCategory";

export interface TransactionInterface {
  name: string;
  amount: number;
  type: "Expense" | "Income";
  date: string;
  category: { name: string; icon: string };
}

export interface TransactionProps {
  expense: TransactionInterface;
  index: number;
}
