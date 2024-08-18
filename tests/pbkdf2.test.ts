import * as ast from 'jsr:@std/assert@1';
import * as hex from 'jsr:@std/encoding@1/hex';
import { describe, it } from 'jsr:@std/testing@1/bdd';

import { encode } from '../src/utils.ts';

import { gen_PBKDF2 } from '../src/pbkdf2.ts';





describe('PBKDF2', function () {

    describe('SHA256', function () {

        // https://www.rfc-editor.org/rfc/rfc7914#section-11

        const hash = 'SHA-256';

        it('P=passwd, S=salt, c=1, dkLen=64', async function () {

            const fn = gen_PBKDF2({ hash, iterations: 1, byte: 64 });

            const buf = await fn({
                passphrase: encode('passwd'),
                salt: encode('salt'),
            });

            const res = `
                55 ac 04 6e 56 e3 08 9f ec 16 91 c2 25 44 b6 05
                f9 41 85 21 6d de 04 65 e6 8b 9d 57 c2 0d ac bc
                49 ca 9c cc f1 79 b6 45 99 16 64 b3 9d 77 ef 31
                7c 71 b8 45 b1 e3 0b d5 09 11 20 41 d3 a1 97 83
            `;

            ast.assertStrictEquals(
                hex.encodeHex(buf),
                res.replaceAll(/\W+/g, ''),
            );

        });

        it('P=Password, S=NaCl, c=80000, dkLen=64', async function () {

            const fn = gen_PBKDF2({ hash, iterations: 80000, byte: 64 });

            const buf = await fn({
                passphrase: encode('Password'),
                salt: encode('NaCl'),
            });

            const res = `
                4d dc d8 f6 0b 98 be 21 83 0c ee 5e f2 27 01 f9
                64 1a 44 18 d0 4c 04 14 ae ff 08 87 6b 34 ab 56
                a1 d4 25 a1 22 58 33 54 9a db 84 1b 51 c9 b3 17
                6a 27 2b de bb a1 d0 78 47 8f 62 b3 97 f3 3c 8d
            `;

            ast.assertStrictEquals(
                hex.encodeHex(buf),
                res.replaceAll(/\W+/g, ''),
            );

        });

    });

});

