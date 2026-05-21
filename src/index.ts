const os = require('os');

function loginInMemoryAcconts(account1: bankAccount, account2: bankAccount, account3: bankAccount) {
    console.log(account1.toString(), os.EOL + account2.toString(), os.EOL + account3.toString());
};

class bankAccount {
    funds: number;
    accNumber: number; 


    constructor(accNumber: number, initialFunds: number = 0) {
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
        this.funds -= value;
            return true;
    };

    toString() {
        return `account: [${this.accNumber}] -------> funds: [${this.funds}]`;
    };
};

class checkingBankAccount extends bankAccount {
    constructor(accNumber: number, initialFunds: number = 0) {
        super(accNumber, initialFunds);
    }
};   

class savingBankAccount extends bankAccount { 
    withdraw(value: number): boolean {
    if (this.funds < value) {
            console.log(`Insufficient funds in account ${this.accNumber}. Withdrawal denied.`);
            return false;    
        } else {
            return super.withdraw(value);
        }
};
};

function main() {
    const account1 = new savingBankAccount(1, 1000);
    const account2 = new checkingBankAccount(2);
    const account3 = new savingBankAccount(3, 40000);

    account1.withdraw(1500);
    account2.withdraw(2200);
    account3.deposit(30000);

    loginInMemoryAcconts(account1, account2, account3); 
}

main ()