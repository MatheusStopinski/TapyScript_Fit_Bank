import { createReadStream, ReadStream } from "fs";

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

log('Lendo arquivbo grande... OUTRO REGULAR');

const bufferStr: Array<string> = []; // Array para armazenar os pedaços do arquivo lidos, ou seja, os chunks de dados.
const readStream = createReadStream('./TheFile.txt', { encoding: 'utf-8' }); 

readStream.on('data', (st) => log (`${st.length}`)); // .on é o listener, ou seja, o evento que vai ser disparado quando chegar um chunk de dados, ou seja, quando chegar um pedaço do arquivo, ele vai logar o tamanho desse pedaço. 

readStream.on('end', () => { // .on é o listener, ou seja, o evento que vai ser disparado quando chegar no final do arquivo.-
    log('Fechando readStream.on! (end, () => {...})');
    readStream.close(); 
    
    log('Finalizou solicitação de leitura de arquivo grande...');
})};