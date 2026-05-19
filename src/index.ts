class bankAccount {
    accNumber: number;
    funds: number;

    constructor(accNumber: number, initialFunds: number) {
        this.accNumber = accNumber;
        this.funds = initialFunds;
    }
}

function main() {
    const account1 = new bankAccount(123456789, 1000);
    const account2 = new bankAccount(987654321, 2000);
    const account3 = new bankAccount(98541, 40000);

    console.log(`Account 1 Number: ${account1.accNumber}`);
    console.log(`Account 2 Number: ${account2.accNumber}`);
    console.log(`Account 3 Number: ${account3.accNumber}`);
}

main ()