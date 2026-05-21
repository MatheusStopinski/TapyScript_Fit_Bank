"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os = require('os');
function loginInMemoryObjects(...obj) {
    console.log('Logging in-memory objects:');
    const log = obj
        .map(x => x.toString())
        .join(os.EOL);
    console.log(log);
}
;
class bankAccount {
    funds;
    accNumber;
    constructor(accNumber, initialFunds = 0) {
        this.accNumber = accNumber;
        this.funds = initialFunds;
    }
    ;
    /* constructor------------PODE SER ASSIM TBM:
        constructor(accNumber: number, initialFunds?: number) {
            this.accNumber = accNumber;
            this.funds = initialFunds ?? 0;
            
            ( OU SEJA, USA O VALOR A DIREITA DEFINIDO SENÃO O DA ESQUERDA.)
        }
    */
    toLogEntry() {
        return this.toString();
    }
    deposit(value) {
        this.funds += value;
    }
    withdraw(value) {
        throw new Error('Method not implemented...');
    }
    toString() {
        return `account: [${this.accNumber}] -------> funds: [${this.funds}]`;
    }
    ;
}
;
function withOverdraft(Class) {
    return class extends Class {
        constructor(...args) {
            super(...args);
        }
        ;
        withdraw(value) {
            this.funds -= value;
            return true;
        }
        ;
    };
}
;
class savingBankAccount extends bankAccount {
    withdraw(value) {
        if (this.funds < value) {
            console.log(`Insufficient funds in account ${this.accNumber}. Withdrawal denied.`);
            return false;
        }
        else {
            this.funds -= value;
            return true;
        }
    }
    ;
}
;
const checkingBankAccount = withOverdraft(bankAccount);
function main() {
    const account1 = new savingBankAccount(1, 1000);
    const account2 = new checkingBankAccount(2);
    const account3 = new savingBankAccount(3, 40000);
    account1.withdraw(1500);
    account2.withdraw(2200);
    account3.deposit(30000);
    loginInMemoryObjects(account1, account2, account3);
}
main();
//# sourceMappingURL=index.js.map