import { onRequest } from 'firebase-functions/v2/https'
import { defineSecret } from 'firebase-functions/params'
import nodemailer from 'nodemailer'

const smtpHost = defineSecret('SMTP_HOST')
const smtpPort = defineSecret('SMTP_PORT')
const smtpSecure = defineSecret('SMTP_SECURE')
const smtpUser = defineSecret('SMTP_USER')
const smtpPass = defineSecret('SMTP_PASS')
const contactToEmail = defineSecret('CONTACT_TO_EMAIL')
const contactFromEmail = defineSecret('CONTACT_FROM_EMAIL')

function validateField(value) {
  return typeof value === 'string' && value.trim().length > 0
}

export const contact = onRequest(
  {
    region: 'us-central1',
    secrets: [
      smtpHost,
      smtpPort,
      smtpSecure,
      smtpUser,
      smtpPass,
      contactToEmail,
      contactFromEmail,
    ],
  },
  async (req, res) => {
    if (req.method !== 'POST') {
      res.set('Allow', 'POST')
      res.status(405).json({ message: 'Method not allowed.' })
      return
    }

    const { name, phone, email, city } = req.body || {}

    if (![name, phone, email, city].every(validateField)) {
      res.status(400).json({ message: 'Name, number, email, and city are required.' })
      return
    }

    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost.value(),
        port: Number(smtpPort.value() || 587),
        secure: smtpSecure.value() === 'true',
        auth: {
          user: smtpUser.value(),
          pass: smtpPass.value(),
        },
      })

      await transporter.sendMail({
        from: contactFromEmail.value() || smtpUser.value(),
        to: contactToEmail.value(),
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

      res.status(200).json({ message: 'Your inquiry has been sent successfully.' })
    } catch {
      res.status(500).json({ message: 'Unable to send your inquiry right now.' })
    }
  },
)