import { TransactionInterface } from "./TransactionInterface";
export interface DebitAccountInterface {
    bankName: string;
    accountName: string;
    balance: number;
    color?: "green" | "yellow" | "red" | "blue" | "black" | "white" | "gray";
    transactions?: TransactionInterface[];
}


export interface DebitAccountProps {
    account: DebitAccountInterface;
    index: number;
    onPress?: () => void;
  }