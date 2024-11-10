export interface CreditCardInterface {
    bankName: string;
    creditLimit?: number;
    cardName: string;
    type: "Credit" | "Charge";
    usedCredit: number;
    statementClosingDate: number;
    paymentDueDate: number;
    color?: "green" | "yellow" | "red" | "blue" | "black" | "white" | "gray";
}


export interface CreditCardProps {
    card: CreditCardInterface;
    index: number;
  }