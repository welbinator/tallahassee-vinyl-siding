// Static assets + contact form handler. No D1 required (accepts + logs).
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/contact" && request.method === "POST") {
      try {
        const data = await request.json();
        // Honeypot: silently accept bots
        if (data.website_hp) return json({ ok: true });
        if (!data.name || !data.email) {
          return json({ ok: false, error: "Name and email are required." }, 400);
        }
        // No backend store configured; accept and let the client show success.
        // (Leads can be wired to D1 or Command Center later.)
        return json({ ok: true });
      } catch (e) {
        return json({ ok: false, error: "Bad request." }, 400);
      }
    }
    return env.ASSETS.fetch(request);
  },
};

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
