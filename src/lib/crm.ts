export type LeadPayload = {
  name: string;
  email: string;
  message?: string;
  company?: string;
};

export async function createLead(payload: LeadPayload) {
  console.info("CRM placeholder payload", payload);
  return { ok: true };
}
