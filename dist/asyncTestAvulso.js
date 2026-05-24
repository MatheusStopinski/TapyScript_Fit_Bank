import { readFile } from "fs";
export function log(msg) {
    console.log(msg, new Date(Date.now()).toISOString());
}
;
export function runAsyncTest() {
    setImmediate(() => {
        log('setImmediate'); // terceira mensagem, pois é o setImmediate, que tem prioridade sobre o setTimeout
    });
    log('Iniciando processamento...'); // primeira mensagem pois é o regular
    setTimeout(() => {
        log('setTimeout'); // quarta mensagem, pois é o setTimeout, o mais demorado!
    }, 2000);
    setInterval(() => {
        log('Pega um café porfavor!');
    }, 2000); // Se o tempo for igual, vence quem vem antes.
    setTimeout(() => {
        log('setTimeout'); // sexta mensagem, setTimeout seguindo a ordem!
    }, 4000);
    log('REGULAR veio primeiro.'); // segunda mensagem, pois é o regular, apenas seguindo a ordem!
    setTimeout(() => {
        log('setTimeout'); // sétima mensagem, setTimeout seguindo a ordem!
    }, 7000);
    log('Lendo arquivbo grande...');
    readFile('../TheFile.text', { encoding: 'utf8' }, (err, data) => {
        if (err) {
            log('OLHE O CAFÉ: ' + err); // provavelmente ao fazer a segunda etapa pensou mais de tantos segundos, ai pode mostrar como erro! 
        }
        log('Finalizou solicitação de leitura de arquivo grande...');
    });
}
;
//# sourceMappingURL=asyncTestAvulso.js.map