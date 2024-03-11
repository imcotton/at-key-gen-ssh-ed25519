import { main } from './main.ts';

import { args } from './utils.ts';





const { publicKey } = await main(args);

console.log(publicKey);

