import type { logyEntry } from "../../shared/logging.js";
import { bankAccount, savingBankAccount } from "./bank.js";
type banckAccountCronstructors<T> = new (...args: any[]) => T;
export declare function withOverdraft<C extends banckAccountCronstructors<bankAccount>>(Class: C): {
    new (...args: any[]): {
        withdraw(value: number): boolean;
        funds: number;
        accNumber: number;
        deposit(value: number): void;
        toString(): string;
    };
} & C;
export declare function withLogging<C extends banckAccountCronstructors<bankAccount>>(Class: C): {
    new (...args: any[]): {
        toLogEntry(): logyEntry;
        funds: number;
        accNumber: number;
        deposit(value: number): void;
        withdraw(value: number): boolean;
        toString(): string;
    };
} & C;
export declare const checkingBankAccount: {
    new (...args: any[]): {
        toLogEntry(): logyEntry;
        funds: number;
        accNumber: number;
        deposit(value: number): void;
        withdraw(value: number): boolean;
        toString(): string;
    };
} & {
    new (...args: any[]): {
        withdraw(value: number): boolean;
        funds: number;
        accNumber: number;
        deposit(value: number): void;
        toString(): string;
    };
} & typeof bankAccount;
export declare const savingBankAccountWithLogging: {
    new (...args: any[]): {
        toLogEntry(): logyEntry;
        funds: number;
        accNumber: number;
        deposit(value: number): void;
        withdraw(value: number): boolean;
        toString(): string;
    };
} & typeof savingBankAccount;
export {};
//# sourceMappingURL=bank.extensions.d.ts.map