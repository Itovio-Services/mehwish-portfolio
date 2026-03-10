"use strict";(()=>{var e={};e.id=170,e.ids=[170],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},1731:(e,t,a)=>{a.r(t),a.d(t,{config:()=>c,default:()=>i,routeModule:()=>l});var n={};a.r(n),a.d(n,{default:()=>handler});var s=a(1802),o=a(7153),r=a(6249);async function handler(e,t){if("POST"!==e.method)return t.status(405).end();let{messages:a}=e.body,n=`You are an AI assistant for harishere.com — a team of developers, AI engineers, and cybersecurity experts based in Karachi, Pakistan.

About the Team:
- Founded by Haris, who leads development and brings clients through personal branding
- Operating under PrecisionTechInsights (precisiontechinsights.com) as the company structure
- Built PrecisionFlow.io — an AI agent that autonomously generates crypto content for Binance Square
- Currently CEO at Itovio.com leading a team of specialists
- Runs enterprise infrastructure and white-label solutions
- 5,000+ LinkedIn followers, recognized in AI, cybersecurity, and Web3 spaces

Services We Offer:
1. Managed Web Hosting — white-label infrastructure with domains, SSL, email, web development bundles
2. AI Agent Development & Bot Integrations — autonomous agents, chatbots, content generation
3. Cybersecurity Audits — penetration testing, security assessments, compliance prep
4. Web3 & Blockchain Development — smart contracts, DeFi, NFT systems, token-gated platforms
5. Web Development — portfolio sites, business platforms, WordPress, Next.js, React
6. LinkedIn Content & Personal Branding — audience growth, AI-powered content systems

Tech Stack: Python, JavaScript, TypeScript, React, Next.js, Node.js, Django, Flask, Kali Linux, Solidity, AWS, Docker

Contact: contact@harishere.com | LinkedIn: linkedin.com/in/itisharis | WhatsApp: +923481383350 | Karachi, Pakistan

Keep responses concise, friendly, and helpful. Use "we/our team" language. If someone wants to hire us or discuss a project, direct them to the Contact page, WhatsApp, or email. Never make up pricing — direct them to contact for custom quotes.`;try{let e=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${process.env.GROQ_API_KEY}`},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:[{role:"system",content:n},...a.map(e=>({role:e.role,content:e.content}))],temperature:.7,max_tokens:500})}),s=await e.json(),o=s.choices?.[0]?.message?.content||"I'm having trouble right now. Please email contact@harishere.com directly.";t.status(200).json({reply:o})}catch(e){console.error("Groq API error:",e),t.status(500).json({reply:"Sorry, I'm experiencing technical difficulties. Please reach out via email at contact@harishere.com or WhatsApp at +923481383350."})}}let i=(0,r.l)(n,"default"),c=(0,r.l)(n,"config"),l=new s.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/chat",pathname:"/api/chat",bundlePath:"",filename:""},userland:n})}};var t=require("../../webpack-api-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[222],()=>__webpack_exec__(1731));module.exports=a})();