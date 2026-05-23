import os from 'os';

export interface Logging {
    toLogEntry(): logyEntry;
};    
export type logyEntry = {
    moment: Date;
    message: string;
};

export function loginInMemoryObjects(...obj: Array<Logging>) {
    console.log('Logging in-memory objects:');
    const log = obj
        .map(x => x.toLogEntry())
        .map(x => `[${x.moment.toISOString()}] ${x.message}`)
        .join(os.EOL);
    console.log(log);
};