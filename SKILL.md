---
name: hubspot-revops
description: Operate HubSpot CRM for revenue operations in plain English — query deals, contacts and companies, log notes, update properties, move lifecycle stages, and run RevOps diagnostics. Use when the user wants to read or write HubSpot CRM data, audit pipeline health, surface stuck contacts, or run a daily RevOps briefing from the terminal.
---

# HubSpot RevOps

Expert HubSpot CRM operator for B2B SaaS revenue teams. Read, write, and automate — in plain English.

Built on github.com/Pratikm19/hubspot-mcp — the first HubSpot connector in the Gemini CLI ecosystem. 35 RevOps prompts and 5 workflow recipes. Compatible with Gemini CLI and Claude Code.

---

## Testing status and data requirements

| Category | Status | Notes |
|---|---|---|
| Pipeline Health | Tested | Pipeline by stage, stale deals, overdue close dates confirmed working |
| Quick CRM Actions | Tested | Read contacts, read deals, log notes, move deals confirmed end to end |
| Deal Reviews and Forecasting | Partially tested | Deals by stage and no-contact deals confirmed. Amount and close date queries need populated data |
| ICP Qualification | Syntax validated | jobtitle filter works structurally — requires contacts imported with job title field populated |
| Churn and Lifecycle | Syntax validated | Customer lifecycle query confirmed. Full churn scan requires 6+ months of activity data |
| Prospecting and Outbound | Syntax validated | Requires populated email activity and sequence data to return results |
| Revenue Leak Detection | Syntax validated | Closed lost reason query confirmed. Stage regression and push queries require deal history |
| Morning Briefing | Partial | Stale deals and quiet customers work. Sequences not exposed via HubSpot MCP — will return empty |

**Best results on portals with 6+ months of activity data.** Empty results on fresh or sparse portals indicate a data gap, not a prompt error.

Contributions welcome — if you test a prompt and it works or fails, open an issue or PR.

---

## What This Skill Does

| Operation | Examples |
|---|---|
| Query deals | Stale deals, deals missing next steps, deals by stage |
| Query contacts | Customers gone quiet, leads by lifecycle stage, contacts missing fields |
| Write to CRM | Log notes, update properties, move lifecycle stages |
| Pipeline health | Deal risk flags, push counts, missing contacts on deals |
| Sequence audit | Step-level dropoff, reply rates, sequences to deactivate |
| Morning briefing | Daily RevOps digest — pipeline and contacts in one output |

---

## Pipeline Health

Spot deals going cold before they die quietly.

```
show me all HubSpot deals where notes_last_updated is before [14 days ago date as YYYY-MM-DD] and dealstage is not closedwon or closedlost
```
```
show me all HubSpot deals in [stage name] stage
```
```
what is my total HubSpot pipeline value broken down by stage
```
```
show me all HubSpot deals where closedate is before today and dealstage is not closedwon or closedlost
```
```
show me all HubSpot deals where num_notes is 0 and dealstage is not closedwon or closedlost
```

---

## ICP Qualification

Find your best-fit prospects. Ignore the rest.

> Requires contacts imported with jobtitle, numberofemployees, and industry fields populated. Returns empty on portals without enriched contact data.

```
find all HubSpot contacts from companies with more than 50 employees where lifecyclestage is lead
```
```
show me all HubSpot companies in the [industry] industry with no associated deal
```
```
find HubSpot contacts with job title containing VP or Director where hubspot_owner_id is not set
```
```
show me HubSpot leads created in the last 30 days where num_contacted_notes is 0
```
```
which HubSpot companies have more than 3 contacts but no open deal
```

---

## Churn & Lifecycle

Know who is slipping before they send the cancellation email.

> Requires contacts with lifecycle stage set and activity logged. Returns empty on portals with no historical activity.

```
show me all HubSpot contacts where lifecyclestage is customer and notes_last_updated is before [30 days ago date as YYYY-MM-DD]
```
```
which HubSpot contacts have been in the customer lifecycle stage for more than 90 days with no upsell deal
```
```
find all HubSpot deals in closedwon stage where closedate was more than 6 months ago
```
```
show me HubSpot contacts where lifecyclestage has not changed in 60 days
```
```
which HubSpot customers have an open support ticket and no recent sales touchpoint
```

---

## Prospecting & Outbound

Work smarter on outbound. Let the CRM tell you who to call.

> Requires populated email activity data. hs_email_last_open_date will be null on portals without HubSpot email sequences or marketing emails active.

```
find all HubSpot companies in [industry] with open deals where amount is less than 10000
```
```
show me HubSpot contacts where hs_email_last_open_date is in the last 14 days and num_associated_deals is 0
```
```
find all HubSpot contacts where hs_email_last_open_date is in the last 7 days
```
```
show me HubSpot leads from [source] channel created in the last 90 days where notes_last_updated is null
```
```
show me all HubSpot contacts at companies where we have a closedlost deal in the last 6 months
```

---

## Deal Reviews & Forecasting

Run your pipeline review without pulling a single report manually.

```
show me all HubSpot deals where amount is greater than 10000 and dealstage is presentationscheduled or decisionmakerboughtin
```
```
show me HubSpot deals where closedate is this month and dealstage is not closedwon or closedlost
```
```
show me HubSpot deals where hs_lastmodifieddate is in the last 7 days
```
```
show me all HubSpot deals where num_associated_contacts is 0
```
```
show me my top 10 HubSpot open deals by amount with dealstage and notes_last_updated
```

---

## Revenue Leak Detection

Find the gaps where pipeline silently disappears.

> Requires closed lost deals and deal history. Returns empty on portals with no closed lost deals or no stage change history.

```
show me all HubSpot deals that were moved backwards in stage in the last 30 days
```
```
find HubSpot contacts where hs_last_sales_activity_type contains demo and num_associated_deals is 0
```
```
show me HubSpot deals where dealstage is closedlost and hs_closed_lost_reason is not set, created in the last 90 days
```
```
show me all HubSpot deals where closedate has been modified more than twice
```
```
find HubSpot companies where notes_last_updated is before [60 days ago date as YYYY-MM-DD]
```

---

## Quick CRM Actions

Things you used to log by hand.

```
create a HubSpot contact for [Name] at [Company], email [email]
```
```
move HubSpot deal ID [deal_id] to [stage internal value] stage
```
```
log a note on HubSpot deal ID [deal_id]: "[note text]"
```
```
assign HubSpot deal ID [deal_id] to owner [owner name]
```
```
update the closedate on HubSpot deal ID [deal_id] to [YYYY-MM-DD]
```

---

## RevOps Morning Briefing

Run this once daily to get a RevOps digest from the terminal.

> Note: HubSpot MCP does not expose sequence performance data. The stale deals and quiet customers portions work. The sequence audit portion will return empty — remove it from your prompt if you want a cleaner output.

**What it surfaces:**
- Deals with no activity in 14+ days
- Customers not contacted in 30+ days
- Leads stuck in MQL for 30+ days
- Deals closing this month with no next step

```
Run my HubSpot RevOps morning briefing — surface stale deals, quiet customers, and stuck MQLs. Output as a prioritised action list.
```

---

## Tips for Best Results

- Always say **"HubSpot"** in your prompt — prevents Gemini from pulling Google Contacts or other connected sources
- Use **deal IDs** not deal names for write operations — avoids slow owner lookup chains
- Use **exact property names** where shown — prevents a property discovery pass before running your query
- For date filters, provide the **exact date as YYYY-MM-DD** rather than relative terms like "last 14 days"
- Key deal properties: `notes_last_updated`, `num_associated_contacts`, `num_notes`, `dealstage`, `closedate`, `amount`

---

## Combines With

| Skill | Why |
|---|---|
| ColdIQ signal-sourcer | Signal fires in ColdIQ, action it in HubSpot via write operations |
| ColdIQ clay-enrichment | Enrich in Clay, write results back to HubSpot contacts |
| apollo-outbound | Source in Apollo, triage and qualify in HubSpot |
| smartlead-outbound | Run sequences in Smartlead, sync outcomes back to HubSpot lifecycle stages |

---

## Pipeline OS Module Map

Each prompt category maps to a Pipeline OS module — the full HubSpot-native automation layer.

| Prompt Category | Pipeline OS Module |
|---|---|
| Pipeline Health | M13 — Pipeline Hygiene Engine |
| ICP Qualification | M12 — ICP Scoring Engine |
| Churn and Lifecycle | M10 — Customer Lifecycle Engine |
| Prospecting and Outbound | M16 — Sales Nav Lead Engine |
| Deal Reviews | M13 — Revenue Forecast Model |
| Revenue Leak Detection | M10 — Revenue Leak Finder |

---

*Built by Pratik Mehta — github.com/Pratikm19/hubspot-mcp*
