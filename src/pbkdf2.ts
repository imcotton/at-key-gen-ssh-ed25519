import { webcrypto } from './utils.ts';





export async function PBKDF2 (opts: {

        salt: BufferSource,
        passphrase: BufferSource,

}): Promise<ArrayBuffer> {

    const { salt, passphrase } = opts;

    const name = 'PBKDF2';
    const byte = 32;
    const hash = 'SHA-512';
    const iterations = 400_000;

    const base = await webcrypto.subtle.importKey(
        'raw',
        passphrase,
        { name },
        false,
        [ 'deriveBits' ],
    );

    return webcrypto.subtle.deriveBits(
        { name, salt, hash, iterations },
        base,
        byte * 8,
    );

}

