
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend("re_8g2Dy3ox_PcUaPtaqwKu48dHW1CtbJQzG");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  inquiryType: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    
    // Format the message
    const { name, email, company, phone, inquiryType, message } = formData;
    
    const emailResponse = await resend.emails.send({
      from: "Gorantla Infotech <notifications@gorantlainfotech.com>",
      to: ["info@gorantlainfotech.com"],
      subject: `New Contact Form Submission: ${inquiryType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #e0e0e0; margin-bottom: 20px;">
            <h2 style="color: #4A5AEF; margin: 0;">New Contact Form Submission</h2>
            <p style="color: #8C52FF; font-weight: bold; margin: 5px 0 0 0;">${inquiryType}</p>
          </div>
          
          <div style="margin-bottom: 15px;">
            <p style="font-weight: bold; margin-bottom: 5px;">From:</p>
            <p style="margin: 0; padding: 10px; background-color: #f9f9f9; border-left: 4px solid #4A5AEF;">${name} &lt;${email}&gt;</p>
          </div>
          
          ${company ? `
          <div style="margin-bottom: 15px;">
            <p style="font-weight: bold; margin-bottom: 5px;">Company:</p>
            <p style="margin: 0; padding: 10px; background-color: #f9f9f9; border-left: 4px solid #4A5AEF;">${company}</p>
          </div>
          ` : ''}
          
          ${phone ? `
          <div style="margin-bottom: 15px;">
            <p style="font-weight: bold; margin-bottom: 5px;">Phone:</p>
            <p style="margin: 0; padding: 10px; background-color: #f9f9f9; border-left: 4px solid #4A5AEF;">${phone}</p>
          </div>
          ` : ''}
          
          <div style="margin-bottom: 15px;">
            <p style="font-weight: bold; margin-bottom: 5px;">Message:</p>
            <div style="padding: 15px; background-color: #f9f9f9; border-left: 4px solid #8C52FF; white-space: pre-wrap;">${message}</div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
            <p>This is an automated message from your website contact form.</p>
            <p>© ${new Date().getFullYear()} Gorantla Infotech. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
