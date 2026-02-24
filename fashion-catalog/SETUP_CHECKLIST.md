# Setup Checklist - PakFashion

Complete checklist to get your fashion catalog from code to production.

## ✅ Phase 1: Local Setup (5 minutes)

### Install Dependencies
- [ ] Navigate to project folder: `cd fashion-catalog`
- [ ] Install packages: `npm install`
- [ ] Wait for installation to complete

### Test Locally
- [ ] Start dev server: `npm run dev`
- [ ] Open http://localhost:3000
- [ ] Verify homepage loads
- [ ] Test search functionality
- [ ] Check mobile responsive (resize browser)
- [ ] Verify all 17 brands display

### Build Test
- [ ] Run production build: `npm run build`
- [ ] Verify build succeeds
- [ ] Check for any errors

**Status**: ⬜ Not Started | 🟡 In Progress | ✅ Complete

---

## ✅ Phase 2: Git & GitHub (5 minutes)

### Initialize Git
- [ ] Initialize repository: `git init`
- [ ] Add all files: `git add .`
- [ ] Create first commit: `git commit -m "Initial commit: PakFashion catalog"`

### Create GitHub Repository
- [ ] Go to github.com
- [ ] Click "New Repository"
- [ ] Name: `pakfashion-catalog`
- [ ] Keep it public or private
- [ ] Don't initialize with README (we have one)
- [ ] Click "Create Repository"

### Push to GitHub
- [ ] Add remote: `git remote add origin https://github.com/YOUR_USERNAME/pakfashion-catalog.git`
- [ ] Push code: `git push -u origin main`
- [ ] Verify code appears on GitHub

**Status**: ⬜ Not Started | 🟡 In Progress | ✅ Complete

---

## ✅ Phase 3: Vercel Deployment (5 minutes)

### Create Vercel Account
- [ ] Go to vercel.com
- [ ] Click "Sign Up"
- [ ] Choose "Continue with GitHub"
- [ ] Authorize Vercel

### Import Project
- [ ] Click "Add New..." > "Project"
- [ ] Find your GitHub repository
- [ ] Click "Import"

### Configure Project
- [ ] Framework: Next.js (auto-detected) ✓
- [ ] Root Directory: `./` ✓
- [ ] Build Command: `npm run build` ✓
- [ ] Output Directory: `.next` ✓

### Add Environment Variables (Optional for now)
- [ ] Click "Environment Variables"
- [ ] Add: `NEXT_PUBLIC_SITE_URL` = `https://your-project.vercel.app`
- [ ] Skip GA and Dialogflow for now (add later)

### Deploy
- [ ] Click "Deploy"
- [ ] Wait 2-3 minutes for build
- [ ] Click on deployment URL
- [ ] Verify site is live!

**Status**: ⬜ Not Started | 🟡 In Progress | ✅ Complete

**Your Live URL**: ___________________________

---

## ✅ Phase 4: Google Analytics (Optional - 10 minutes)

### Create GA4 Property
- [ ] Go to analytics.google.com
- [ ] Click "Admin" (bottom left)
- [ ] Click "Create Property"
- [ ] Property Name: `PakFashion`
- [ ] Time Zone: Your timezone
- [ ] Currency: PKR
- [ ] Click "Next" and complete setup

### Get Measurement ID
- [ ] In Admin, go to "Data Streams"
- [ ] Click "Add Stream" > "Web"
- [ ] Enter your Vercel URL
- [ ] Copy Measurement ID (G-XXXXXXXXXX)

### Add to Project
- [ ] Create `.env.local` file locally
- [ ] Add: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
- [ ] Update `app/layout.tsx` with your ID (line 35)

### Add to Vercel
- [ ] Go to Vercel dashboard
- [ ] Select your project
- [ ] Go to "Settings" > "Environment Variables"
- [ ] Add: `NEXT_PUBLIC_GA_ID` = `G-XXXXXXXXXX`
- [ ] Redeploy: Go to "Deployments" > "..." > "Redeploy"

### Verify Tracking
- [ ] Visit your live site
- [ ] Go to GA4 > Reports > Realtime
- [ ] Verify you see active user (yourself)

**Status**: ⬜ Not Started | 🟡 In Progress | ✅ Complete | ⬜ Skipped

**GA Measurement ID**: ___________________________

---

## ✅ Phase 5: Dialogflow Chatbot (Optional - 30 minutes)

### Create Google Cloud Project
- [ ] Go to console.cloud.google.com
- [ ] Click "Select a project" > "New Project"
- [ ] Name: `pakfashion-chatbot`
- [ ] Click "Create"

### Enable Dialogflow API
- [ ] Go to "APIs & Services" > "Library"
- [ ] Search "Dialogflow API"
- [ ] Click "Enable"

### Create Dialogflow Agent
- [ ] Go to dialogflow.cloud.google.com/cx
- [ ] Select your project
- [ ] Click "Create Agent"
- [ ] Display Name: `Fashion Assistant`
- [ ] Language: English
- [ ] Time Zone: Your timezone
- [ ] Location: us-central1
- [ ] Click "Create"

### Configure Intents (See DIALOGFLOW_SETUP.md for details)
- [ ] Update Default Welcome Intent
- [ ] Create: Outfit Suggestion Intent
- [ ] Create: Brand Information Intent
- [ ] Create: Color Filter Intent
- [ ] Create: Price Range Intent
- [ ] Create: Styling Advice Intent
- [ ] Create: Brand Category Intent
- [ ] Create: FAQ Intent

### Test Agent
- [ ] Click "Test Agent" in right panel
- [ ] Try: "Hi"
- [ ] Try: "Suggest an outfit"
- [ ] Try: "Tell me about Sapphire"
- [ ] Try: "Show me red dresses"
- [ ] Verify all responses work

### Enable Dialogflow Messenger
- [ ] Go to "Integrations"
- [ ] Click "Dialogflow Messenger"
- [ ] Toggle to enable
- [ ] Customize appearance (optional)

### Get Agent ID
- [ ] In agent settings, copy Agent ID
- [ ] Format: `projects/PROJECT_ID/locations/LOCATION/agents/AGENT_ID`

### Update Code
- [ ] Edit `components/ChatbotWidget.tsx`
- [ ] Line 51: Replace `YOUR_AGENT_ID` with actual ID
- [ ] Save file

### Deploy Update
- [ ] Commit: `git add .`
- [ ] Commit: `git commit -m "Add Dialogflow agent ID"`
- [ ] Push: `git push`
- [ ] Vercel auto-deploys

### Test Live Chatbot
- [ ] Visit your live site
- [ ] Click chatbot button (bottom-right)
- [ ] Test conversation
- [ ] Verify responses work

**Status**: ⬜ Not Started | 🟡 In Progress | ✅ Complete | ⬜ Skipped

**Agent ID**: ___________________________

---

## ✅ Phase 6: Customization (Optional)

### Update Brand Data
- [ ] Edit `data/brands.json`
- [ ] Update brand information
- [ ] Add new brands
- [ ] Update images (use your own or keep Unsplash)

### Customize Styling
- [ ] Edit `app/globals.css` for global styles
- [ ] Update colors in components
- [ ] Modify `tailwind.config.ts` for theme

### Update Site Information
- [ ] Edit `components/Navbar.tsx` - Change site name
- [ ] Edit `app/layout.tsx` - Update SEO meta tags
- [ ] Edit `app/page.tsx` - Update content

### Deploy Changes
- [ ] Commit changes: `git add .`
- [ ] Commit: `git commit -m "Customize site"`
- [ ] Push: `git push`
- [ ] Vercel auto-deploys

**Status**: ⬜ Not Started | 🟡 In Progress | ✅ Complete | ⬜ Skipped

---

## ✅ Phase 7: Custom Domain (Optional)

### Purchase Domain
- [ ] Buy domain from registrar (Namecheap, GoDaddy, etc.)
- [ ] Domain name: ___________________________

### Add to Vercel
- [ ] Go to Vercel dashboard
- [ ] Select your project
- [ ] Go to "Settings" > "Domains"
- [ ] Click "Add"
- [ ] Enter your domain
- [ ] Click "Add"

### Configure DNS
- [ ] Copy DNS records from Vercel
- [ ] Go to your domain registrar
- [ ] Add DNS records (A record or CNAME)
- [ ] Wait for DNS propagation (up to 48 hours)

### Verify Domain
- [ ] Check domain status in Vercel
- [ ] Visit your custom domain
- [ ] Verify site loads

### Update Environment Variables
- [ ] Update `NEXT_PUBLIC_SITE_URL` in Vercel
- [ ] Redeploy

**Status**: ⬜ Not Started | 🟡 In Progress | ✅ Complete | ⬜ Skipped

**Custom Domain**: ___________________________

---

## ✅ Phase 8: Testing & Quality Assurance

### Functionality Testing
- [ ] Homepage loads correctly
- [ ] Search works across all fields
- [ ] All 17 brands display
- [ ] Brand cards show correct information
- [ ] "Visit Store" links work
- [ ] Navigation menu works
- [ ] Smooth scrolling to sections

### Responsive Testing
- [ ] Test on mobile (< 768px)
- [ ] Test on tablet (768px - 1024px)
- [ ] Test on desktop (> 1024px)
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)

### Performance Testing
- [ ] Run Lighthouse audit
- [ ] Performance score > 90
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 90

### Chatbot Testing (if configured)
- [ ] Chatbot button appears
- [ ] Chat window opens
- [ ] Responses are relevant
- [ ] All intents work

### Analytics Testing (if configured)
- [ ] Visit site
- [ ] Check Google Analytics Realtime
- [ ] Verify tracking works

**Status**: ⬜ Not Started | 🟡 In Progress | ✅ Complete

---

## ✅ Phase 9: Launch Preparation

### Pre-Launch Checklist
- [ ] All features tested
- [ ] No console errors
- [ ] All links work
- [ ] Images load properly
- [ ] Mobile responsive
- [ ] SEO tags correct
- [ ] Analytics tracking
- [ ] Chatbot working (if configured)

### Documentation
- [ ] README.md is up to date
- [ ] Environment variables documented
- [ ] Deployment process documented

### Backup
- [ ] Code pushed to GitHub
- [ ] Environment variables saved
- [ ] Documentation complete

**Status**: ⬜ Not Started | 🟡 In Progress | ✅ Complete

---

## ✅ Phase 10: Launch & Promotion

### Launch
- [ ] Final deployment verified
- [ ] All systems operational
- [ ] Site is live!

### Share
- [ ] Share on social media
- [ ] Share with friends and family
- [ ] Share with fashion communities
- [ ] Add to portfolio

### Monitor
- [ ] Check Google Analytics daily
- [ ] Monitor Vercel Analytics
- [ ] Check for errors in Vercel logs
- [ ] Gather user feedback

### Iterate
- [ ] Collect feedback
- [ ] Plan improvements
- [ ] Add new features
- [ ] Update content regularly

**Status**: ⬜ Not Started | 🟡 In Progress | ✅ Complete

**Launch Date**: ___________________________

---

## 📊 Progress Summary

### Overall Progress
- Phase 1: Local Setup - ⬜
- Phase 2: Git & GitHub - ⬜
- Phase 3: Vercel Deployment - ⬜
- Phase 4: Google Analytics - ⬜
- Phase 5: Dialogflow Chatbot - ⬜
- Phase 6: Customization - ⬜
- Phase 7: Custom Domain - ⬜
- Phase 8: Testing & QA - ⬜
- Phase 9: Launch Prep - ⬜
- Phase 10: Launch - ⬜

### Key Information
- **GitHub Repo**: ___________________________
- **Vercel URL**: ___________________________
- **Custom Domain**: ___________________________
- **GA ID**: ___________________________
- **Dialogflow Agent ID**: ___________________________
- **Launch Date**: ___________________________

---

## 🆘 Need Help?

### Documentation
- **Quick Start**: QUICKSTART.md
- **Deployment**: DEPLOYMENT.md
- **Dialogflow**: DIALOGFLOW_SETUP.md
- **Features**: FEATURES.md
- **README**: README.md

### Common Issues
- Build fails: Check DEPLOYMENT.md troubleshooting
- Chatbot not working: Check DIALOGFLOW_SETUP.md
- Images not loading: Check next.config.js
- Analytics not tracking: Verify GA ID

### Support
- Check documentation first
- Search GitHub issues
- Ask in Next.js Discord
- Stack Overflow

---

## 🎉 Congratulations!

Once you complete all phases, your PakFashion catalog will be:
- ✅ Live on the internet
- ✅ Fully functional
- ✅ SEO optimized
- ✅ Analytics enabled
- ✅ AI chatbot ready
- ✅ Production ready

**You did it!** 🎊👗✨

---

**Print this checklist and check off items as you complete them!**
