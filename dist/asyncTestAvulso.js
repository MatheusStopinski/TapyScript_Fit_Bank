export function log(msg) {
    console.log(msg, new Date(Date.now()).toISOString());
}
;
export function runAsyncTest() {
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
    log('Enquanto aguardou ele veio primeiro.');
}
;
//# sourceMappingURL=asyncTestAvulso.js.map