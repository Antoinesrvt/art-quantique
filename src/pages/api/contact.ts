import type { APIRoute } from 'astro';
import { sendEmail } from '../../utils/email';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const result = await sendEmail(data);

    if (result.success) {
      return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
        status: 200
      });
    } else {
      return new Response(JSON.stringify({ error: result.error }), {
        status: 500
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500
    });
  }
};