# SMTP Setup for Contact Form

To make the contact form work, add these to your `.env.local` file:

## Option 1: Gmail (Recommended)

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification
3. Go to App Passwords
4. Generate a new app password for "Mail"
5. Add to `.env.local`:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-digit-app-password
```

## Option 2: Free SMTP Services

### SendGrid
- Sign up at sendgrid.com
- Get API key
- Use: `smtp.sendgrid.net`, port `587`

### Brevo (Sendinblue)
- Sign up at brevo.com
- Get SMTP credentials
- Use: `smtp-relay.brevo.com`, port `587`

## Test the Form

After adding credentials, restart the server and test the contact form!
