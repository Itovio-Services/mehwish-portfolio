# harishere.com — Next.js Portfolio

A professional multi-page portfolio built with Next.js.

## Pages
- `/` — Home (hero, skills, featured projects, CTA)
- `/services` — Full services breakdown (6 services)
- `/projects` — All projects with status badges
- `/about` — Story, timeline, tech stack
- `/contact` — Contact form + contact methods

## Features
- AI assistant widget (bottom-right chat bubble)
- Scroll reveal animations
- Fully responsive
- Dark theme with violet accent
- Custom fonts (Clash Display + Cabinet Grotesk)

## Setup

### 1. Install dependencies
npm install

### 2. Run locally
npm run dev
Then open http://localhost:3000

### 3. AI Assistant Setup
The chat widget calls `/api/chat` which hits the Anthropic API.
Create a `.env.local` file:
ANTHROPIC_API_KEY=your_key_here

Then update `pages/api/chat.js` to read the key:
headers: { 'x-api-key': process.env.ANTHROPIC_API_KEY, ... }

### 4. Contact Form
The form currently simulates submission.
To make it real, sign up at formspree.io, get your form ID,
and replace the handleSubmit function in `pages/contact.js`:

fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: JSON.stringify(form),
  headers: { 'Content-Type': 'application/json' }
})

## Deployment Options

### Option A — Vercel (Recommended, Free)
1. Push this folder to a GitHub repository
2. Go to vercel.com, import the repo
3. Add ANTHROPIC_API_KEY as an environment variable
4. Deploy — Vercel handles everything including the API routes

### Option B — Static Export for CrocWeb Hosting
Note: Static export disables the AI chat API route.
To host on CrocWeb without the AI feature:
npm run build  (with output: 'export' in next.config.js)
Upload the contents of the `out/` folder to public_html

### Option C — Render (Free tier)
1. Push to GitHub
2. Create a new Web Service on render.com
3. Build command: npm install && npm run build
4. Start command: npm start
5. Add ANTHROPIC_API_KEY environment variable

## Customization Checklist
- [ ] Replace "Add Your Photo" placeholder in about.js with real image
- [ ] Update LinkedIn URL in Navbar.js and Footer.js
- [ ] Update email address (currently haris@harishere.com)
- [ ] Add real project screenshots to /public/projects/
- [ ] Set ANTHROPIC_API_KEY for AI chat to work
- [ ] Connect contact form to Formspree
- [ ] Update social links in Footer.js
