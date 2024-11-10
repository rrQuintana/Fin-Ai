export interface CreditCardInterface {
    bankName: string;
    creditLimit: string;
    cardName: string;
    type: string;
    usedCredit: string;
    statementClosingDate: number;
    paymentDueDate: number;
    color?: "green" | "yellow" | "red" | "blue" | "black" | "white" | "gray";
}


export interface CreditCardProps {
    card: CreditCardInterface;
    index: number;
  }