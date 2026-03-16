# HubSpot MCP for Gemini CLI + Claude Code

Talk to your HubSpot CRM from the terminal. Read, write, and automate — in plain English.

Built for RevOps practitioners who live in the terminal and want their CRM to keep up.

```
show me all HubSpot deals where notes_last_updated is before 2026-03-01 and dealstage is not closedwon or closedlost
find all HubSpot contacts where lifecyclestage is customer and notes_last_updated is before 2026-02-15
show me all HubSpot deals in appointmentscheduled stage
log a note on HubSpot deal ID 262823700971: "Follow up call booked for Friday"
show me all HubSpot deals where num_associated_contacts is 0 and dealstage is not closedwon or closedlost
```

---

## Why this exists

HubSpot's native Gemini connector is read-only, UI-based, and requires a paid Google Workspace plan. It's built for sales reps inside Gmail.

This is built for the person who built the CRM.

- **Read + write** — query, create, update, log notes, move deals
- **Terminal-native** — stays in your workflow, no context switching
- **Practitioner-built** — 35 RevOps prompts included, mapped to real use cases
- **Multi-portal ready** — manage multiple client portals from one config
- **Logic layer included** — skills and recipes organised by job to be done, not API structure
- **Free** — just needs a HubSpot Private App token

---

## Works with

- [Gemini CLI](https://github.com/google-gemini/gemini-cli) — install as an extension
- [Claude Code](https://claude.ai/code) — add to your MCP config

---

## Install

### Gemini CLI

```bash
gemini extensions install https://github.com/Pratikm19/hubspot-mcp
```

### Claude Code

**Mac** — add to `~/.claude/claude_desktop_config.json`:

**Windows** — add to `%USERPROFILE%\.claude.json` (not `claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "hubspot": {
      "command": "npx",
      "args": ["-y", "@hubspot/mcp-server"],
      "env": {
        "PRIVATE_APP_ACCESS_TOKEN": "pat-your-token-here"
      }
    }
  }
}
```

---

## Setup (both clients)

**1. Create a HubSpot Private App**

- Go to HubSpot Settings → Integrations → Private Apps
- Click Create a private app
- Name it (e.g. "Gemini CLI" or "Claude Code")
- Set scopes:
  - `crm.objects.contacts.read` + `write`
  - `crm.objects.deals.read` + `write`
  - `crm.objects.companies.read` + `write`
- Copy the token (starts with `pat-`)

**2. Add your token**

Replace `pat-your-token-here` in your config with the actual token.

**3. Restart your client and verify**

Gemini CLI:
```
/mcp list
```
You should see `🟢 hubspot - Ready (21 tools)`.

Claude Code: the HubSpot tools will appear automatically in your next session.

---

## Windows users — read this first

A few gotchas that will save you an hour:

**1. Config file location**

Claude Code on Windows reads from `%USERPROFILE%\.claude.json` — not `claude_desktop_config.json`. Open it with:
```powershell
notepad $env:USERPROFILE\.claude.json
```

**2. Token key name**

The extension file uses `HUBSPOT_PRIVATE_APP_ACCESS_TOKEN` as the key name but the HubSpot MCP server expects `PRIVATE_APP_ACCESS_TOKEN`. If the connection shows 🔴 Disconnected, this is why. Open your `gemini-extension.json` and make sure the env block uses:
```json
"PRIVATE_APP_ACCESS_TOKEN": "pat-your-token-here"
```

**3. Hardcode your token**

The `${user:HUBSPOT_PRIVATE_APP_ACCESS_TOKEN}` userSettings syntax is unreliable on Windows. Paste your token directly into the env block instead.

**4. Always say "HubSpot" in your prompts**

Gemini CLI is aware of all your connected extensions. If you say "show me all contacts" it may pull from Google Contacts or other sources. Always say "show me all HubSpot contacts" to route correctly.

**5. Use deal IDs for write operations**

When logging notes, moving deals, or updating properties — use the deal ID rather than the deal name. Deal name lookups trigger an owner resolution chain that adds 1-2 minutes of latency. Deal ID goes straight to the operation.
```
log a note on HubSpot deal ID 262823700971: "your note here"
```

---

## Multi-portal setup (for consultants)

Managing multiple client portals? See [`multi-portal-config.json`](./multi-portal-config.json) for the full pattern.

Each client gets their own block with their own Private App token:

```json
{
  "mcpServers": {
    "hubspot-client-a": {
      "command": "npx",
      "args": ["-y", "@hubspot/mcp-server"],
      "env": {
        "PRIVATE_APP_ACCESS_TOKEN": "pat-client-a-token"
      }
    },
    "hubspot-client-b": {
      "command": "npx",
      "args": ["-y", "@hubspot/mcp-server"],
      "env": {
        "PRIVATE_APP_ACCESS_TOKEN": "pat-client-b-token"
      }
    }
  }
}
```

Then tell your agent: *"Use hubspot-client-b for this query"* and it routes automatically.

> Never commit real tokens to git. Use a `.env` file and reference with `${ENV_VAR}` syntax.

---

## RevOps Skill Library

See [`SKILL.md`](./SKILL.md) for 35 practitioner-built prompts organised by use case:

- Pipeline Health
- ICP Qualification
- Churn & Lifecycle
- Prospecting & Outbound
- Deal Reviews & Forecasting
- Revenue Leak Detection
- Quick CRM Actions

Each prompt maps to a [Pipeline OS](https://github.com/Pratikm19/hubspot-mcp) module — the full HubSpot-native RevOps automation suite these workflows are extracted from.

---

## Why the logic layer matters

MCP tools give you the connection. Skills give you the intelligence.

HubSpot's official MCP server exposes the API actions — list, query, update. But it has no opinion about what to do with them. A RevOps practitioner landing on raw MCP tools has no idea where to start.

This repo is the logic layer on top. Prompts and workflows built by a practitioner, not generated by AI — organised around how RevOps teams actually work, not how the API is structured.

The CLI is where this matters most. It's where technical practitioners live. This repo is built for that workflow.

---

## Requirements

- Gemini CLI or Claude Code installed
- Node.js 18+
- A HubSpot account with Private App access

---

## Built on

- [HubSpot MCP Server](https://github.com/HubSpot/mcp-server) (official)
- [Gemini CLI Extensions](https://github.com/google-gemini/gemini-cli)
- [Pipeline OS](https://github.com/Pratikm19/hubspot-mcp) — HubSpot-native RevOps for B2B SaaS

---

## Work with me

These workflows run from your terminal today. If you want them running automatically inside your HubSpot — as live properties, workflows, and triggers your team owns forever — that's what I build.

I'm a RevOps consultant specialising in HubSpot-native automation for B2B SaaS teams. Fixed-price sprints. No lock-in. You own everything at the end.

→ [Book a free 30-min call](https://cal.com/pratik-mehta1/30min)
→ [See the Pipeline OS sprint offer](https://pratikmehta.co)

Open to full-time RevOps, GTM, and HubSpot roles at B2B SaaS companies. [Connect on LinkedIn](https://www.linkedin.com/in/pratik-mehta1).

---

## License

MIT

---

*Built by [Pratik Mehta](https://www.linkedin.com/in/pratik-mehta1) — RevOps and GTM consultant specialising in HubSpot-native automation for B2B SaaS.*
