import { main } from './main.ts';

import { args } from './utils.ts';





const { privateKey } = await main(args);

console.log(privateKey);

