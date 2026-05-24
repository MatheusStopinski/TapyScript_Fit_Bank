export function log(msg: string) { 
    console.log(msg, new Date(Date.now()).toISOString());
};


export function runAsyncTest(): void {

log('Iniciando processamento...');

setTimeout(() => {
    log('setTimeout');
}, 2000);

setTimeout(() => {
    log('setTimeout');
}, 4000);

setTimeout(() => {
    log('setTimeout');
}, 7000);

};
