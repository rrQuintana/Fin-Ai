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
    usedCredit: "$30,250",
    creditLimit: "$120,000",
    monthlyIncome: "80,000",
    currentExpenses: "32,000",
};