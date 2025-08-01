const express = require("express");
const router = express.Router();
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const msg = {
    to: process.env.RECEIVER_EMAIL, // Your email (where you receive messages)
    from: process.env.RECEIVER_EMAIL, // Your verified sender email (must be registered in SendGrid)
    replyTo: email, // User's email (so you can reply to them)
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong, try again later!" });
  }
});

module.exports = router;