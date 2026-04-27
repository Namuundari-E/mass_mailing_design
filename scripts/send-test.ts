import { Resend } from 'resend';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendMail() {
  const { data, error } = await resend.emails.send({
    from: 'Insight Research <onboarding@resend.dev>',
    to: ['namuundari.nmn@gmail.com'],
    subject: 'AI-ийн Шинэ Ирээдүй: Egune API',
    html: `
      <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#0a0a0a" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; mso-table-lspace:0pt; mso-table-rspace:0pt;">
        <tr>
          <td align="center" style="padding: 20px 0;">
            <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #111111; border-radius: 16px; overflow: hidden; border: 1px solid #222222;">
              
              <!-- Header -->
              <tr>
                <td align="center" style="padding: 30px 20px;">
                  <h2 style="margin: 0; color: #ffffff; font-size: 20px; letter-spacing: 2px; text-transform: uppercase;">Insight Research</h2>
                </td>
              </tr>
              
              <!-- Hero GIF -->
              <tr>
                <td align="center" style="line-height: 0;">
                  <img src="https://www.g-insight.mn/video.gif" alt="Egune AI" width="600" style="display: block; width: 100%; max-width: 600px; height: auto; border: 0;" />
                </td>
              </tr>

              <!-- Main Content -->
              <tr>
                <td align="center" style="padding: 48px 32px;">
                  <h1 style="font-size: 38px; line-height: 1.1; color: #ffffff; margin: 0 0 20px 0; font-weight: bold;">AI-ийн Шинэ Ирээдүй:<br/>Egune API-г Нээгээрэй</h1>
                  <p style="font-size: 18px; line-height: 1.5; color: #a0a0a0; margin: 0 0 32px 0;">Egune AI API таны бизнесийг хэрхэн өөрчлөхийг мэдэх үү?</p>
                  
                  <!-- Button -->
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" bgcolor="#ffffff" style="border-radius: 50px;">
                        <a href="https://www.g-insight.mn" target="_blank" style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; color: #000000; text-decoration: none; padding: 18px 40px; border-radius: 50px; border: 1px solid #ffffff; display: inline-block; font-weight: bold;">Дэлгэрэнгүй унших</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td align="center" style="padding: 30px 24px; border-top: 1px solid #222222; color: #666666; font-size: 11px;">
                  <p style="margin: 0; letter-spacing: 1px;">© 2026 INSIGHT RESEARCH. ALL RIGHTS RESERVED.</p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    `,
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
}

sendMail();
