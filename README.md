reproducible **SSH Keygen** by `Ed25519`





## CLI

### print fingerprint

    deno run   jsr:@key/gen-ssh-ed25519           <salt> <passphrase>

### create public key

    deno run   jsr:@key/gen-ssh-ed25519/pub       <salt> <passphrase>

### create private key

    deno run   jsr:@key/gen-ssh-ed25519/private   <salt> <passphrase>

### create `uuid` via `crypto.randomUUID`

    deno run   jsr:@key/gen-ssh-ed25519/uuid

