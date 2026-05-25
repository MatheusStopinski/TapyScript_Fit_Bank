import { readFile } from "fs/promises";
export const log = (msg, buffer = null) => {
    const _msg = `${msg} ${new Date().toISOString()}`;
    if (buffer) {
        buffer.push(_msg);
        if (buffer.length > 700) {
            console.log('Buffer cheio!');
            console.log(_msg);
            buffer.length = 0;
        }
        return;
    }
    console.log(_msg);
};
export const readBigFile = () => {
    return readFile('./TheFile.txt', { encoding: 'utf-8' });
};
export const runAsyncTest = () => {
    const bufferStr = [];
    setImmediate(() => log('setImmediate'));
    log('Iniciando processamento...');
    setTimeout(() => log('setTimeout 2s'), 2000);
    const interval = setInterval(() => log('Pega um bom café! Acredito em você'), 2000);
    setTimeout(() => log('setTimeout 4s'), 4000);
    log('REGULAR veio primeiro.');
    setTimeout(() => log('setTimeout 7s'), 7000);
    log('Lendo arquivo grande...');
    readBigFile()
        .then((data) => {
        log(`Arquivo carregado: ${data.length} caracteres`, bufferStr);
        log('Leitura concluída.');
    })
        .catch((err) => {
        log(`ERRO: ${err}`);
    })
        .finally(() => {
        log('Finalizando Promise da leitura.');
    });
    setTimeout(() => {
        clearInterval(interval);
        log('Interval/Repetição encerrado.');
    }, 10000);
};
//# sourceMappingURL=asyncTestAvulso.js.map