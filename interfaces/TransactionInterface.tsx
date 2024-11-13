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

export const sampleTransactions: TransactionInterface[] = [
  {
    name: "Amazon",
    amount: 100,
    type: "Expense",
    date: "2021-09-01",
    category: ExpenseCategoryInfo.ONLINE_SHOPPING,
  },
  {
    name: "Salario",
    amount: 1000,
    type: "Income",
    date: "2021-09-03",
    category: IncomeCategoryInfo.SALARY,
  },
  {
    name: "Freelance",
    amount: 500,
    type: "Income",
    date: "2021-09-03",
    category: IncomeCategoryInfo.SIDE_HUSTLES,
  },
  {
    name: "Uber",
    amount: 50,
    type: "Expense",
    date: "2021-09-02",
    category: ExpenseCategoryInfo.TRANSPORT_AND_VEHICLES,
  },
  {
    name: "Salario",
    amount: 1000,
    type: "Income",
    date: "2021-09-03",
    category: ExpenseCategoryInfo.SAVINGS_AND_INVESTMENT,
  },
  {
    name: "Spotify",
    amount: 10,
    type: "Expense",
    date: "2021-09-04",
    category: ExpenseCategoryInfo.SUBSCRIPTIONS_AND_SERVICES,
  },
  {
    name: "Netflix",
    amount: 150000,
    type: "Expense",
    date: "2021-09-05",
    category: ExpenseCategoryInfo.SUBSCRIPTIONS_AND_SERVICES,
  },
  {
    name: "Amazon",
    amount: 100,
    type: "Expense",
    date: "2021-09-01",
    category: ExpenseCategoryInfo.ONLINE_SHOPPING,
  },
];