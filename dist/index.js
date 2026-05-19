"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class bankAccount {
    accNumber;
    funds;
    constructor(accNumber, initialFunds = 0) {
        this.accNumber = accNumber;
        this.funds = initialFunds;
    }
    ;
}
function main() {
    const account1 = new bankAccount(1, 1000);
    const account2 = new bankAccount(2);
    const account3 = new bankAccount(3, 40000);
    console.log(account1);
    console.log(account2);
    console.log(account3);
}
main();
//# sourceMappingURL=index.js.map