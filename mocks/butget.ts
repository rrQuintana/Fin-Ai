export interface BudgetItem {
  title: string;
  limit: number;
  spent: number;
}

export const budgetItems = [
  {
    title: "Groceries",
    limit: 300,
    spent: 150,
    remaining: 150
  },
  {
    title: "Rent",
    limit: 1200,
    spent: 1200,
    remaining: 0
  },
  {
    title: "Utilities",
    limit: 200,
    spent: 75,
    remaining: 125
  },
  {
    title: "Transportation",
    limit: 100,
    spent: 40,
    remaining: 60
  },
  {
    title: "Entertainment",
    limit: 150,
    spent: 90,
    remaining: 60
  }
];
