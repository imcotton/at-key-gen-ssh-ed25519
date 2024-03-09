import { main } from './mod.ts';

import { args } from './utils.ts';





const { publicKey } = await main(args);

console.log(publicKey);

