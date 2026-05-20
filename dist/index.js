"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os = require('os');
function loginInMemoryAcconts(account1, account2, account3) {
    console.log(account1.toString(), os.EOL + account2.toString(), os.EOL + account3.toString());
}
;
var bankaccountType;
(function (bankaccountType) {
    bankaccountType[bankaccountType["SAVING"] = 0] = "SAVING";
    bankaccountType[bankaccountType["CHECKING"] = 1] = "CHECKING";
})(bankaccountType || (bankaccountType = {}));
class bankAccount {
    accType; // readonly: não pode ser alterado, corrente e poupança.
    funds;
    accNumber;
    constructor(accType, accNumber, initialFunds = 0) {
        this.accType = accType;
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
    deposit(value) {
        this.funds += value;
    }
    withdraw(value) {
        if (this.accType === bankaccountType.SAVING && this.funds < value) {
            console.log(`Insufficient funds in account ${this.accNumber}. Withdrawal denied.`);
            return false;
        }
        else {
            this.funds -= value;
            return true;
        }
    }
    ;
    toString() {
        return `account: [${this.accNumber}] -------> funds: [${this.funds}]`;
    }
    ;
}
;
function main() {
    const account1 = new bankAccount(bankaccountType.SAVING, 1, 1000);
    const account2 = new bankAccount(bankaccountType.CHECKING, 2);
    const account3 = new bankAccount(bankaccountType.SAVING, 3, 40000);
    account1.withdraw(1500);
    account2.withdraw(2200);
    account3.deposit(30000);
    loginInMemoryAcconts(account1, account2, account3);
}
main();
//# sourceMappingURL=index.js.map