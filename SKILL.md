# HubSpot RevOps Skill Library

A practitioner-built prompt library for HubSpot + Gemini CLI. 35 workflows. Copy, paste, run.
Built on [Pipeline OS](https://github.com/Pratikm19/hubspot-mcp) — a HubSpot-native RevOps system for B2B SaaS teams.

---

## Pipeline Health

Spot deals going cold before they die quietly.

```
show me all deals with no activity in the last 14 days
```
```
which deals have been in the same stage for more than 21 days
```
```
what is my total pipeline value broken down by stage
```
```
show me all deals with a close date in the past that are still open
```
```
which deals have no next step or follow-up task assigned
```

---

## ICP Qualification

Find your best-fit prospects. Ignore the rest.

```
find all contacts from companies with more than 50 employees where the deal stage is New Lead
```
```
show me all companies in the SaaS industry with no associated deal
```
```
find contacts with the job title VP or Director who have no owner assigned
```
```
show me leads created in the last 30 days that have never been contacted
```
```
which companies have more than 3 contacts but no open deal
```

---

## Churn & Lifecycle

Know who is slipping before they send the cancellation email.

```
show me all customers with no activity logged in the last 30 days
```
```
which contacts have been in the Customer lifecycle stage for more than 90 days with no upsell deal
```
```
find all deals in the Closed Won stage where the close date was more than 6 months ago and no renewal deal exists
```
```
show me contacts whose lifecycle stage has not changed in 60 days
```
```
which customers have an open support ticket and no recent sales touchpoint
```

---

## Prospecting & Outbound

Work smarter on outbound. Let the CRM tell you who to call.

```
find all companies in [industry] with open deals under $10,000
```
```
show me my most engaged contacts in the last 14 days with no associated deal
```
```
find all contacts who opened an email in the last 7 days but have no active sequence
```
```
which leads came from the [source] channel in the last 90 days with no follow-up
```
```
show me all contacts at companies where we have a closed lost deal in the last 6 months
```

---

## Deal Reviews & Forecasting

Run your pipeline review without pulling a single report manually.

```
summarise all deals over $10,000 in the Proposal or Decision stage
```
```
what deals are closing this month and what is the total value
```
```
show me deals where the amount has changed in the last 7 days
```
```
which deals have no associated contact or company
```
```
show me my top 10 open deals by value with their current stage and last activity date
```

---

## Revenue Leak Detection

Find the gaps where pipeline silently disappears.

```
show me all deals that were moved backwards in stage in the last 30 days
```
```
find contacts who requested a demo but have no associated deal created
```
```
which deals closed lost in the last 90 days with no loss reason recorded
```
```
show me all deals where the close date has been pushed more than twice
```
```
find companies with no activity from any contact in the last 60 days
```

---

## Quick CRM Actions

Things you used to log by hand.

```
create a contact for [Name] at [Company], email [email]
```
```
move the [Company] deal to [Stage] stage
```
```
log a note on the [Company] deal: "[note text]"
```
```
assign the [Company] deal to [owner name]
```
```
update the close date on the [Company] deal to [date]
```

---

## Pipeline OS Module Map

Each skill set above maps to a Pipeline OS module. If you want the full automation layer — HubSpot properties, workflows, and write-back — built for your portal:

| Skill Set | Pipeline OS Module |
|---|---|
| Pipeline Health | M13 — Pipeline Hygiene Engine |
| ICP Qualification | M12 — ICP Scoring Engine |
| Churn & Lifecycle | M10 — Customer Lifecycle Engine |
| Prospecting & Outbound | M16 — Sales Nav Lead Engine |
| Deal Reviews | M13 — Revenue Forecast Model |
| Revenue Leak Detection | M10 — Revenue Leak Finder |

→ [Learn more about Pipeline OS](https://github.com/Pratikm19/hubspot-mcp)

---

*Built by [Pratik Mehta](https://www.linkedin.com/in/pratikm19) — RevOps consultant specialising in HubSpot-native automation for B2B SaaS.*
