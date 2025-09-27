import { argv } from 'node:process';

export const { crypto: webcrypto } = globalThis;





const txt = new TextEncoder();

export function encode (str: string) {

    return txt.encode(str.normalize('NFKD'));

}





export const args: ReadonlyArray<string> = argv.slice(2);

