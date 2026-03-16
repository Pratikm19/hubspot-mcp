# Monday Pipeline Review

**Goal:** Full pipeline health check in 10 minutes before your week starts.
**Replaces:** 2 hours of manual CRM trawling every Monday morning.
**Pipeline OS module:** M13 — Pipeline Hygiene Engine

---

## The Workflow

Run these prompts in order. Each one builds on the last.

---

### Step 1 — Get the lay of the land
```
show me my total open pipeline value broken down by stage
```
**What to look for:** Any stage with unusually high value or deal count. That's where you start digging.

---

### Step 2 — Find the stale deals
```
show me all deals with no activity logged in the last 14 days, ordered by deal value
```
**What to look for:** High-value deals going cold. These need immediate action before Monday is over.

---

### Step 3 — Catch the stuck deals
```
which deals have been in the same stage for more than 21 days
```
**What to look for:** Deals that haven't moved. Either they're dead and need to be closed lost, or they're blocked and need a next step.

---

### Step 4 — Flag the overdue closes
```
show me all deals with a close date in the past that are still open
```
**What to look for:** Any deal here is a forecast problem. Update the close date or close it out.

---

### Step 5 — Check for missing next steps
```
show me all deals in Proposal or Decision stage with no open task or next step assigned
```
**What to look for:** Active deals with no owner action. These are the ones most likely to slip without anyone noticing.

---

## Output

By the end of this you have:
- A complete pipeline snapshot
- A shortlist of deals needing immediate attention
- A clear action list for the week

Total time: ~10 minutes.

---

## Want this running automatically?

Pipeline OS M13 — Pipeline Hygiene Engine runs this check on a schedule, writes results back to HubSpot as deal properties, and triggers tasks automatically when deals go stale.

→ [Learn more about Pipeline OS](https://github.com/Pratikm19/hubspot-mcp)
