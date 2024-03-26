[![jsr](https://jsr.io/badges/@key/gen-ssh-ed25519)](https://jsr.io/@key/gen-ssh-ed25519)
[![codecov](https://codecov.io/gh/imcotton/at-key-gen-ssh-ed25519/graph/badge.svg)](https://codecov.io/gh/imcotton/at-key-gen-ssh-ed25519)

reproducible **SSH Keygen** by `PBKDF2` + `Ed25519`





## Methodology

```
|--PBKDF2--------|
|                |
|           salt <- (at least 5 characters long)
|     passphrase <- "the default passphrase"
|                |
|  hash:  sha512 |
| round: 400_000 |
|----------------|
▼
▼ -- 32 bytes entropy
▼
|--Ed25519--------------|
|                       |
| npm:ed25519-keygen    |
|     npm:@scure/base   |
|     npm:@noble/hashes |
|     npm:@noble/curves |
|-----------------------|
```





## Deno CLI

### print fingerprint

    deno run jsr:@key/gen-ssh-ed25519 \
             salt <passphrase>

### create public key

    deno run jsr:@key/gen-ssh-ed25519/pub \
             salt <passphrase>

### create private key

    deno run jsr:@key/gen-ssh-ed25519/private \
             salt <passphrase>

### create **UUID** via `crypto.randomUUID`

    deno run jsr:@key/gen-ssh-ed25519/uuid

or

    node -p 'crypto.randomUUID()'

