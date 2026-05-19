"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class bankAccount {
    accNumber;
}
function main() {
    const account1 = new bankAccount();
    const account2 = new bankAccount();
    account1.accNumber = 123456789;
    account2.accNumber = 987654321;
    console.log(`Account 1 Number: ${account1.accNumber}`);
    console.log(`Account 2 Number: ${account2.accNumber}`);
}
main();
//# sourceMappingURL=index.js.map