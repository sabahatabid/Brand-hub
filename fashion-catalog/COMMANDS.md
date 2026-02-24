# Command Reference - PakFashion

All commands you need in one place.

## 📦 Installation

```bash
# Navigate to project
cd fashion-catalog

# Install dependencies
npm install

# Install specific package (if needed)
npm install package-name
```

## 🚀 Development

```bash
# Start development server
npm run dev

# Start on different port
npm run dev -- -p 3001

# Open in browser
# http://localhost:3000
```

## 🏗️ Build

```bash
# Create production build
npm run build

# Start production server
npm start

# Build and start
npm run build && npm start
```

## 🧹 Cleanup

```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Clear everything and start fresh
rm -rf .next node_modules
npm install
```

## 🔍 Linting

```bash
# Run ESLint
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

## 📊 Git Commands

```bash
# Initialize repository
git init

# Check status
git status

# Add all files
git add .

# Add specific file
git add filename.tsx

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# Create new branch
git checkout -b feature-name

# Switch branch
git checkout main

# View commit history
git log --oneline
```

## 🌐 GitHub Setup

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/pakfashion-catalog.git

# Verify remote
git remote -v

# Push to GitHub (first time)
git push -u origin main

# Push to GitHub (subsequent)
git push
```

## 🚢 Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs

# Remove deployment
vercel remove project-name
```

## 🔧 Environment Variables

```bash
# Create .env.local file
touch .env.local

# Edit .env.local (Windows)
notepad .env.local

# Edit .env.local (Mac/Linux)
nano .env.local

# Example .env.local content:
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
# NEXT_PUBLIC_DIALOGFLOW_AGENT_ID=your-agent-id
# NEXT_PUBLIC_SITE_URL=https://your-site.vercel.app
```

## 📱 Testing

```bash
# Run development server for testing
npm run dev

# Build for production testing
npm run build
npm start

# Check for TypeScript errors
npx tsc --noEmit

# Check for unused dependencies
npx depcheck
```

## 🔍 Debugging

```bash
# View Next.js build info
npm run build -- --debug

# Clear port (if in use)
npx kill-port 3000

# Check Node version
node --version

# Check npm version
npm --version

# Check Next.js version
npx next --version
```

## 📦 Package Management

```bash
# Update all packages
npm update

# Update specific package
npm update package-name

# Check for outdated packages
npm outdated

# Install latest Next.js
npm install next@latest

# Install latest React
npm install react@latest react-dom@latest

# Remove package
npm uninstall package-name
```

## 🎨 Tailwind CSS

```bash
# Rebuild Tailwind (if needed)
npx tailwindcss -i ./app/globals.css -o ./output.css

# Watch for changes
npx tailwindcss -i ./app/globals.css -o ./output.css --watch
```

## 🔐 Security

```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Fix with breaking changes
npm audit fix --force
```

## 📊 Performance

```bash
# Analyze bundle size
npm run build
# Check .next/analyze/ folder

# Install bundle analyzer
npm install @next/bundle-analyzer

# Run with analyzer
ANALYZE=true npm run build
```

## 🌐 Domain & DNS

```bash
# Verify domain
nslookup your-domain.com

# Check DNS propagation
# Use: https://dnschecker.org

# Flush DNS cache (Windows)
ipconfig /flushdns

# Flush DNS cache (Mac)
sudo dscacheutil -flushcache

# Flush DNS cache (Linux)
sudo systemd-resolve --flush-caches
```

## 📱 Mobile Testing

```bash
# Get local IP address (Windows)
ipconfig

# Get local IP address (Mac/Linux)
ifconfig

# Access from mobile
# http://YOUR_LOCAL_IP:3000
```

## 🔄 Continuous Deployment

```bash
# Automatic deployment on push
git add .
git commit -m "Update: description"
git push

# Vercel automatically deploys!
```

## 🐛 Troubleshooting Commands

```bash
# Port already in use
npx kill-port 3000

# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Reset Git (careful!)
git reset --hard HEAD

# Undo last commit (keep changes)
git reset --soft HEAD~1

# View error logs
npm run build 2>&1 | tee build.log
```

## 📊 Analytics & Monitoring

```bash
# Check Vercel deployment logs
vercel logs

# Check Vercel deployment status
vercel inspect URL

# View Vercel project info
vercel project ls
```

## 🔧 Configuration

```bash
# Edit Next.js config
code next.config.js

# Edit Tailwind config
code tailwind.config.ts

# Edit TypeScript config
code tsconfig.json

# Edit package.json
code package.json
```

## 📝 File Operations

```bash
# Create new component
touch components/NewComponent.tsx

# Create new page
touch app/new-page/page.tsx

# Create directory
mkdir components/ui

# Remove file
rm filename.tsx

# Remove directory
rm -rf directory-name

# Copy file
cp source.tsx destination.tsx

# Move/rename file
mv old-name.tsx new-name.tsx
```

## 🔍 Search & Find

```bash
# Find files by name
find . -name "*.tsx"

# Search in files (grep)
grep -r "searchTerm" .

# Count lines of code
find . -name "*.tsx" -o -name "*.ts" | xargs wc -l
```

## 📦 Backup & Restore

```bash
# Create backup
git add .
git commit -m "Backup before changes"
git push

# Restore from backup
git checkout main
git pull

# Create branch for experiments
git checkout -b experiment
```

## 🚀 Quick Workflows

### Start Fresh Development
```bash
cd fashion-catalog
npm install
npm run dev
```

### Deploy Update
```bash
git add .
git commit -m "Update: description"
git push
# Vercel auto-deploys
```

### Test Production Build
```bash
npm run build
npm start
```

### Fix Build Issues
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Update Dependencies
```bash
npm update
npm audit fix
npm run build
```

## 💡 Pro Tips

### Aliases (add to .bashrc or .zshrc)
```bash
alias dev="npm run dev"
alias build="npm run build"
alias deploy="git add . && git commit -m 'Update' && git push"
```

### Quick Scripts (add to package.json)
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "clean": "rm -rf .next",
    "fresh": "rm -rf .next node_modules && npm install"
  }
}
```

## 🆘 Emergency Commands

### Site is down
```bash
# Check Vercel status
vercel ls

# View logs
vercel logs

# Rollback to previous deployment
# Go to Vercel dashboard > Deployments > Promote
```

### Build failing
```bash
# Clear everything
rm -rf .next node_modules
npm install
npm run build
```

### Git issues
```bash
# Discard all changes
git reset --hard HEAD

# Pull latest
git pull origin main
```

## 📚 Help Commands

```bash
# Next.js help
npx next --help

# npm help
npm help

# Vercel help
vercel --help

# Git help
git --help
```

---

## 🎯 Most Used Commands

### Daily Development
```bash
npm run dev          # Start dev server
git add .            # Stage changes
git commit -m "msg"  # Commit changes
git push             # Deploy to Vercel
```

### Weekly Maintenance
```bash
npm update           # Update packages
npm audit fix        # Fix vulnerabilities
npm run build        # Test build
```

### Monthly Tasks
```bash
npm outdated         # Check outdated packages
npm audit            # Security audit
```

---

## 📋 Command Cheat Sheet

| Task | Command |
|------|---------|
| Install | `npm install` |
| Dev Server | `npm run dev` |
| Build | `npm run build` |
| Deploy | `vercel` |
| Commit | `git commit -m "msg"` |
| Push | `git push` |
| Clean | `rm -rf .next` |
| Update | `npm update` |
| Audit | `npm audit fix` |
| Logs | `vercel logs` |

---

**Bookmark this page for quick reference!** 🔖
