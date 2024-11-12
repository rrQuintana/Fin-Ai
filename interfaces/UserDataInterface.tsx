import { User } from "./userInterface";
import { CreditCardInterface } from "./CreditCardInterface";
import { DebitAccountInterface } from "./DebitAccountInterface";
import { TransactionInterface } from "./TransactionInterface";
import {
  ExpenseCategoryInfo,
  ExpenseCategory,
  IncomeCategoryInfo,
  IncomeCategory,
} from "@src/types/ExpenseCategory";
import { useUser } from "@hooks/useUser";

const username = "User";

export interface UserData {
  username: string;
  monthlyIncome: string;
  creditCards: CreditCardInterface[];
  debitAccounts: DebitAccountInterface[];
}

export const sampleCards: CreditCardInterface[] = [
    {
      bankName: "Bank of America",
      type: "Credit",
      cardName: "Travel Rewards",
      creditLimit: 32000,
      statementClosingDate: 25,
      paymentDueDate: 15,
      transactions: [
        {
          name: "Apple Store",
          amount: 2000,
          type: "Expense",
          date: "2021-07-01",
          category: ExpenseCategoryInfo.ONLINE_SHOPPING,
        },
        {
          name: "Best Buy",
          amount: 400,
          type: "Expense",
          date: "2021-07-02",
          category: ExpenseCategoryInfo.ONLINE_SHOPPING,
        },
      ],
      get usedCredit() {
        return this.transactions?.reduce((acc, transaction) => acc + transaction.amount, 0) ?? 0;
      },
    },
    {
      bankName: "Chase",
      type: "Credit",
      cardName: "Freedom Unlimited",
      creditLimit: 55000,
      statementClosingDate: 20,
      paymentDueDate: 10,
      color: "blue",
      transactions: [
        {
          name: "Amazon",
          amount: 20000,
          type: "Expense",
          date: "2021-07-01",
          category: ExpenseCategoryInfo.ONLINE_SHOPPING,
        },
        {
          name: "Uber",
          amount: 500,
          type: "Expense",
          date: "2021-07-02",
          category: ExpenseCategoryInfo.TRANSPORT_AND_VEHICLES,
        },
      ],
      get usedCredit() {
        return this.transactions?.reduce((acc, transaction) => acc + transaction.amount, 0) ?? 0;
      },
    },
    {
      bankName: "American Express",
      type: "Charge",
      cardName: "Platinum Card",
      statementClosingDate: 29,
      paymentDueDate: 9,
      color: "gray",
      transactions: [
        {
          name: "Starbucks",
          amount: 8000,
          type: "Expense",
          date: "2021-07-01",
          category: ExpenseCategoryInfo.ONLINE_SHOPPING,
        },
        {
          name: "Best Buy",
          amount: 3000,
          type: "Expense",
          date: "2021-07-02",
          category: ExpenseCategoryInfo.ONLINE_SHOPPING,
        },
      ],
      get usedCredit() {
        return this.transactions?.reduce((acc, transaction) => acc + transaction.amount, 0) ?? 0;
      },
    },
  ];
export const sampleAccounts: DebitAccountInterface[] = [
  {
    bankName: "Chase",
    accountName: "Checking",
    balance: 14000,
    color: "blue",
    transactions: [
      {
        name: "Apple Store",
        amount: 2000,
        type: "Expense",
        date: "2021-07-01",
        category: ExpenseCategoryInfo.ONLINE_SHOPPING,
      },
      {
        name: "Best Buy",
        amount: 3000,
        type: "Expense",
        date: "2021-07-02",
        category: ExpenseCategoryInfo.ONLINE_SHOPPING,
      },
    ],
  },
  {
    bankName: "Bank of America",
    accountName: "Savings",
    balance: 20000,
    transactions: [
      {
        name: "Amazon",
        amount: 1000,
        type: "Expense",
        date: "2021-07-01",
        category: ExpenseCategoryInfo.ONLINE_SHOPPING,
      },
      {
        name: "Uber",
        amount: 500,
        type: "Expense",
        date: "2021-07-02",
        category: ExpenseCategoryInfo.TRANSPORT_AND_VEHICLES,
      },
    ],
  },
  {
    bankName: "Wells Fargo",
    accountName: "Checking",
    balance: 12300,
    color: "red",
    transactions: [
      {
        name: "Starbucks",
        amount: 80,
        type: "Expense",
        date: "2021-07-01",
        category: ExpenseCategoryInfo.ONLINE_SHOPPING,
      },
      {
        name: "Best Buy",
        amount: 3000,
        type: "Expense",
        date: "2021-07-02",
        category: ExpenseCategoryInfo.ONLINE_SHOPPING,
      },
    ],
  },
];

export const sampleUser: UserData = {
  username: username,
  monthlyIncome: "60000",
  creditCards: sampleCards,
  debitAccounts: sampleAccounts,
};
