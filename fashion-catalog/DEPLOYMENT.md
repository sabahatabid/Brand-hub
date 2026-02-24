# Deployment Guide - PakFashion

Complete step-by-step guide to deploy your fashion catalog to Vercel.

## Pre-Deployment Checklist

- [ ] All code is committed to Git
- [ ] Repository is pushed to GitHub
- [ ] Environment variables are documented
- [ ] Dialogflow agent is configured
- [ ] Google Analytics is set up
- [ ] All dependencies are installed
- [ ] Project builds successfully locally

## Step 1: Prepare Your Repository

### 1.1 Initialize Git (if not already done)

```bash
cd fashion-catalog
git init
git add .
git commit -m "Initial commit: PakFashion catalog"
```

### 1.2 Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "New Repository"
3. Name it "pakfashion-catalog"
4. Don't initialize with README (we already have one)
5. Click "Create Repository"

### 1.3 Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/pakfashion-catalog.git
git branch -M main
git push -u origin main
```

## Step 2: Configure Dialogflow

### 2.1 Create Dialogflow Agent

1. Visit [Dialogflow CX Console](https://dialogflow.cloud.google.com/cx)
2. Click "Create Agent"
3. Fill in details:
   - **Display Name**: Fashion Assistant
   - **Location**: Choose closest region
   - **Time Zone**: Your timezone
4. Click "Create"

### 2.2 Create Intents

Create these essential intents:

#### Welcome Intent
```
Training Phrases:
- Hi
- Hello
- Hey there
- Good morning

Response:
Welcome to PakFashion! 👗 I'm your fashion assistant. I can help you:
• Find the perfect outfit
• Discover brands
• Filter by color and price
• Get styling advice

What would you like to explore today?
```

#### Outfit Suggestion
```
Training Phrases:
- Suggest an outfit
- What should I wear
- Help me find something to wear
- I need outfit ideas

Response:
I'd love to help you find the perfect outfit! 

What's the occasion?
1. Casual daily wear
2. Formal/Office wear
3. Party/Wedding
4. Traditional wear
```

#### Brand Information
```
Training Phrases:
- Tell me about Sapphire
- What does Alkaram offer
- Show me Agha Noor
- Information about [brand]

Parameters:
- brand: @sys.any

Response:
Great choice! Let me tell you about {brand}. 

You can find them in our catalog with:
• Product range
• Price information
• Available colors
• Direct store link

Would you like to see similar brands?
```

#### Color Filter
```
Training Phrases:
- Show me red outfits
- I want something in blue
- Do you have black dresses
- [color] clothing

Parameters:
- color: @sys.color

Response:
Excellent choice! {color} is a great color. 

Brands offering {color} options:
• Sapphire
• Alkaram
• Limelight
• And more!

Use the search bar to filter by "{color}" to see all options.
```

#### Price Range
```
Training Phrases:
- What's affordable
- Show me budget options
- Expensive brands
- Price range under 5000

Response:
Let me help you find options in your budget:

💰 Budget-Friendly (PKR 1,500-5,000):
- Beachtree
- Limelight
- Outfitters

💎 Mid-Range (PKR 5,000-15,000):
- Sapphire
- Alkaram
- J.

👑 Premium (PKR 15,000+):
- Agha Noor
- Omal by Komal
- Afroze
```

#### Styling Tips
```
Training Phrases:
- Give me styling tips
- How to style
- Fashion advice
- What goes well with

Response:
Here are some styling tips for Pakistani fashion:

✨ Mix & Match:
- Pair traditional kurtas with modern jeans
- Add a statement dupatta to elevate any outfit

🎨 Color Coordination:
- Complementary colors create balance
- Monochrome looks are always elegant

👗 Occasion-Based:
- Casual: Comfortable fabrics, minimal jewelry
- Formal: Rich fabrics, statement accessories
- Traditional: Complete the look with traditional jewelry

Need specific advice? Just ask!
```

### 2.3 Get Your Agent ID

1. In Dialogflow Console, click on your agent
2. Click the settings icon (⚙️)
3. Copy the Agent ID from the URL or settings
4. Format: `projects/PROJECT_ID/locations/LOCATION/agents/AGENT_ID`

### 2.4 Enable Dialogflow Messenger

1. Go to "Integrations" in left sidebar
2. Click on "Dialogflow Messenger"
3. Toggle to enable
4. Copy the Agent ID if shown

## Step 3: Set Up Google Analytics

### 3.1 Create GA4 Property

1. Go to [analytics.google.com](https://analytics.google.com)
2. Click "Admin" (bottom left)
3. Click "Create Property"
4. Fill in:
   - **Property Name**: PakFashion
   - **Time Zone**: Your timezone
   - **Currency**: PKR
5. Click "Next" and complete setup

### 3.2 Get Measurement ID

1. In Admin, go to "Data Streams"
2. Click "Add Stream" > "Web"
3. Enter your URL (or use temporary)
4. Copy the Measurement ID (G-XXXXXXXXXX)

## Step 4: Deploy to Vercel

### 4.1 Sign Up/Login to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub"
4. Authorize Vercel

### 4.2 Import Project

1. Click "Add New..." > "Project"
2. Find your GitHub repository
3. Click "Import"

### 4.3 Configure Project

1. **Framework Preset**: Next.js (auto-detected)
2. **Root Directory**: `./` (or `fashion-catalog` if in subdirectory)
3. **Build Command**: `npm run build` (default)
4. **Output Directory**: `.next` (default)

### 4.4 Add Environment Variables

Click "Environment Variables" and add:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_DIALOGFLOW_AGENT_ID=your-agent-id-here
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
```

### 4.5 Deploy

1. Click "Deploy"
2. Wait for build to complete (2-3 minutes)
3. Your site is live! 🎉

## Step 5: Post-Deployment Configuration

### 5.1 Update Dialogflow Agent ID in Code

1. Go to your Vercel project
2. Note your deployment URL
3. Update `components/ChatbotWidget.tsx`:

```tsx
<df-messenger
  agent-id="YOUR_ACTUAL_AGENT_ID"
  language-code="en"
></df-messenger>
```

4. Commit and push changes
5. Vercel will auto-deploy

### 5.2 Configure Custom Domain (Optional)

1. In Vercel dashboard, go to "Settings" > "Domains"
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (up to 48 hours)

### 5.3 Update Google Analytics

1. Go back to Google Analytics
2. Update the data stream URL to your Vercel URL
3. Verify tracking is working

### 5.4 Test Everything

- [ ] Homepage loads correctly
- [ ] Search functionality works
- [ ] All brand cards display properly
- [ ] Chatbot opens and responds
- [ ] Navigation links work
- [ ] Mobile responsive design works
- [ ] Analytics tracking works

## Step 6: Optimization

### 6.1 Enable Vercel Analytics

1. In Vercel dashboard, go to "Analytics"
2. Click "Enable"
3. Get insights on performance

### 6.2 Set Up Vercel Speed Insights

Add to `app/layout.tsx`:

```tsx
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

Install package:
```bash
npm install @vercel/speed-insights
```

### 6.3 Configure Caching

Vercel automatically handles caching, but you can customize in `next.config.js`:

```js
module.exports = {
  headers: async () => [
    {
      source: '/data/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=3600, must-revalidate',
        },
      ],
    },
  ],
}
```

## Troubleshooting

### Build Fails

**Error**: Module not found
- **Solution**: Run `npm install` locally and ensure all dependencies are in `package.json`

**Error**: TypeScript errors
- **Solution**: Run `npm run build` locally to catch errors before deploying

### Chatbot Not Working

**Issue**: Chatbot doesn't appear
- **Solution**: Check that Agent ID is correct in `ChatbotWidget.tsx`
- **Solution**: Verify Dialogflow Messenger is enabled in Dialogflow Console

**Issue**: Chatbot shows error
- **Solution**: Check browser console for errors
- **Solution**: Verify agent is published in Dialogflow

### Analytics Not Tracking

**Issue**: No data in Google Analytics
- **Solution**: Check that GA ID is correct in environment variables
- **Solution**: Wait 24-48 hours for data to appear
- **Solution**: Test with Google Analytics Debugger extension

### Images Not Loading

**Issue**: Brand images don't display
- **Solution**: Verify `next.config.js` has correct image domains
- **Solution**: Check that image URLs in `brands.json` are valid

## Continuous Deployment

Vercel automatically deploys when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Update: description of changes"
git push origin main

# Vercel automatically deploys!
```

## Monitoring

### Check Deployment Status

1. Go to Vercel dashboard
2. Click on your project
3. View deployment logs

### Monitor Performance

1. Use Vercel Analytics
2. Check Google Analytics
3. Use Lighthouse for performance audits

## Rollback

If something goes wrong:

1. Go to Vercel dashboard
2. Click "Deployments"
3. Find previous working deployment
4. Click "..." > "Promote to Production"

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Dialogflow Documentation](https://cloud.google.com/dialogflow/docs)
- [Google Analytics Help](https://support.google.com/analytics)

## Success Checklist

- [ ] Site is live and accessible
- [ ] All pages load correctly
- [ ] Search works properly
- [ ] Chatbot is functional
- [ ] Analytics is tracking
- [ ] Mobile responsive
- [ ] SEO tags are correct
- [ ] Performance is optimized
- [ ] Custom domain configured (if applicable)

---

Congratulations! Your PakFashion catalog is now live! 🎉

For updates and maintenance, simply push changes to GitHub and Vercel will handle the rest.
