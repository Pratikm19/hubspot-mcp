# HubSpot MCP Extension for Gemini CLI

Connect Gemini CLI to your HubSpot CRM. Read contacts, query deals, update records, and analyse your pipeline — all from the terminal.

Powered by the [official HubSpot MCP server](https://developers.hubspot.com/mcp).

## Install

```bash
gemini extensions install https://github.com/Pratikm19/hubspot-mcp
```

You will be prompted for your HubSpot Private App Access Token on first run.

## Setup: Get your access token

1. Go to **HubSpot Settings > Integrations > Private Apps**
2. Click **Create a private app**
3. Name it (e.g. "Gemini CLI")
4. Set scopes:
   - `crm.objects.contacts.read` + `write`
   - `crm.objects.deals.read` + `write`
   - `crm.objects.companies.read` + `write`
5. Click **Create app** and copy the access token
6. Paste it when prompted for `HUBSPOT_PRIVATE_APP_ACCESS_TOKEN`

## Example prompts

```
> show me all open deals
> find the contact for john@acme.com
> what deals are closing this month?
> create a contact for Sarah Chen at Stripe, email sarah@stripe.com
> move the Acme Corp deal to Proposal stage
> show me contacts created in the last 7 days with no owner
> log a note on the TechCorp deal: "Follow up call booked for Friday"
> summarise all deals over $10k in the Decision stage
```

## Requirements

- [Gemini CLI](https://github.com/google-gemini/gemini-cli) installed
- Node.js 18+
- A HubSpot account with Private App access

## Built on

- [HubSpot MCP Server](https://www.npmjs.com/package/@hubspot/mcp-server) (official)
- [Gemini CLI Extensions](https://geminicli.com/docs/extensions/)

## License

MIT
