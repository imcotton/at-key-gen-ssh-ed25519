import { getKeys } from 'ed25519-keygen/ssh';

import { PBKDF2 } from './pbkdf2.ts';

import { encode } from './utils.ts';





export type Keys = Readonly<{
    publicKeyBytes: Uint8Array;
    publicKey: string;
    fingerprint: string;
    privateKey: string;
}>;





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

