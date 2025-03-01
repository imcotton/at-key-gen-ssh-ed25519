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
|--Ed25519----------------------|
|                               |
| @paulmillr/micro-key-producer |
│           /micro-packed       |
|     @noble/hashes             |
|     @noble/curves             |
|     @scure/base               |
|-------------------------------|
```

> Credit to: https://github.com/paulmillr/micro-key-producer





## Deno CLI

### print fingerprint

    deno run jsr:@key/gen-ssh-ed25519 salt <passphrase>

### create public key

    deno run jsr:@key/gen-ssh-ed25519/pub salt <passphrase>

### create private key

    deno run jsr:@key/gen-ssh-ed25519/private salt <passphrase>

### create **UUID** via `crypto.randomUUID`

    deno run jsr:@key/gen-ssh-ed25519/uuid

or

    deno eval -p 'crypto.randomUUID()'
    node      -p 'crypto.randomUUID()'

