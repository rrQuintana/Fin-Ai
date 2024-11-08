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