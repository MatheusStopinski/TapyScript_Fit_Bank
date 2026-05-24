export function log(msg) {
    console.log(msg, new Date(Date.now()).toISOString());
}
;
export function runAsyncTest() {
    log('Iniciando processamento do arquivo...');
    setTimeout(() => {
        log('Processamento em setTimeout...');
    }, 2000);
    setTimeout(() => {
        log('Processamento do arquivo concluído!');
    }, 4000);
    setTimeout(() => {
        log('Processamento do arquivo concluído!');
    }, 7000);
}
;
//# sourceMappingURL=asyncTestAvulso.js.map