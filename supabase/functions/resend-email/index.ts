import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const RESEND_API_KEY = Deno.env.get('NEXT_PUBLIC_RESEND_API_KEY')!


Deno.serve(async (req) => {


  const { to, subject, html } = await req.json()

  const body = await req.json();

  // Accept either a single email or an array of emails
  const emails = Array.isArray(body)
    ? body
    : [body];
  
  const results = await Promise.all(
    emails.map(async (email) => {
      const { to, subject, html } = email;
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'Sharon<team@info.cyvil.com>',
          to,
          subject,
          html,
        }),
      })
    }) )

  return new Response(JSON.stringify(results), {
    headers: { 'Content-Type': 'application/json' },
  })
})