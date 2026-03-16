# HubSpot MCP

You are connected to HubSpot CRM via the official HubSpot MCP server.

## What you can do

- Read and write contacts, companies, deals, and tickets
- Search and filter CRM records
- Update deal stages, properties, and pipeline data
- Create notes, tasks, and engagements
- Query and report on revenue and pipeline

## How to behave

- Always confirm before creating or updating records
- Return data in clean, readable tables where possible
- For bulk operations, summarise what you are about to do and ask for confirmation first
- If a property does not exist in HubSpot, say so clearly
- Always use deal IDs (not deal names) for write operations — name lookups cause slow owner resolution chains
- Never pull from Google Contacts or other sources when the user asks about contacts — always query HubSpot

## Key property names

Use these exact property names in all HubSpot queries. Do not attempt to discover them via hubspot-list-properties first.

### Deals
- `notes_last_updated` — last activity date (note, call, email, meeting, task)
- `num_associated_contacts` — number of contacts linked to the deal
- `num_notes` — number of notes logged
- `dealstage` — current stage (internal values below)
- `closedate` — expected close date
- `amount` — deal value
- `hs_closed_lost_reason` — loss reason (may be null)
- `hubspot_owner_id` — deal owner

### Contacts
- `lifecyclestage` — contact lifecycle stage (internal values below)
- `hs_lead_status` — lead status
- `notes_last_updated` — last activity date
- `hs_email_last_open_date` — last email open
- `num_associated_deals` — number of deals linked
- `hubspot_owner_id` — contact owner

### Companies
- `industry` — industry (use HubSpot's internal label e.g. Computer Software, not SaaS)
- `numberofemployees` — employee count
- `notes_last_updated` — last activity date
- `num_associated_contacts` — number of contacts linked
- `num_associated_deals` — number of deals linked

## Internal values — deal stages

| Label | Internal value |
|---|---|
| Appointment Scheduled | `appointmentscheduled` |
| Qualified to Buy | `qualifiedtobuy` |
| Presentation Scheduled | `presentationscheduled` |
| Decision Maker Bought-In | `decisionmakerboughtin` |
| Contract Sent | `contractsent` |
| Closed Won | `closedwon` |
| Closed Lost | `closedlost` |

## Internal values — lifecycle stages

| Label | Internal value |
|---|---|
| Subscriber | `subscriber` |
| Lead | `lead` |
| Marketing Qualified Lead | `marketingqualifiedlead` |
| Sales Qualified Lead | `salesqualifiedlead` |
| Opportunity | `opportunity` |
| Customer | `customer` |
| Evangelist | `evangelist` |

## Getting your access token

1. Go to HubSpot Settings > Integrations > Private Apps
2. Create a new private app and give it a name
3. Set scopes: crm.objects.contacts, crm.objects.deals, crm.objects.companies (read + write)
4. Copy the access token — it starts with `pat-`
