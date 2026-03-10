# 🚀 Harishere.com Portfolio - Production Deployment Guide

## 📋 Server Setup Commands

### 1. Initial Server Setup
```bash
# Clone repository
git clone git@github.com:harisxcyber/harishere.com.git /var/www/harishere.com
cd /var/www/harishere.com

# Install Node.js (if not installed)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install dependencies
npm install --production
```

### 2. Environment Configuration
```bash
# Create production environment file
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
```

### 3. Build and Deploy
```bash
# Build production version
npm run build

# Start with nohup (background process)
nohup npm start > /var/log/harishere.log 2>&1 &
```

## 🔄 Deployment Commands (Run on Server)

### Quick Deploy (Pull + Restart)
```bash
cd /var/www/harishere.com
git pull origin main
pkill -f "node server.js"
npm install --production
npm run build
nohup npm start > /var/log/harishere.log 2>&1 &
```

### Using Deploy Script
```bash
cd /var/www/harishere.com
./deploy.sh
```

## 🛠️ Management Commands

### Check Status
```bash
# Check if process is running
ps aux | grep "node server.js"

# Check logs
tail -f /var/log/harishere.log

# Check port usage
netstat -tlnp | grep :3000
```

### Stop Application
```bash
# Kill all harishere processes
pkill -f "node server.js"
pkill -f "harishere"
```

### Restart Application
```bash
# Stop and start
pkill -f "node server.js"
cd /var/www/harishere.com
nohup npm start > /var/log/harishere.log 2>&1 &
```

## 🔧 Nginx Configuration (Optional)

If using Nginx as reverse proxy:

```nginx
server {
    listen 80;
    server_name harishere.com www.harishere.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 📊 Monitoring

### PM2 Alternative (Recommended for Production)
```bash
# Install PM2
npm install -g pm2

# Start with PM2
pm2 start server.js --name "harishere"

# Save PM2 configuration
pm2 save
pm2 startup

# Monitor
pm2 status
pm2 logs harishere
pm2 restart harishere
```

## 🔐 Security Notes

1. **Environment Variables**: Never commit `.env.production` to Git
2. **SMTP Password**: Use Gmail App Password, not regular password
3. **File Permissions**: Ensure proper file permissions on server
4. **Firewall**: Configure firewall to allow only necessary ports

## 📝 Troubleshooting

### Common Issues
1. **Port 3000 in use**: `sudo lsof -ti:3000 | xargs kill -9`
2. **Permission denied**: `sudo chown -R $USER:$USER /var/www/harishere.com`
3. **Build fails**: Check Node.js version (requires 16+)
4. **Email not working**: Verify Gmail App Password and 2FA settings

### Log Locations
- Application logs: `/var/log/harishere.log`
- PM2 logs: `~/.pm2/logs/`
- System logs: `/var/log/syslog`
