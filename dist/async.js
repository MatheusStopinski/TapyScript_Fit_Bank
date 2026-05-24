function log(msg) {
    console.log(msg, new Date(Date.now()).toISOString());
}
log('Iniciando processamento do arquivo...');
setTimeout(() => {
    log('Processamento do arquivo concluído!');
});
export {};
//# sourceMappingURL=async.js.map