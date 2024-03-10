import * as ast from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';

import {
    main,
} from '../src/mod.ts';





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

});

