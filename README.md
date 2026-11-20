# WhiteMagic Gemini CLI extension

The manifest selects **stable Gen2 9.3.4** through
`npx -y whitemagic-mcp@9.3.4 serve --profile curated`. Install Gemini CLI and
Node.js/npm before running the commands below. The first launch downloads the pinned
launcher and its selected release binary. Memory stays in the local store.

```bash
gemini extensions install https://github.com/lbailey94/whitemagic-gemini-extension
gemini extensions list
npx -y whitemagic-mcp@9.3.4 --version
gemini mcp list
```

The extension list should show `whitemagic (9.3.4)`. The `npx` version check
downloads the binary and should print `wm 9.3.4`. Run it before the connection
check so Gemini's first MCP probe starts with the binary already cached.
`gemini mcp list` should then show `whitemagic` as connected. Open a fresh
Gemini CLI session for the [save and recall check](https://www.whitemagic.dev/install#first-memory).

If GitHub release installation is unavailable, clone the current source and
install from the local folder. Gemini asks you to confirm trust for that folder.

```bash
git clone --branch main --depth 1 https://github.com/lbailey94/whitemagic-gemini-extension
gemini extensions install ./whitemagic-gemini-extension
```

The server version, not the extension version string alone, determines the runtime.
Keep this stable extension separate from an explicitly configured Gen3 preview.
`node --test test/manifest.test.mjs` checks the pinned command. The [Linux CI run](https://github.com/lbailey94/whitemagic-gemini-extension/actions/runs/41853901557)
also used that launcher to create a note and read it across a server restart
in a scratch store. The install and connection checks above ran in a fresh
Gemini CLI profile on Linux, before any signed-in model session.

`GEMINI.md` and `skills/whitemagic/SKILL.md` describe selective session continuity.
Memory is not encrypted by default; do not record credentials.

[Setup guide](https://www.whitemagic.dev/install) ·
[Stable release](https://github.com/lbailey94/whitemagic/releases/tag/v9.3.4) ·
[Source](https://github.com/lbailey94/whitemagic)
