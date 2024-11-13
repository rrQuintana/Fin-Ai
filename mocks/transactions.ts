import { ExpenseCategory, ExpenseCategoryInfo } from "@src/types/ExpenseCategory";

export interface Transaction {
  name: string;
  amount: number;
  type: string;
  date: string;
  category: {
    name: string;
    icon: string;
  };
}

export const transactions_mock: Transaction[] = [
  {
    name: "Amazon",
    amount: 100,
    type: "Gasto",
    date: "2024-11-01",
    category: ExpenseCategoryInfo[ExpenseCategory.ONLINE_SHOPPING],
  },
  {
    name: "H&M",
    amount: 1200,
    type: "Gasto",
    date: "2024-11-01",
    category: ExpenseCategoryInfo[ExpenseCategory.CLOTHING_AND_ACCESSORIES],
  },
  {
    name: "Uber",
    amount: 50,
    type: "Gasto",
    date: "2024-11-20",
    category: ExpenseCategoryInfo[ExpenseCategory.TRANSPORT_AND_VEHICLES],
  },
  {
    name: "Salario",
    amount: 1000,
    type: "Ingreso",
    date: "2024-11-03",
    category: ExpenseCategoryInfo[ExpenseCategory.SAVINGS_AND_INVESTMENT],
  },
  {
    name: "Spotify",
    amount: 10,
    type: "Gasto",
    date: "2024-11-04",
    category: ExpenseCategoryInfo[ExpenseCategory.SUBSCRIPTIONS_AND_SERVICES],
  },
  {
    name: "Netflix",
    amount: 150000,
    type: "Gasto",
    date: "2024-11-05",
    category: ExpenseCategoryInfo[ExpenseCategory.SUBSCRIPTIONS_AND_SERVICES],
  },
  {
    name: "Amazon",
    amount: 100,
    type: "Gasto",
    date: "2024-11-01",
    category: ExpenseCategoryInfo[ExpenseCategory.ONLINE_SHOPPING],
  },
  {
    name: "Uber",
    amount: 50,
    type: "Gasto",
    date: "2024-11-20",
    category: ExpenseCategoryInfo[ExpenseCategory.TRANSPORT_AND_VEHICLES],
  },
  {
    name: "Salario",
    amount: 1000,
    type: "Ingreso",
    date: "2024-11-03",
    category: ExpenseCategoryInfo[ExpenseCategory.SAVINGS_AND_INVESTMENT],
  },
  {
    name: "Spotify",
    amount: 10,
    type: "Gasto",
    date: "2024-11-04",
    category: ExpenseCategoryInfo[ExpenseCategory.SUBSCRIPTIONS_AND_SERVICES],
  },
  {
    name: "Netflix",
    amount: 15,
    type: "Gasto",
    date: "2024-11-05",
    category: ExpenseCategoryInfo[ExpenseCategory.SUBSCRIPTIONS_AND_SERVICES],
  },
  {
    name: "Amazon",
    amount: 100,
    type: "Gasto",
    date: "2024-11-01",
    category: ExpenseCategoryInfo[ExpenseCategory.ONLINE_SHOPPING],
  },
  {
    name: "Uber",
    amount: 50,
    type: "Gasto",
    date: "2024-11-20",
    category: ExpenseCategoryInfo[ExpenseCategory.TRANSPORT_AND_VEHICLES],
  },
  {
    name: "Salario",
    amount: 1000,
    type: "Ingreso",
    date: "2024-11-03",
    category: ExpenseCategoryInfo[ExpenseCategory.SAVINGS_AND_INVESTMENT],
  },
  {
    name: "Spotify",
    amount: 10,
    type: "Gasto",
    date: "2024-11-04",
    category: ExpenseCategoryInfo[ExpenseCategory.SUBSCRIPTIONS_AND_SERVICES],
  },
  {
    name: "Netflix",
    amount: 15,
    type: "Gasto",
    date: "2024-11-05",
    category: ExpenseCategoryInfo[ExpenseCategory.SUBSCRIPTIONS_AND_SERVICES],
  },
];