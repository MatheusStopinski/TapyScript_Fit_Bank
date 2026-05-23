import type { Logging, logyEntry } from "../../shared/logging.js";
import { bankAccount, savingBankAccount } from "./bank.js";

/* 

Mixins! Consigo “injetar” funcionalidades específicas em qualquer classe compatível. Isso aumenta modularidade com escalabilidade arquitetural.

O contra é que o fluxo do código fica menos explícito, porque parte da lógica é “costurada” dinamicamente. Em equipes grandes, isso pode dificultar debug, onboarding e leitura arquitetural. Outro ponto crítico é que múltiplos Mixins podem gerar colisão de métodos, comportamento imprevisível e acoplamento indireto.

Ou seja: Só da pra usar se a flexibilidade realmente compensa a perda de simplicidade estrutural.

*/

type banckAccountCronstructors <T> = new (...args: any[]) => T; 
export function withOverdraft<C extends banckAccountCronstructors<bankAccount>>(Class: C) {
    return class extends Class {
        constructor(...args: any[]) {
            super(...args);
    };

    withdraw (value: number): boolean {
        this.funds -= value;
        return true;    
    };
  };   
};

export function withLogging<C extends banckAccountCronstructors<bankAccount>>(Class: C) {
    return class extends Class implements Logging {
        constructor(...args: any[]) {
            super(...args);
    };
    toLogEntry(): logyEntry {
        return {
            moment: new Date(Date.now()),
            message: this.toString()
        };
    };   
};
};

export const checkingBankAccount = withLogging(withOverdraft(bankAccount));
export const savingBankAccountWithLogging = withLogging(savingBankAccount);
