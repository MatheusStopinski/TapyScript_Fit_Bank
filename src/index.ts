const os = require('os');

function loginInMemoryAcconts(account1: bankAccount, account2: bankAccount, account3: bankAccount) {
    console.log(account1.toString(), os.EOL + account2.toString(), os.EOL + account3.toString());
};

enum bankaccountType {
    'SAVING',
    'CHECKING'
}

class bankAccount {
    readonly accType: bankaccountType; // readonly: não pode ser alterado, corrente e poupança.
    funds: number;
    accNumber: number; 


    constructor(accType: bankaccountType, accNumber: number, initialFunds: number = 0) {
        this.accType = accType;
        this.accNumber = accNumber;
        this.funds = initialFunds;
};

/* constructor------------PODE SER ASSIM TBM:
    constructor(accNumber: number, initialFunds?: number) {
        this.accNumber = accNumber;
        this.funds = initialFunds ?? 0; 
        
        ( OU SEJA, USA O VALOR A DIREITA DEFINIDO SENÃO O DA ESQUERDA.)
    }
*/

    deposit(value: number) {
        this.funds += value;
}

    withdraw(value: number): boolean {
        if (this.accType === bankaccountType.SAVING && this.funds < value) {
            console.log(`Insufficient funds in account ${this.accNumber}. Withdrawal denied.`);
            return false;    
        } else {
            this.funds -= value;
            return true;
        }
    };

    toString() {
        return `account: [${this.accNumber}] -------> funds: [${this.funds}]`;
    };

};

function main() {
    const account1 = new bankAccount(bankaccountType.SAVING, 1, 1000);
    const account2 = new bankAccount(bankaccountType.CHECKING, 2);
    const account3 = new bankAccount(bankaccountType.SAVING, 3, 40000);

    account1.withdraw(1500);
    account2.withdraw(2200);
    account3.deposit(30000);

    loginInMemoryAcconts(account1, account2, account3); 
}

main ()