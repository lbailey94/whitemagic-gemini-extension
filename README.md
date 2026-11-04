# WhiteMagic Gemini CLI extension

The manifest selects **stable Gen2 9.3.4** through
`npx -y whitemagic-mcp@9.3.4 serve --profile curated`. It does not select an arbitrary
`wm` on PATH. Node.js/npm are required; the first launch downloads the pinned
launcher and its selected release binary. Memory stays in the local store.

```bash
gemini extensions install https://github.com/lbailey94/whitemagic-gemini-extension
```

The server version, not the extension version string alone, determines the runtime.
Keep this stable extension separate from an explicitly configured Gen3 preview.
`node --test test/manifest.test.mjs` checks the exact command contract. The CI
candidate exercises create/read/process-restart/read with that launcher and a
scratch store. The Linux server-protocol control passes locally; a complete
authenticated Gemini CLI write/read/restart exercise remains a
separate qualification; adding the workflow does not claim it has run.

`GEMINI.md` and `skills/whitemagic/SKILL.md` describe selective session continuity.
Memory is not encrypted by default; do not record credentials.

[Setup guide](https://www.whitemagic.dev/install) ·
[Stable release](https://github.com/lbailey94/whitemagic/releases/tag/v9.3.4) ·
[Source](https://github.com/lbailey94/whitemagic)
