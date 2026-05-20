const os = require('os');

function loginInMemoryAcconts(account1: bankAccount, account2: bankAccount, account3: bankAccount) {
    console.log(account1.tostring(), os.EOL + account2.tostring(), os.EOL + account3.tostring());
};

class bankAccount {
    accType: string;
    accNumber: number;
    funds: number;

    constructor(accType: 'SAVING' | 'CHECKING', accNumber: number, initialFunds: number = 0) {
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
        if (this.accType === "SAVING" && this.funds < value) {
            console.log(`Insufficient funds in account ${this.accNumber}. Withdrawal denied.`);
            return false;    
        } else {
            this.funds -= value;
            return true;
        }
    };

    tostring() {
        return `account: [${this.accNumber}] -------> funds: [${this.funds}]`;
    };

};

function main() {
    const account1 = new bankAccount('SAVING', 1, 1000);
    const account2 = new bankAccount('CHECKING', 2);
    const account3 = new bankAccount('SAVING', 3, 40000);

    account1.withdraw(1500);
    account2.withdraw(2200);
    account3.deposit(30000);

    loginInMemoryAcconts(account1, account2, account3); 
}

main ()