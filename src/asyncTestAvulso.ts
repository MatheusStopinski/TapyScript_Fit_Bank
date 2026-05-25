import { readFile } from "fs";

export function log(msg: string, buffer: Array<string> | null = null): void {
    const _msg = `${msg} ${new Date().toISOString()}`;

    if (buffer) {
        buffer.push(_msg);

        if (buffer.length > 700) {
            console.log('Buffer cheio!');
            console.log(_msg);

            buffer.length = 0;
        }

    } else {
        console.log(_msg);
    }
}

export function readBigFile(): Promise<string> {

    return new Promise((resolve, reject) => {

        readFile('./TheFile.txt', { encoding: 'utf-8' }, (err, data) => {

            if (err) {
                reject(err);
                return;
            }

            resolve(data);

        });

    });

}

export async function runAsyncTest(): Promise<void> {

    const bufferStr: Array<string> = [];

    setImmediate(() => {
        log('setImmediate');
    });

    log('Iniciando processamento...');

    setTimeout(() => {
        log('setTimeout 2s');
    }, 2000);

    const interval = setInterval(() => {
        log('Pega um café por favor!');
    }, 2000);

    setTimeout(() => {
        log('setTimeout 4s');
    }, 4000);

    log('REGULAR veio primeiro.');

    setTimeout(() => {
        log('setTimeout 7s');
    }, 7000);

    try {

        log('Lendo arquivo grande...');

        const data = await readBigFile();

        log(`Arquivo carregado: ${data.length} caracteres`, bufferStr);

        log('Leitura concluída.');

    } catch (err) {

        log(`ERRO: ${err}`);

    }

    setTimeout(() => {
        clearInterval(interval);
        log('Interval encerrado.');
    }, 10000);

}