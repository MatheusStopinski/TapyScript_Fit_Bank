export function log(msg: string) { 
    console.log(msg, new Date(Date.now()).toISOString());
};


export function runAsyncTest(): void {

setImmediate(() => {
    log('setImmediate'); // terceira mensagem, pois é o setImmediate, que tem prioridade sobre o setTimeout
});

log('Iniciando processamento...'); // primeira mensagem pois é o regular

setTimeout(() => {
    log('setTimeout'); // quarta mensagem, pois é o setTimeout, o mais demorado!
}, 2000);

setTimeout(() => {
    log('setTimeout'); // quinta mensagem, setTimeout seguindo a ordem!
}, 4000);

setTimeout(() => {
    log('setTimeout'); // sexta mensagem, setTimeout seguindo a ordem!
}, 7000);

log('Enquanto aguardou setTimeout, ele veio primeiro.'); // segunda mensagem, pois é o regular, apenas seguindo a ordem!

};
