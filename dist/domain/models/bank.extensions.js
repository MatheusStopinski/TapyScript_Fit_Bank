import { bankAccount, savingBankAccount } from "./bank.js";
export function withOverdraft(Class) {
    return class extends Class {
        constructor(...args) {
            super(...args);
        }
        ;
        withdraw(value) {
            this.funds -= value;
            return true;
        }
        ;
    };
}
;
export function withLogging(Class) {
    return class extends Class {
        constructor(...args) {
            super(...args);
        }
        ;
        toLogEntry() {
            return {
                moment: new Date(Date.now()),
                message: this.toString()
            };
        }
        ;
    };
}
;
export const checkingBankAccount = withLogging(withOverdraft(bankAccount));
export const savingBankAccountWithLogging = withLogging(savingBankAccount);
//# sourceMappingURL=bank.extensions.js.map