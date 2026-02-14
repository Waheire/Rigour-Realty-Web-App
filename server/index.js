import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();

const app = express();
const port = Number(process.env.API_PORT || 3001);

const requiredEnv = ["SENDGRID_API_KEY", "SENDGRID_FROM_EMAIL", "NOTIFICATION_EMAIL"];
const missingEnv = requiredEnv.filter((key) => !process.env[key]);

if (missingEnv.length > 0) {
  console.warn(`Missing required env vars: ${missingEnv.join(", ")}`);
}

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

app.use(
  cors({
    origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",").map((v) => v.trim()) : true,
  }),
);
app.use(express.json());

const formatReference = () => `RR-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

const isEmail = (value) => typeof value === "string" && /\S+@\S+\.\S+/.test(value);

const sendEmail = async ({ subject, text, html, replyTo }) => {
  await sgMail.send({
    to: process.env.NOTIFICATION_EMAIL,
    from: process.env.SENDGRID_FROM_EMAIL,
    subject,
    text,
    html,
    replyTo,
  });
};

app.post("/api/contact", async (req, res) => {
  try {
    const { name, phone, email, service, message } = req.body || {};
    if (!name || !phone || !email || !message || !isEmail(email)) {
      return res.status(400).json({ error: "Please provide valid name, phone, email, and message." });
    }

    const subject = `New Contact Form Message - ${name}`;
    const text = [
      "New contact form submission",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service: ${service || "Not selected"}`,
      "",
      "Message:",
      message,
    ].join("\n");
    const html = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service:</strong> ${service || "Not selected"}</p>
      <p><strong>Message:</strong></p>
      <p>${String(message).replace(/\n/g, "<br/>")}</p>
    `;

    await sendEmail({ subject, text, html, replyTo: email });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact email send failed:", error);
    return res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

app.post("/api/quote", async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      location,
      budget,
      timeline,
      details,
      selectedServices,
      selectedServiceTitles,
    } = req.body || {};

    if (!name || !phone || !email || !location || !isEmail(email)) {
      return res.status(400).json({ error: "Please provide valid contact and project details." });
    }

    const reference = formatReference();
    const servicesText = Array.isArray(selectedServiceTitles) && selectedServiceTitles.length > 0
      ? selectedServiceTitles.join(", ")
      : Array.isArray(selectedServices) && selectedServices.length > 0
        ? selectedServices.join(", ")
        : "None selected";

    const subject = `New Quote Request ${reference} - ${name}`;
    const text = [
      `Reference: ${reference}`,
      "New quote request submission",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Location: ${location}`,
      `Budget: ${budget || "N/A"}`,
      `Timeline: ${timeline || "N/A"}`,
      `Services: ${servicesText}`,
      "",
      "Project details:",
      details || "N/A",
    ].join("\n");
    const html = `
      <h2>New quote request</h2>
      <p><strong>Reference:</strong> ${reference}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Budget:</strong> ${budget || "N/A"}</p>
      <p><strong>Timeline:</strong> ${timeline || "N/A"}</p>
      <p><strong>Services:</strong> ${servicesText}</p>
      <p><strong>Project details:</strong></p>
      <p>${String(details || "N/A").replace(/\n/g, "<br/>")}</p>
    `;

    await sendEmail({ subject, text, html, replyTo: email });
    return res.status(200).json({ ok: true, reference });
  } catch (error) {
    console.error("Quote email send failed:", error);
    return res.status(500).json({ error: "Failed to submit quote request. Please try again." });
  }
});

app.get("/api/health", (_, res) => {
  res.status(200).json({ ok: true });
});

app.listen(port, () => {
  console.log(`Email API running on http://localhost:${port}`);
});
