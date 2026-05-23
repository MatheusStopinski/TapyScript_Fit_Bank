export interface Logging {
    toLogEntry(): logyEntry;
}
export type logyEntry = {
    moment: Date;
    message: string;
};
export declare function loginInMemoryObjects(...obj: Array<Logging>): void;
//# sourceMappingURL=logging.d.ts.map