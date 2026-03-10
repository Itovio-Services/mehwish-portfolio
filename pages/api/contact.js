import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, service, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER || 'muhammadharissahabb@gmail.com',
      pass: process.env.SMTP_PASS || 'duzmnrtqqldxyjvq',
    },
  });

  try {
    await transporter.sendMail({
      from: `"Haris Portfolio Contact" <${process.env.EMAIL_FROM || 'muhammadharissahabb@gmail.com'}>`,
      to: process.env.EMAIL_TO || 'muhammadharissahabb@gmail.com',
      replyTo: email,
      subject: `Portfolio Contact: ${service || 'General Inquiry'}`,
      html: `
        <h2>New Contact Form Submission from harishere.com</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service || 'General Inquiry'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>Sent from harishere.com contact form</small></p>
      `,
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}
