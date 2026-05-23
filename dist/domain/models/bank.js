import { extractConstructorName } from "../../shared/utils.js";
export class bankAccount {
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
        }
    
        ( OU SEJA, USA O VALOR A DIREITA DEFINIDO SENÃO O DA ESQUERDA.)
    */
    deposit(value) {
        this.funds += value;
    }
    withdraw(value) {
        throw new Error('Method not implemented...');
    }
    toString() {
        return `account: [${this.accNumber}] [${extractConstructorName(this)}] ----------> funds: [${this.funds}]`;
    }
    ;
}
;
export class savingBankAccount extends bankAccount {
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
//# sourceMappingURL=bank.js.map