# WhiteMagic — Gemini CLI extension

Local-first memory and session continuity for Gemini CLI. Wires the
`whitemagic` MCP server (the local `wm` binary) plus a session-rhythm skill
and context file.

## Install

```bash
# 1. Install the wm binary (Linux x86-64/arm64; macOS/Windows binaries published)
curl -fsSL "https://www.whitemagic.dev/install.sh?ref=gemini-ext" | sh

# 2. Install the extension
gemini extensions install https://github.com/lbailey94/whitemagic-gemini-extension
```

Then verify: `wm --version`, and ask Gemini CLI what it remembers.

## What it does

- **Durable memory** — decisions, project state, and checkpoints stored on your
  machine (LMDB + Tantivy; no account, no cloud required).
- **Resumable sessions** — `session.continuity` returns where the previous
  session left off, with source links.
- **Governed writes** — destructive routes need explicit confirmation; fuzzy
  routing can never reach them.
- **Small surface** — one NLU-routed `wm` meta-tool; explicit `route=` calls
  for dependable behavior.

## Files

- `gemini-extension.json` — extension manifest (MCP server + context)
- `GEMINI.md` — context loaded into sessions
- `skills/whitemagic/SKILL.md` — session-rhythm skill

## Links

- Product: https://www.whitemagic.dev/whitemagic
- Setup guide (all clients): https://www.whitemagic.dev/whitemagic/guide
- Source: https://github.com/lbailey94/whitemagic (MIT)

The `wm` binary is a separate install; this extension only wires it. WhiteMagic
is open alpha — the version in the manifest tracks the release line.
