import os from 'os';
;
export function loginInMemoryObjects(...obj) {
    console.log('Logging in-memory objects:');
    const log = obj
        .map(x => x.toLogEntry())
        .map(x => `[${x.moment.toISOString()}] ${x.message}`)
        .join(os.EOL);
    console.log(log);
}
;
//# sourceMappingURL=logging.js.map