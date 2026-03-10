#!/bin/bash

# Portfolio Deployment Script
echo "🚀 Deploying harishere.com portfolio..."

# Navigate to project directory
cd /var/www/harishere.com || exit 1

# Kill existing processes
echo "🔄 Stopping existing processes..."
pkill -f "node server.js" || true
pkill -f "harishere" || true

# Pull latest changes
echo "📥 Pulling latest changes from GitHub..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm install --production

# Build the project
echo "🔨 Building production version..."
npm run build

# Set environment variables
echo "⚙️  Setting up environment variables..."
cat > .env.production << EOF
NODE_ENV=production
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=muhammadharissahabb@gmail.com
SMTP_PASS=duzmnrtqqldxyjvq
EMAIL_FROM=muhammadharissahabb@gmail.com
EMAIL_TO=muhammadharissahabb@gmail.com
PORT=3000
EOF

# Start the application
echo "🚀 Starting application..."
nohup npm start > /var/log/harishere.log 2>&1 &

echo "✅ Deployment complete! Portfolio is running on port 3000"
echo "📋 Check logs: tail -f /var/log/harishere.log"
echo "🔍 Check process: ps aux | grep 'node server.js'"
