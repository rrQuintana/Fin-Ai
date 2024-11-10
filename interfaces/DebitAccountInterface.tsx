export interface DebitAccountInterface {
    bankName: string;
    accountName: string;
    balance: string;
    color?: "green" | "yellow" | "red" | "blue" | "black" | "white" | "gray";
}


export interface DebitAccountProps {
    account: DebitAccountInterface;
    index: number;
  }