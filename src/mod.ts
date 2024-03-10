import ssh from 'ed25519-keygen/ssh';

import { PBKDF2 } from './pbkdf2.ts';

import { args, encode } from './utils.ts';





export type Keys = Readonly<{
    publicKeyBytes: Uint8Array;
    publicKey: string;
    fingerprint: string;
    privateKey: string;
}>;





export async function main ([

              salt = 'the default salt',
        passphrase = 'the default passphrase',

]: ReadonlyArray<string>): Promise<Keys> {

    const entropy = await PBKDF2(encode(salt), encode(passphrase));

    return ssh(new Uint8Array(entropy));

}





if (import.meta.main) {

    const { fingerprint } = await main(args);

    console.log(fingerprint);

}

