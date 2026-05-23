export declare class bankAccount {
    funds: number;
    accNumber: number;
    constructor(accNumber: number, initialFunds?: number);
    deposit(value: number): void;
    withdraw(value: number): boolean;
    toString(): string;
}
export declare class savingBankAccount extends bankAccount {
    withdraw(value: number): boolean;
}
//# sourceMappingURL=bank.d.ts.map