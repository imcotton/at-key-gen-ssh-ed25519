import { main } from './main.ts';

import { args } from './utils.ts';





const { fingerprint } = await main(args);

console.log(fingerprint);

