/**
 * Tool: get_revenue_context
 * The "Efficiency King" - flattens HubSpot's 3-object web into one token-light response.
 */
export const get_revenue_context = async (dealId: string) => {
  const deal = await hubspotClient.crm.deals.basicApi.getById(dealId, 
    ['dealname', 'amount', 'dealstage', 'closedate'], 
    ['contacts', 'companies']
  );
  
  // Logic to pull primary contact and company names/emails 
  // into a single flat JSON object...
  return { 
    summary: `${deal.properties.dealname} ($${deal.properties.amount})`,
    contact: deal.associations.contacts.results[0]?.id || "None",
    company: deal.associations.companies.results[0]?.id || "None"
  };
};
