import { User } from './userInterface';
import { CreditCardInterface } from './CreditCardInterface';
import { DebitAccountInterface } from './DebitAccountInterface';

export interface UserData {
    username: string;
    monthlyIncome: "80,000",
    creditCards: CreditCardInterface[];
    debitAccounts: DebitAccountInterface[];
}