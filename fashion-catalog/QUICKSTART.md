# Quick Start Guide - PakFashion

Get your fashion catalog running in 5 minutes!

## 🚀 Fast Setup

### 1. Install Dependencies (1 minute)

```bash
cd fashion-catalog
npm install
```

### 2. Run Development Server (30 seconds)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) - Your site is live locally! 🎉

### 3. Test Features (2 minutes)

✅ Search for brands: Try "Sapphire", "red", or "affordable"
✅ Click brand cards to explore
✅ Test mobile responsive design (resize browser)
✅ Click chatbot icon (bottom-right) - placeholder for now

## 🎨 Customize Your Site

### Update Brand Data

Edit `data/brands.json`:

```json
{
  "id": 18,
  "name": "Your Brand",
  "description": "Your description",
  "category": "Women's Fashion",
  "image": "https://your-image-url.com/image.jpg",
  "website": "https://yourbrand.com",
  "colors": ["Red", "Blue"],
  "priceRange": "PKR 2,000 - 10,000"
}
```

### Change Colors

Edit `app/globals.css` or component files. Main colors:
- Pink: `#ec4899` (pink-500)
- Purple: `#9333ea` (purple-600)

### Update Site Name

Edit `components/Navbar.tsx`:
```tsx
<span className="text-2xl font-bold...">
  YourSiteName  {/* Change this */}
</span>
```

## 🤖 Add Chatbot (Optional - 10 minutes)

### Quick Setup

1. Get Dialogflow Agent ID (see DIALOGFLOW_SETUP.md)
2. Edit `components/ChatbotWidget.tsx`:
```tsx
<df-messenger
  agent-id="YOUR_AGENT_ID_HERE"  // Add your ID
  language-code="en"
></df-messenger>
```

### Skip for Now

The chatbot button works but shows placeholder. Add Dialogflow later!

## 📊 Add Analytics (Optional - 5 minutes)

### Google Analytics

1. Get GA4 Measurement ID from [analytics.google.com](https://analytics.google.com)
2. Create `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
3. Update `app/layout.tsx` with your ID

### Vercel Analytics

Automatically enabled when you deploy to Vercel!

## 🚢 Deploy to Vercel (5 minutes)

### Method 1: GitHub + Vercel (Recommended)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/pakfashion.git
git push -u origin main

# 2. Go to vercel.com
# 3. Click "Import Project"
# 4. Select your repo
# 5. Click "Deploy"
```

### Method 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

Done! Your site is live! 🎉

## 📱 Test Your Live Site

After deployment:
- ✅ Visit your Vercel URL
- ✅ Test on mobile device
- ✅ Share with friends
- ✅ Check all features work

## 🎯 Next Steps

1. **Customize Content**: Update brands, colors, text
2. **Add Chatbot**: Follow DIALOGFLOW_SETUP.md
3. **Setup Analytics**: Add Google Analytics
4. **Custom Domain**: Configure in Vercel settings
5. **SEO**: Update meta tags in `app/layout.tsx`

## 📚 Full Documentation

- **README.md** - Complete project overview
- **DEPLOYMENT.md** - Detailed deployment guide
- **DIALOGFLOW_SETUP.md** - Chatbot configuration
- **FEATURES.md** - All features explained

## 🆘 Common Issues

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Images Not Loading

Check `next.config.js` has:
```js
images: {
  domains: ['images.unsplash.com'],
}
```

## 💡 Pro Tips

1. **Hot Reload**: Changes auto-refresh in dev mode
2. **TypeScript**: Errors show in terminal and browser
3. **Tailwind**: Use Tailwind classes for styling
4. **Components**: Reusable components in `/components`
5. **Data**: All brand data in `/data/brands.json`

## 🎉 You're Ready!

Your fashion catalog is set up and ready to customize. Start by:
1. Adding your own brands
2. Customizing colors and styling
3. Deploying to Vercel

Need help? Check the full documentation or open an issue!

---

Happy coding! 👗✨
