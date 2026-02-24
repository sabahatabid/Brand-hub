# PakFashion - Pakistani Fashion Catalog

A modern, full-stack one-page fashion catalog website showcasing Pakistani fashion brands built with Next.js 14, React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **Smart Search**: Real-time search across brands, colors, categories, and price ranges
- **17 Pakistani Brands**: Saaya, Sapphire, J., Ethnic, Beachtree, Wardrobe, Agha Noor, Agha Jaan, Limelight, Alkaram, MTJ, Oaks, Zeen, Diners, Outfitters, Omal by Komal, Afroze
- **AI Fashion Chatbot**: Integrated Google Dialogflow for outfit suggestions and styling advice
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter cards
- **Analytics Ready**: Google Analytics integration
- **Performance Optimized**: Built with Next.js 14 App Router for optimal performance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd fashion-catalog
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your credentials:
```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_DIALOGFLOW_AGENT_ID=your-dialogflow-agent-id
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🤖 Setting Up Dialogflow Chatbot

### Step 1: Create Dialogflow Agent

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Dialogflow API
4. Go to [Dialogflow CX Console](https://dialogflow.cloud.google.com/cx)
5. Create a new agent named "Fashion Assistant"

### Step 2: Configure Intents

Create the following intents in your Dialogflow agent:

#### Welcome Intent
- **Training Phrases**: "Hi", "Hello", "Hey"
- **Response**: "Welcome to PakFashion! I can help you find outfits, suggest brands, and answer fashion questions. What are you looking for today?"

#### Outfit Suggestion Intent
- **Training Phrases**: 
  - "Suggest an outfit"
  - "What should I wear"
  - "Help me find an outfit"
- **Response**: "I'd love to help! What's the occasion? Casual, formal, or party wear?"

#### Brand Search Intent
- **Training Phrases**:
  - "Tell me about [brand name]"
  - "Show me [brand name] products"
  - "What does [brand name] offer"
- **Parameters**: brand (text)
- **Response**: "Let me tell you about [brand]! They offer [description]. Would you like to visit their store?"

#### Color Filter Intent
- **Training Phrases**:
  - "Show me [color] outfits"
  - "I want something in [color]"
- **Parameters**: color (text)
- **Response**: "Great choice! Here are brands offering [color] options: [list brands]"

#### Price Range Intent
- **Training Phrases**:
  - "What's affordable"
  - "Show me budget options"
  - "Expensive brands"
- **Response**: "Based on your budget, I recommend: [list brands with price ranges]"

#### Styling Advice Intent
- **Training Phrases**:
  - "Give me styling tips"
  - "How to style this"
  - "Fashion advice"
- **Response**: "Here are some styling tips: [provide advice based on context]"

### Step 3: Get Agent ID

1. In Dialogflow CX Console, go to your agent settings
2. Copy the Agent ID (format: `projects/PROJECT_ID/locations/LOCATION/agents/AGENT_ID`)
3. Update `ChatbotWidget.tsx` with your Agent ID:

```tsx
<df-messenger
  agent-id="YOUR_AGENT_ID"
  language-code="en"
></df-messenger>
```

### Step 4: Enable Web Integration

1. In Dialogflow Console, go to "Integrations"
2. Enable "Dialogflow Messenger"
3. Copy the integration code if needed
4. The widget is already configured in the project

## 📊 Google Analytics Setup

1. Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Update `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
4. Update `app/layout.tsx` with your GA ID

## 🚢 Deployment on Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure environment variables:
   - Add `NEXT_PUBLIC_GA_ID`
   - Add `NEXT_PUBLIC_DIALOGFLOW_AGENT_ID`
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Add environment variables in Vercel dashboard

### Post-Deployment

1. Your site will be live at `https://your-project.vercel.app`
2. Configure custom domain in Vercel settings (optional)
3. Update `.env.local` with production URL
4. Test all features including chatbot

## 📁 Project Structure

```
fashion-catalog/
├── app/
│   ├── layout.tsx          # Root layout with SEO and analytics
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── SearchBar.tsx       # Search functionality
│   ├── BrandCard.tsx       # Brand display card
│   └── ChatbotWidget.tsx   # Dialogflow chatbot widget
├── data/
│   └── brands.json         # Brand data
├── public/                 # Static assets
├── .env.local.example      # Environment variables template
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Customization

### Adding New Brands

Edit `data/brands.json`:

```json
{
  "id": 18,
  "name": "New Brand",
  "description": "Brand description",
  "category": "Women's Fashion",
  "image": "image-url",
  "website": "https://brand-website.com",
  "colors": ["Red", "Blue"],
  "priceRange": "PKR 2,000 - 10,000"
}
```

### Styling

- Modify `app/globals.css` for global styles
- Update `tailwind.config.ts` for theme customization
- Edit component files for specific styling

### Chatbot Customization

Edit `components/ChatbotWidget.tsx` to customize:
- Colors and styling
- Position and size
- Chat title and messages

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Google Dialogflow** - AI chatbot
- **Google Analytics** - Web analytics
- **Vercel** - Hosting platform

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Email: info@pakfashion.com

## 🎉 Acknowledgments

- Brand images from Unsplash
- Icons from Heroicons
- Fonts from Google Fonts

---

Built with ❤️ for Pakistani Fashion
