import { webcrypto } from './utils.ts';





export const PBKDF2 = gen_PBKDF2({});

export function gen_PBKDF2 ({

        byte = 32,
        hash = 'SHA-512',
        iterations = 400_000,

}) {

    return async function (opts: {

            salt: BufferSource,
            passphrase: BufferSource,

    }): Promise<ArrayBuffer> {

        const { salt, passphrase } = opts;

        const name = 'PBKDF2';

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

    };

}

