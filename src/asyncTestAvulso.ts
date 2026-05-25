import { readFile } from "fs/promises";

export const log = (
    msg: string,
    buffer: Array<string> | null = null
): void => {

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

export const readBigFile = async (): Promise<string> => { // async transforma uma função em assíncrona. Na prática significa: “essa função pode pausar execução usando await sem travar o programa”.

    return await readFile('./TheFile.txt', { encoding: 'utf-8' });

};

export const runAsyncTest = async (): Promise<void> => {

    const bufferStr: string[] = [];

    setImmediate(() => log('setImmediate'));

    log('Iniciando processamento...');

    setTimeout(() => log('setTimeout 2s'), 2000);

    const interval = setInterval(
        () => log('Pega um café por favor!'),
        2000
    );

    setTimeout(() => log('setTimeout 4s'), 4000);

    log('REGULAR veio primeiro.');

    setTimeout(() => log('setTimeout 7s'), 7000);

    try {

        log('Lendo arquivo grande...');

        const data = await readBigFile();

        log(
            `Arquivo carregado: ${data.length} caracteres`,
            bufferStr
        );

        log('Leitura concluída.');

    } catch (err) {

        log(`ERRO: ${err}`);

    }

    setTimeout(() => {
        clearInterval(interval);
        log('Interval encerrado.');
    }, 10000);

};