import { CreditCardInterface } from "./CreditCardInterface";
import { DebitAccountInterface } from "./DebitAccountInterface";
import { TransactionInterface } from "./TransactionInterface";
import {
  ExpenseCategoryInfo,
  ExpenseCategory,
  IncomeCategoryInfo,
  IncomeCategory,
} from "@src/types/ExpenseCategory";
import { sampleUser } from "./UserDataInterface";

export interface User {
  username: string;
  password?: string;
  name: string;
  phone_number: string;
}

export type SignUpParameters = {
  username: string;
  password: string;
  email: string;
  phone_number: string;
};

export interface ConfirmEmailProps {
  username?: string;
}

export interface userCreditInterface {
  usedCredit: string;
  creditLimit: string;
  monthlyIncome: string;
  currentExpenses: string;
}

export const userCredit = {
  monthlyIncome: sampleUser.monthlyIncome,
  usedCredit: sampleUser.creditCards
    .reduce((acc, card) => acc + (card.usedCredit ?? 0), 0)
    .toString(),
  creditLimit: sampleUser.creditCards
    .reduce((acc, card) => acc + (card.creditLimit ?? 0), 0)
    .toString(),
  currentExpenses: sampleUser.creditCards
    .reduce((acc, card) => acc + (card.usedCredit ?? 0), 0)
    .toString(),
};

export const sampleCards: CreditCardInterface[] = [
  {
    bankName: "Bank of America",
    type: "Credit",
    cardName: "Travel Rewards",
    creditLimit: 32000,
    statementClosingDate: 25,
    paymentDueDate: 15,
    transactions: [
      { name: "Apple Store", amount: 2000, type: "Expense", date: "2024-07-01", category: ExpenseCategoryInfo.ONLINE_SHOPPING },
      { name: "Best Buy", amount: 400, type: "Expense", date: "2024-07-02", category: ExpenseCategoryInfo.ONLINE_SHOPPING },
      { name: "Walmart", amount: 600, type: "Expense", date: "2024-07-03", category: ExpenseCategoryInfo.FOOD_AND_DRINKS },
      { name: "Airbnb", amount: 2500, type: "Expense", date: "2024-07-04", category: ExpenseCategoryInfo.TRAVEL_AND_VACATIONS },
      { name: "Uber", amount: 300, type: "Expense", date: "2024-07-05", category: ExpenseCategoryInfo.TRANSPORT_AND_VEHICLES },
      { name: "Pharmacy", amount: 150, type: "Expense", date: "2024-07-06", category: ExpenseCategoryInfo.HEALTH_AND_WELLNESS },
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
      { name: "Amazon", amount: 20000, type: "Expense", date: "2024-07-01", category: ExpenseCategoryInfo.ONLINE_SHOPPING },
      { name: "Uber", amount: 500, type: "Expense", date: "2024-07-02", category: ExpenseCategoryInfo.TRANSPORT_AND_VEHICLES },
      { name: "Cinema", amount: 100, type: "Expense", date: "2024-07-03", category: ExpenseCategoryInfo.LEISURE_AND_ENTERTAINMENT },
      { name: "Gym Membership", amount: 700, type: "Expense", date: "2024-07-04", category: ExpenseCategoryInfo.PERSONAL_CARE_AND_SPORTS },
      { name: "Netflix", amount: 200, type: "Expense", date: "2024-07-05", category: ExpenseCategoryInfo.SUBSCRIPTIONS_AND_SERVICES },
      { name: "Doctor Visit", amount: 1200, type: "Expense", date: "2024-07-06", category: ExpenseCategoryInfo.HEALTH_AND_WELLNESS },
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
      { name: "Starbucks", amount: 8000, type: "Expense", date: "2024-07-01", category: ExpenseCategoryInfo.ONLINE_SHOPPING },
      { name: "Best Buy", amount: 3000, type: "Expense", date: "2024-07-02", category: ExpenseCategoryInfo.ONLINE_SHOPPING },
      { name: "Hotel", amount: 6000, type: "Expense", date: "2024-07-03", category: ExpenseCategoryInfo.TRAVEL_AND_VACATIONS },
      { name: "Dining Out", amount: 1200, type: "Expense", date: "2024-07-04", category: ExpenseCategoryInfo.FOOD_AND_DRINKS },
      { name: "Museum", amount: 800, type: "Expense", date: "2024-07-05", category: ExpenseCategoryInfo.ART_AND_CULTURE },
      { name: "Airport Lounge", amount: 400, type: "Expense", date: "2024-07-06", category: ExpenseCategoryInfo.TRAVEL_AND_VACATIONS },
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
      { name: "Freelance", amount: 8000, type: "Income", date: "2024-07-01", category: IncomeCategoryInfo.SIDE_HUSTLES },
      { name: "Best Buy", amount: 3000, type: "Expense", date: "2024-08-02", category: ExpenseCategoryInfo.ONLINE_SHOPPING },
      { name: "Grocery Store", amount: 600, type: "Expense", date: "2024-07-03", category: ExpenseCategoryInfo.FOOD_AND_DRINKS },
      { name: "Gas Station", amount: 100, type: "Expense", date: "2024-07-04", category: ExpenseCategoryInfo.TRANSPORT_AND_VEHICLES },
      { name: "Utility Bill", amount: 400, type: "Expense", date: "2024-07-05", category: ExpenseCategoryInfo.HOUSING_AND_SERVICES },
      { name: "Gift Received", amount: 500, type: "Income", date: "2024-07-06", category: IncomeCategoryInfo.GIFTS },
    ],
  },
  {
    bankName: "Bank of America",
    accountName: "Savings",
    balance: 20000,
    transactions: [
      { name: "Amazon", amount: 1000, type: "Expense", date: "2024-08-01", category: ExpenseCategoryInfo.ONLINE_SHOPPING },
      { name: "Uber", amount: 500, type: "Expense", date: "2024-07-02", category: ExpenseCategoryInfo.TRANSPORT_AND_VEHICLES },
      { name: "Salary", amount: 12000, type: "Income", date: "2024-07-03", category: IncomeCategoryInfo.SALARY },
      { name: "Movie Rental", amount: 50, type: "Expense", date: "2024-08-04", category: ExpenseCategoryInfo.LEISURE_AND_ENTERTAINMENT },
      { name: "Insurance Payment", amount: 700, type: "Expense", date: "2024-07-05", category: ExpenseCategoryInfo.FINANCES },
      { name: "Dining Out", amount: 300, type: "Expense", date: "2024-07-06", category: ExpenseCategoryInfo.FOOD_AND_DRINKS },
    ],
  },
  {
    bankName: "Wells Fargo",
    accountName: "Checking",
    balance: 12300,
    color: "red",
    transactions: [
      { name: "Starbucks", amount: 50, type: "Expense", date: "2024-11-01", category: ExpenseCategoryInfo.ONLINE_SHOPPING },
      { name: "Best Buy", amount: 3000, type: "Expense", date: "2024-09-02", category: ExpenseCategoryInfo.ONLINE_SHOPPING },
      { name: "Freelance Project", amount: 5000, type: "Income", date: "2024-07-03", category: IncomeCategoryInfo.SIDE_HUSTLES },
      { name: "Electricity Bill", amount: 600, type: "Expense", date: "2024-07-04", category: ExpenseCategoryInfo.HOUSING_AND_SERVICES },
      { name: "Charity Donation", amount: 200, type: "Expense", date: "2024-07-05", category: ExpenseCategoryInfo.CHARITY_AND_VOLUNTEERING },
      { name: "Lunch", amount: 100, type: "Expense", date: "2024-07-06", category: ExpenseCategoryInfo.FOOD_AND_DRINKS },
    ],
  },
];
