import nodemailer from 'nodemailer'

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

function validateField(value) {
  return typeof value === 'string' && value.trim().length > 0
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: 'Method not allowed.' })
  }

  const { name, phone, email, city } = req.body || {}

  if (![name, phone, email, city].every(validateField)) {
    return res.status(400).json({ message: 'Name, number, email, and city are required.' })
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.CONTACT_TO_EMAIL) {
    return res.status(500).json({ message: 'Email service is not configured yet.' })
  }

  try {
    const transporter = getTransporter()
    const fromAddress = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER

    await transporter.sendMail({
      from: fromAddress,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email.trim(),
      subject: `New consultation inquiry from ${name.trim()}`,
      text: [
        `Name: ${name.trim()}`,
        `Number: ${phone.trim()}`,
        `Email: ${email.trim()}`,
        `City: ${city.trim()}`,
      ].join('\n'),
      html: `
        <div style="font-family:Segoe UI,Tahoma,sans-serif;line-height:1.7;color:#0f172a;max-width:640px">
          <h2 style="margin-bottom:16px;color:#1f4fc9">New Consultation Inquiry</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:10px 0;font-weight:700">Name</td><td style="padding:10px 0">${name.trim()}</td></tr>
            <tr><td style="padding:10px 0;font-weight:700">Number</td><td style="padding:10px 0">${phone.trim()}</td></tr>
            <tr><td style="padding:10px 0;font-weight:700">Email</td><td style="padding:10px 0">${email.trim()}</td></tr>
            <tr><td style="padding:10px 0;font-weight:700">City</td><td style="padding:10px 0">${city.trim()}</td></tr>
          </table>
        </div>
      `,
    })

    return res.status(200).json({ message: 'Your inquiry has been sent successfully.' })
  } catch (error) {
    return res.status(500).json({ message: 'Unable to send your inquiry right now.' })
  }
}