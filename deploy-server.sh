#!/bin/bash

# Server deployment script (builds on server)
echo "🚀 Deploying harishere.com..."

# Navigate to app directory
cd /home/harishere/domains/harishere.com/app

# Stop existing processes
echo "🔄 Stopping existing processes..."
pkill -f "node server.js" || true
pkill -f "harishere" || true

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Create environment file
echo "⚙️  Setting up environment..."
cat > .env.production << 'EOF'
NODE_ENV=production
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=muhammadharissahabb@gmail.com
SMTP_PASS=duzmnrtqqldxyjvq
EMAIL_FROM=muhammadharissahabb@gmail.com
EMAIL_TO=muhammadharissahabb@gmail.com
PORT=3000
EOF

# Find node executable
NODE_PATH=$(which node 2>/dev/null || find /usr -name "node" 2>/dev/null | head -1 || echo "/usr/bin/node")

echo "🚀 Starting application with $NODE_PATH..."
nohup $NODE_PATH server.js > ../logs/harishere.log 2>&1 &

sleep 3
echo "✅ Deployment complete!"
echo "📋 Check logs: tail -f ../logs/harishere.log"
echo "🔍 Check process: ps aux | grep 'node server.js'"
