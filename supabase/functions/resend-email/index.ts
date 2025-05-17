const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')


const handler = async (_request: Request): Promise<Response> => {

  if (_request.method === "POST") {
  
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }
try{
   const { subject, html } = await _request.json();

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Sharon<team@resend.dev>',
      to: 'rizikinjeri@gmail.com',
      subject,
      html
    }),
  })

  const data = await res.json()


  
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });
} catch (err) {
  return new Response(
    JSON.stringify({ error: err.message }),
    { status: 500, headers: corsHeaders }
  );
}
}


const corsHeaders = {
  "Access-Control-Allow-Origin": "*", 
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

Deno.serve(handler)