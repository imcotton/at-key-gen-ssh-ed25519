import { main } from './main.ts';

import { args, webcrypto } from './utils.ts';





async function run () {

    const [ x, ...xs ] = args;

    if (x === 'uuid') {
        return console.log(webcrypto.randomUUID());
    }

    const { publicKey, privateKey, fingerprint } = await main(xs);

    if (x === 'pub' || x === 'public') {

        console.log(publicKey);

    } else if (x === 'private') {

        console.log(privateKey);

    } else if (x === 'fingerprint') {

        console.log(fingerprint);

    } else {

      throw new Error(`unknown - ${ x }`);

    }

}

run();


