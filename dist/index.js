import { loginInMemoryObjects } from "./shared/logging.js";
import { checkingBankAccount, savingBankAccountWithLogging } from "./domain/models/bank.extensions.js";
function main() {
    const account1 = new savingBankAccountWithLogging(1, 1000);
    const account2 = new checkingBankAccount(2);
    const account3 = new savingBankAccountWithLogging(3, 40000);
    account1.withdraw(1500);
    account2.withdraw(2200);
    account3.deposit(30000);
    loginInMemoryObjects(account1, account2, account3);
}
;
main();
//# sourceMappingURL=index.js.map