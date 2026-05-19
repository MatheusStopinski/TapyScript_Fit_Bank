class bankAccount {
    accNumber: number;
    funds: number;

    constructor(accNumber: number, initialFunds: number = 0) {
        this.accNumber = accNumber;
        this.funds = initialFunds;
    };

/* ------------------------PODE SER ASSIM TBM:
    constructor(accNumber: number, initialFunds?: number) {
        this.accNumber = accNumber;
        this.funds = initialFunds ?? 0; 
        
        ( OU SEJA, USA O VALOR A DIREITA DEFINIDO SENÃO O DA ESQUERDA.)
    }
*/

}

function main() {
    const account1 = new bankAccount(1, 1000);
    const account2 = new bankAccount(2);
    const account3 = new bankAccount(3, 40000);

    console.log(account1);
    console.log(account2);
    console.log(account3);
}

main ()