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
show me my total HubSpot open pipeline value broken down by dealstage
```
**What to look for:** Any stage with unusually high value or deal count. That's where you start digging.

---

### Step 2 — Find the stale deals
```
show me all HubSpot deals where notes_last_updated is before [YYYY-MM-DD, 14 days ago] and dealstage is not closedwon or closedlost, ordered by amount
```
**What to look for:** High-value deals going cold. These need immediate action before Monday is over.

---

### Step 3 — Catch the stuck deals
```
show me all HubSpot deals in [stage name] stage
```
Run once per open stage. Compare against last week's count — any stage growing is a signal.

**What to look for:** Deals that haven't moved. Either they're dead and need to be closed lost, or they're blocked and need a next step.

---

### Step 4 — Flag the overdue closes
```
show me all HubSpot deals where closedate is before [today's date as YYYY-MM-DD] and dealstage is not closedwon or closedlost
```
**What to look for:** Any deal here is a forecast problem. Update the close date or close it out.

---

### Step 5 — Check for missing contacts
```
show me all HubSpot deals where num_associated_contacts is 0 and dealstage is not closedwon or closedlost
```
**What to look for:** Open deals with no contact attached — these are CRM hygiene problems and forecast risks. Assign a contact or close them out.

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
