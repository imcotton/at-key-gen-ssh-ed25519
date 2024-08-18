import * as ast from 'jsr:@std/assert@1';
import { describe, it } from 'jsr:@std/testing@1/bdd';

import {
    main,
} from '../src/main.ts';





describe('main', function () {

    it('throw without salt', async function () {
        await ast.assertRejects(() => main([]));
    });

    it('throw without enough salt', async function () {
        await ast.assertRejects(() => main([ '1234' ]));
    });

    it('OK at least 5 characters salt', async function () {

        const { publicKey, fingerprint, privateKey } = await main([ 'abcde' ]);

        ast.assertStringIncludes(publicKey, 'ssh-ed25519');
        ast.assertStringIncludes(fingerprint, 'SHA256:');
        ast.assertStringIncludes(privateKey, '---BEGIN OPENSSH PRIVATE KEY---');

    });

    it('pins on salt=foobar', async function () {

        const { publicKey, fingerprint, privateKey } = await main([
            'foobar',
        ]);

        ast.assertStringIncludes(publicKey, 'XttcbGJ1lmj');
        ast.assertStringIncludes(fingerprint, 'R6MMvb6J75e2');
        ast.assertStringIncludes(privateKey, 'bNV2L5NXt');

    });

    it('pins on salt=foobar passphrase=42', async function () {

        const { publicKey, fingerprint, privateKey } = await main([
            'foobar',
            '42',
        ]);

        ast.assertStringIncludes(publicKey, 'G0wUQlHgQ');
        ast.assertStringIncludes(fingerprint, '9HPLAHyrHt');
        ast.assertStringIncludes(privateKey, 'DmMmHYjLBe');

    });

});

