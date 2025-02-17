import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import validator from "validator";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (
      !name?.trim() ||
      !email?.trim() ||
      !subject?.trim() ||
      !message?.trim() ||
      message.length > 500 ||
      !validator.isEmail(email)
    ) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `<${validator.escape(email)}>`,
      to: process.env.GMAIL_USER,
      subject: validator.escape(subject),
      text: `Name: ${validator.escape(
        name
      )}\nEmail: ${email}\n\nMessage:\n${validator.escape(message)}`,
      html: `<p><strong>Name:</strong> ${validator.escape(
        name
      )}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><p><strong>Message:</strong> ${validator.escape(
        message
      )}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
