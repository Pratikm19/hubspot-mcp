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
- `num_associated_deals`
