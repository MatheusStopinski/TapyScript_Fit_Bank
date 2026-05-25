import { createReadStream, ReadStream } from "fs";

export function log(msg: string, buffer: Array<string> | null = null) { 
    const _msg = `${msg} ${new Date(Date.now())}`;

    if (buffer) {
        buffer.push(_msg);

        if (buffer.length > 700) {
            log(`Buffer cheio!`);
            log(_msg);

            buffer.length = 0;
        }

    } else {
        console.log(_msg);
    }
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

const bufferStr: Array<string> = []; 
const readStream = createReadStream('./TheFile.txt', { encoding: 'utf-8' }); 

readStream.on('data', (st) => log(`${st.length}`, bufferStr)); // .on é o listener, ou seja, o evento que vai ser disparado quando chegar um pedaço do arquivo, ou seja, um chunk de dados.-bufferStr é o array que vai armazenar os pedaços do arquivo lidos, ou seja, os chunks de dados.

readStream.on('end', () => { // .on é o listener, ou seja, o evento que vai ser disparado quando chegar no final do arquivo.-
    log('Fechando readStream.on! (end, () => {...})');
    readStream.close(); 
    
    log('Finalizou solicitação de leitura de arquivo grande...');
})};