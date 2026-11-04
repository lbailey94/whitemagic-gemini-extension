# WhiteMagic — Gemini CLI context

This extension wires the `whitemagic` MCP server (the pinned stable Gen2 9.3.4 launcher). It
gives you durable, on-device project memory: decisions, checkpoints, and
session state survive restarts, context resets, and model switches. The
canonical store stays on this machine.

## Session rhythm

1. **Recall first.** `wm(route="session.continuity")` before starting work —
   returns where the previous session left off.
2. **Open the session.** `wm(route="session.start", args={"title": "..."})`.
3. **Record selectively.** `wm(route="session.record", args={"content": "...",
   "turn_type": "decision"|"breakthrough"|"error"|"summary"})` — only what a
   future session needs.
4. **Recall mid-task.** `wm(route="memory.search", args={"query": "..."})`.
5. **Finish cleanly.** A short summary turn, then
   `wm(route="session.checkpoint")`.

Prefer explicit `route=` over `thought=`. Memory is not encrypted by default —
never record credentials or secrets. CLI equivalents: `wm session continuity`,
`wm session record`, `wm session checkpoint`.
