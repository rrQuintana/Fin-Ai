import { TransactionInterface } from "./TransactionInterface";

export interface CreditCardInterface {
  bankName: string;
  creditLimit?: number;
  cardName: string;
  type: "Credit" | "Charge";
  usedCredit: number;
  statementClosingDate: number;
  paymentDueDate: number;
  color?: "green" | "yellow" | "red" | "blue" | "black" | "white" | "gray";
  transactions: TransactionInterface[];
}

export interface CreditCardProps {
  card: CreditCardInterface;
  index: number;
  onPress?: () => void;
}

export const MonthDays = [
  { label: "1st", value: 1 },
  { label: "2nd", value: 2 },
  { label: "3rd", value: 3 },
  { label: "4th", value: 4 },
  { label: "5th", value: 5 },
  { label: "6th", value: 6 },
  { label: "7th", value: 7 },
  { label: "8th", value: 8 },
  { label: "9th", value: 9 },
  { label: "10th", value: 10 },
  { label: "11th", value: 11 },
  { label: "12th", value: 12 },
  { label: "13th", value: 13 },
  { label: "14th", value: 14 },
  { label: "15th", value: 15 },
  { label: "16th", value: 16 },
  { label: "17th", value: 17 },
  { label: "18th", value: 18 },
  { label: "19th", value: 19 },
  { label: "20th", value: 20 },
  { label: "21st", value: 21 },
  { label: "22nd", value: 22 },
  { label: "23rd", value: 23 },
  { label: "24th", value: 24 },
  { label: "25th", value: 25 },
  { label: "26th", value: 26 },
  { label: "27th", value: 27 },
  { label: "28th", value: 28 },
  { label: "29th", value: 29 },
  { label: "30th", value: 30 },
  { label: "31st", value: 31 },
];

export const ColorOptions = [
  { label: "Black", value: "black" },
  { label: "White", value: "white" },
  { label: "Blue", value: "blue" },
  { label: "Green", value: "green" },
  { label: "Yellow", value: "yellow" },
  { label: "Red", value: "red" },
  { label: "Gray", value: "gray" },
];
