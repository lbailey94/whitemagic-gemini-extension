# WhiteMagic Gemini CLI extension

The manifest selects **stable Gen2 9.3.4** through
`npx -y whitemagic-mcp@9.3.4 serve --profile curated`. Install Node.js/npm and
Git before running the commands below. The first launch downloads the pinned
launcher and its selected release binary. Memory stays in the local store.

```bash
git clone --branch main --depth 1 https://github.com/lbailey94/whitemagic-gemini-extension
gemini extensions install ./whitemagic-gemini-extension
gemini extensions list
npx -y whitemagic-mcp@9.3.4 --version
gemini mcp list
```

Gemini asks you to confirm trust when installing from the cloned folder. The
clone selects the current manifest. Installing from the bare repository URL
can pick the older GitHub release v9.2.8, which expects a separately installed `wm`.
The extension list should show `whitemagic (9.3.4)`. The `npx` version check
downloads the binary and should print `wm 9.3.4`. Run it before the connection
check so Gemini's first MCP probe starts with the binary already cached.
`gemini mcp list` should then show `whitemagic` as connected. Open a fresh
Gemini CLI session for the [save and recall check](https://www.whitemagic.dev/install#first-memory).

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
