import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const CONTACT_EMAIL = "feedingthefutureproject@capitalcityroofing.net";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, category, message } = body;

        // Validate required fields
        if (!name || !email || !category || !message) {
            return NextResponse.json(
                { error: "Please fill out all required fields." },
                { status: 400 }
            );
        }

        // Build the email content
        const subject = `[FFP Website] New ${category} Inquiry from ${name}`;
        const htmlBody = `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #102a43; border-bottom: 2px solid #627d98; padding-bottom: 12px;">
                    New Website Inquiry
                </h2>
                <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
                    <tr>
                        <td style="padding: 8px 12px; font-weight: bold; color: #334e68; width: 140px; vertical-align: top;">Name</td>
                        <td style="padding: 8px 12px; color: #102a43;">${escapeHtml(name)}</td>
                    </tr>
                    <tr style="background: #f0f4f8;">
                        <td style="padding: 8px 12px; font-weight: bold; color: #334e68; vertical-align: top;">Email</td>
                        <td style="padding: 8px 12px; color: #102a43;">
                            <a href="mailto:${escapeHtml(email)}" style="color: #486581;">${escapeHtml(email)}</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 12px; font-weight: bold; color: #334e68; vertical-align: top;">Phone</td>
                        <td style="padding: 8px 12px; color: #102a43;">${phone ? escapeHtml(phone) : "Not provided"}</td>
                    </tr>
                    <tr style="background: #f0f4f8;">
                        <td style="padding: 8px 12px; font-weight: bold; color: #334e68; vertical-align: top;">Inquiry Type</td>
                        <td style="padding: 8px 12px; color: #102a43;">${escapeHtml(category)}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 12px; font-weight: bold; color: #334e68; vertical-align: top;">Message</td>
                        <td style="padding: 8px 12px; color: #102a43; white-space: pre-wrap;">${escapeHtml(message)}</td>
                    </tr>
                </table>
                <hr style="margin-top: 24px; border: none; border-top: 1px solid #d9e2ec;" />
                <p style="font-size: 12px; color: #829ab1; margin-top: 12px;">
                    This message was sent from the Feeding the Future Project website contact form.
                </p>
            </div>
        `;

        const textBody = `
New Website Inquiry — ${category}

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Inquiry Type: ${category}

Message:
${message}

---
Sent from the Feeding the Future Project website contact form.
        `.trim();

        // Configure email transport
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: parseInt(process.env.SMTP_PORT || "587"),
            secure: process.env.SMTP_SECURE === "true",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Send the email
        await transporter.sendMail({
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: CONTACT_EMAIL,
            replyTo: email,
            subject,
            text: textBody,
            html: htmlBody,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again or email us directly." },
            { status: 500 }
        );
    }
}

function escapeHtml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
