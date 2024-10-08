import { getKeys } from 'micro-key-producer/ssh.js';

import { PBKDF2 } from './pbkdf2.ts';

import { encode } from './utils.ts';





export interface Keys {
    readonly publicKeyBytes: Uint8Array;
    readonly publicKey: string;
    readonly fingerprint: string;
    readonly privateKey: string;
}





export async function main ([

        salt,
        passphrase = 'the default passphrase',

]: ReadonlyArray<string>): Promise<Keys> {

    if (salt == null || salt.trim().length < 5) {
        throw new Error('invalid salt, at least 5 characters long');
    }

    const entropy = await PBKDF2({
        salt: encode(salt),
        passphrase: encode(passphrase),
    });

    return getKeys(new Uint8Array(entropy));

}

