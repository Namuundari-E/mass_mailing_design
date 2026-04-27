import { Resend } from 'resend';
import * as dotenv from 'dotenv';
import path from 'path';
// to run 
// npx tsx scripts/send-test.ts
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);
const heroGifPath = path.resolve(process.cwd(), 'public/video-ezgif.com-resize.gif');
const heroGifContentId = 'egune-hero-gif';

async function sendMail() {
  const { data, error } = await resend.emails.send({
    from: 'Insight Research <marketing@mail.g-insight.mn>',
    to: ['namuundari.nmn@gmail.com'],
    subject: 'AI-ийн Шинэ Ирээдүй: Egune API',
    html: `
      <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f4f4f7" style="background-color: #f4f4f7;">
        <tr>
          <td align="center" style="padding: 40px 0;">
            <table width="600" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
              
              <!-- Hero Image -->
              <tr>
                <td align="center" style="line-height: 0;">
                  <img src="cid:${heroGifContentId}" alt="Egune AI" width="600" style="display: block; width: 100%; max-width: 600px; height: auto; border: 0;" />
                </td>
              </tr>

              <!-- Header -->
              <tr>
                <td align="left" style="padding: 40px 40px 20px 40px;">
                  <span style="color: #000000; font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">Insight Research</span>
                  <h1 style="color: #111111; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 36px; line-height: 1.2; font-weight: bold; margin: 16px 0 0 0;">AI-ийн Шинэ Ирээдүй:<br/>Egune API</h1>
                             <!-- Section 01 -->
              <tr>
                <td style="padding: 20px 40px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="40" valign="top" style="font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; color: #34C759;">01</td>
                      <td style="padding-left: 15px;">
                        <h2 style="color: #111111; font-family: Arial, sans-serif; font-size: 22px; margin: 0 0 12px 0;">Egune AI API гэж юу вэ?</h2>
                        <p style="color: #444444; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6; margin: 0;">
                          Орчин үеийн дижитал ертөнцөд хиймэл оюун ухаан (AI) нь бизнесийн салбарт хувьсгал хийж байна. Egune AI API нь энэхүү хүчирхэг технологийг таны үйлчилгээ, програмд хялбархан нэгтгэх боломжийг олгодог дэвшилтэт шийдэл юм.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Section 02 -->
              <tr>
                <td style="padding: 20px 40px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="40" valign="top" style="font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; color: #34C759;">02</td>
                      <td style="padding-left: 15px;">
                        <h2 style="color: #111111; font-family: Arial, sans-serif; font-size: 22px; margin: 0 0 12px 0;">Боломжууд ба Ирээдүйн Өөрчлөлт</h2>
                        <p style="color: #444444; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6; margin: 0;">
                          Egune AI API-ийг ашиглан та хэрэглэгчийн үйлчилгээг автоматжуулах, өгөгдөл шинжлэх, контент үүсгэх, хувийн тохиргоотой зөвлөмж өгөх зэрэг олон төрлийн шийдлүүдийг хэрэгжүүлэх боломжийг олгодог.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Tip Callout -->
              <tr>
                <td style="padding: 30px 40px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#F0FFF4" style="border-left: 4px solid #34C759; border-radius: 4px;">
                    <tr>
                      <td style="padding: 20px;">
                        <p style="color: #1b5e20; font-family: Arial, sans-serif; font-size: 15px; line-height: 1.6; margin: 0; font-weight: 500;">
                          💡 Egune AI API нь хиймэл оюун ухааныг бизнест нэвтрүүлэх үйл явцыг хялбарчилж, цаг хугацаа болон нөөцийг хэмнэнэ.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Fun Fact Card -->
              <tr>
                <td align="center" style="padding: 20px 40px 40px 40px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#111111" style="border-radius: 8px;">
                    <tr>
                      <td style="padding: 30px; text-align: center;">
                        <span style="color: #34C759; font-family: Arial, sans-serif; font-size: 12px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">Fun Fact</span>
                        <p style="color: #ffffff; font-family: Arial, sans-serif; font-size: 18px; line-height: 1.5; margin: 12px 0 0 0;">
                          Дэлхийн томоохон компаниудын 80 гаруй хувь нь өнөөдөр ямар нэгэн хэлбэрээр AI API ашиглаж байна.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Dark Footer Section -->
              <tr>
                <td align="center" bgcolor="#0a0a0a" style="padding: 60px 40px; background-color: #0a0a0a;">
                  <!-- Footer Logo -->
                  <div style="margin-bottom: 30px;">
                    <span style="color: #ffffff; font-family: 'Times New Roman', Times, serif; font-size: 32px; font-weight: bold;">Insight Research</span>
                  </div>

                  <!-- Social Icons -->
                  <table border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                    <tr>
                      <td style="padding: 0 10px;">
                        <a href="https://www.instagram.com/insight_research_company/"><img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" width="24" height="24" alt="IG" style="border: 1px solid #333; padding: 10px; border-radius: 50%;" /></a>
                      </td>
                      <td style="padding: 0 10px;">
                        <a href="https://www.facebook.com/insightresearchmn"><img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" width="24" height="24" alt="FB" style="border: 1px solid #333; padding: 10px; border-radius: 50%;" /></a>
                      </td>
                      <td style="padding: 0 10px;">
                        <a href="https://www.g-insight.mn/"><img src="https://img.icons8.com/ios-filled/50/ffffff/internet.png" width="24" height="24" alt="Web" style="border: 1px solid #333; padding: 10px; border-radius: 50%;" /></a>
                      </td>
                    </tr>
                  </table>

                  <!-- Footer Text -->
                  <p style="color: #888888; font-family: Arial, sans-serif; font-size: 14px; line-height: 1.5; margin: 0 0 20px 0;">
                    Энэ имэйлийг бид танд мэдээллийн товхимолд бүртгүүлсэн учир илгээж байна.
                  </p>

  

                  <!-- Copyright -->
                  <p style="margin: 0; color: #444444; font-family: Arial, sans-serif; font-size: 11px; letter-spacing: 1px;">
                    © 2026 INSIGHT RESEARCH. ALL RIGHTS RESERVED.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    `,
    attachments: [
      {
        filename: 'video-ezgif.com-resize.gif',
        path: heroGifPath,
        contentId: heroGifContentId,
      },
    ],
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
}

sendMail();
