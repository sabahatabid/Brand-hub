# Dialogflow Chatbot Setup Guide

Complete guide to set up the AI Fashion Assistant chatbot using Google Dialogflow CX.

## Overview

The chatbot will help users:
- Get outfit suggestions
- Find brands by category
- Filter by color and price
- Get styling advice
- Answer FAQs about brands

## Prerequisites

- Google Cloud account
- Project deployed (for testing)
- Basic understanding of Dialogflow concepts

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" > "New Project"
3. Enter project name: "pakfashion-chatbot"
4. Click "Create"
5. Wait for project creation

## Step 2: Enable Dialogflow API

1. In Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Dialogflow API"
3. Click on "Dialogflow API"
4. Click "Enable"
5. Wait for API to be enabled

## Step 3: Create Dialogflow CX Agent

1. Go to [Dialogflow CX Console](https://dialogflow.cloud.google.com/cx)
2. Select your project
3. Click "Create Agent"
4. Configure:
   - **Display Name**: Fashion Assistant
   - **Default Language**: English
   - **Default Time Zone**: (Your timezone)
   - **Location**: us-central1 (or closest to your users)
5. Click "Create"

## Step 4: Configure Agent Settings

### 4.1 Agent Settings

1. Click the settings icon (⚙️) next to agent name
2. Configure:
   - **Description**: AI assistant for Pakistani fashion brands
   - **Enable Speech**: Yes (optional)
   - **Enable Sentiment Analysis**: Yes (optional)

### 4.2 NLU Settings

1. Go to "Agent Settings" > "ML Settings"
2. Set:
   - **ML Classification Threshold**: 0.3
   - **Enable Spell Correction**: Yes

## Step 5: Create Intents

### Intent 1: Default Welcome Intent

Already created by default. Update it:

**Training Phrases:**
- Hi
- Hello
- Hey
- Good morning
- Good afternoon
- Start

**Agent Response:**
```
Welcome to PakFashion! 👗✨

I'm your AI fashion assistant. I can help you:

🔍 Discover Pakistani fashion brands
👔 Get outfit suggestions
🎨 Filter by colors and prices
💡 Provide styling advice
❓ Answer your fashion questions

What would you like to explore today?
```

### Intent 2: Outfit Suggestions

**Intent Name**: outfit.suggestion

**Training Phrases:**
- Suggest an outfit
- What should I wear
- Help me find an outfit
- I need outfit ideas
- Recommend something to wear
- What's trending
- Show me outfit ideas
- I need help choosing clothes

**Parameters:**
- occasion: @sys.any (optional)
- style: @sys.any (optional)

**Agent Response:**
```
I'd love to help you find the perfect outfit! 👗

What's the occasion?
1️⃣ Casual daily wear
2️⃣ Office/Formal wear
3️⃣ Party or wedding
4️⃣ Traditional event
5️⃣ Just browsing

You can also tell me your preferred style or color!
```

**Follow-up Response (if occasion provided):**
```
Great choice! For {occasion}, I recommend:

✨ Casual: Check out Beachtree, Outfitters, or Limelight
👔 Formal: Try Sapphire, Alkaram, or J.
🎉 Party: Explore Agha Noor, Omal by Komal, or Afroze
🌟 Traditional: Look at Ethnic, MTJ, or Zeen

Use the search bar on our site to filter by these brands!
```

### Intent 3: Brand Information

**Intent Name**: brand.information

**Training Phrases:**
- Tell me about [brand]
- What does [brand] offer
- Show me [brand]
- Information about [brand]
- [brand] details
- Do you have [brand]
- Where can I find [brand]

**Parameters:**
- brand: @sys.any (required)

**Agent Response:**
```
Great question about {brand}! 

Here's what you should know:

📍 You can find {brand} in our catalog
💰 Check their price range and available colors
🛍️ Click "Visit Store" to shop directly
❤️ Save them to your favorites

Would you like to know about similar brands or need help with something else?
```

### Intent 4: Color Filter

**Intent Name**: filter.color

**Training Phrases:**
- Show me [color] outfits
- I want something in [color]
- Do you have [color] clothes
- [color] dresses
- Looking for [color]
- Find [color] items

**Parameters:**
- color: @sys.color (required)

**Agent Response:**
```
Excellent choice! {color} is beautiful! 🎨

Brands offering {color} options:
• Sapphire - Trendy and affordable
• Alkaram - Quality fabrics
• Limelight - Vibrant designs
• Ethnic - Bold colors
• And many more!

💡 Tip: Use the search bar and type "{color}" to see all available options across all brands!
```

### Intent 5: Price Range

**Intent Name**: filter.price

**Training Phrases:**
- What's affordable
- Show me budget options
- Expensive brands
- Cheap clothes
- Premium brands
- Price range under [number]
- Luxury fashion
- Budget friendly brands

**Parameters:**
- budget: @sys.number (optional)

**Agent Response:**
```
Let me help you find options in your budget! 💰

💵 Budget-Friendly (PKR 1,500-5,000):
• Beachtree - Casual chic
• Limelight - Trendy & affordable
• Outfitters - Youth fashion
• Wardrobe - Quality basics

💎 Mid-Range (PKR 5,000-15,000):
• Sapphire - Family fashion
• Alkaram - Premium fabrics
• J. - Traditional & modern
• Zeen - Contemporary style

👑 Premium (PKR 15,000+):
• Agha Noor - Luxury pret
• Omal by Komal - Designer wear
• Afroze - Elegant designs
• MTJ - Sophisticated fashion

Which range interests you?
```

### Intent 6: Styling Advice

**Intent Name**: styling.advice

**Training Phrases:**
- Give me styling tips
- How to style
- Fashion advice
- What goes well with
- How to accessorize
- Styling ideas
- Fashion tips

**Agent Response:**
```
Here are some styling tips for Pakistani fashion! ✨

👗 Mix & Match:
• Pair traditional kurtas with modern jeans
• Add a statement dupatta to elevate any outfit
• Mix prints with solids for balance

🎨 Color Coordination:
• Complementary colors create harmony
• Monochrome looks are always elegant
• Don't be afraid of bold colors!

💍 Accessories:
• Traditional jewelry for formal events
• Minimal accessories for casual wear
• Statement pieces can transform an outfit

📅 Occasion-Based:
• Casual: Comfortable fabrics, minimal jewelry
• Formal: Rich fabrics, statement accessories
• Traditional: Complete with traditional jewelry

Need specific advice? Just ask! 😊
```

### Intent 7: Brand Categories

**Intent Name**: brand.category

**Training Phrases:**
- Show me women's brands
- Men's fashion brands
- Which brands are for men
- Women's clothing
- Brands for ladies
- Male fashion

**Parameters:**
- category: @sys.any (required)

**Agent Response:**
```
Here are our brands by category:

👗 Women's Fashion:
• Saaya, Sapphire, Ethnic
• Beachtree, Wardrobe, Agha Noor
• Limelight, Alkaram, MTJ
• Zeen, Omal by Komal, Afroze

👔 Men's Fashion:
• Agha Jaan - Premium menswear
• Oaks - Contemporary style
• Diners - Casual & formal
• J. - Traditional wear

👨‍👩‍👧‍👦 Family Fashion:
• Sapphire, J., Outfitters

Browse our catalog to see all options!
```

### Intent 8: FAQs

**Intent Name**: faq.general

**Training Phrases:**
- How does this work
- Can I buy here
- Do you ship
- How to order
- Is this a store
- Can I purchase

**Agent Response:**
```
Great question! Here's how PakFashion works:

🛍️ We're a Fashion Directory:
• We showcase Pakistani fashion brands
• Each brand has its own online store
• Click "Visit Store" to shop directly

📦 Ordering & Shipping:
• Orders are placed on brand websites
• Each brand has its own shipping policy
• Check individual brand sites for details

💡 Our Service:
• Help you discover brands
• Compare prices and styles
• Get fashion advice
• Find what you're looking for

Need help finding something specific?
```

## Step 6: Create Flows (Optional Advanced)

For more complex conversations, create flows:

### Flow 1: Outfit Recommendation Flow

1. Go to "Flows" > "Create"
2. Name: "Outfit Recommendation"
3. Add pages:
   - Occasion Selection
   - Style Preference
   - Color Preference
   - Final Recommendation

### Flow 2: Brand Discovery Flow

1. Create flow: "Brand Discovery"
2. Add pages:
   - Category Selection
   - Price Range
   - Style Preference
   - Brand Suggestions

## Step 7: Test Your Agent

### 7.1 Use Test Agent

1. Click "Test Agent" in right panel
2. Try these test phrases:
   - "Hi"
   - "Suggest an outfit"
   - "Tell me about Sapphire"
   - "Show me red dresses"
   - "What's affordable"
   - "Give me styling tips"

### 7.2 Debug Issues

If responses don't work:
1. Check intent matching in test panel
2. Verify training phrases
3. Adjust ML threshold if needed
4. Add more training phrases

## Step 8: Get Integration Code

### 8.1 Enable Dialogflow Messenger

1. Go to "Integrations" in left sidebar
2. Click "Dialogflow Messenger"
3. Toggle to enable
4. Customize appearance:
   - **Chat Title**: Fashion Assistant
   - **Chat Subtitle**: Your style companion
   - **Primary Color**: #ec4899 (pink)

### 8.2 Get Agent ID

1. In agent settings, copy the Agent ID
2. Format: `projects/PROJECT_ID/locations/LOCATION/agents/AGENT_ID`

### 8.3 Update Your Code

In `components/ChatbotWidget.tsx`, replace:

```tsx
<df-messenger
  agent-id="YOUR_AGENT_ID"  // Replace with actual ID
  language-code="en"
  chat-title="Fashion Assistant"
></df-messenger>
```

## Step 9: Advanced Configuration

### 9.1 Add Webhooks (Optional)

For dynamic responses:

1. Go to "Webhooks"
2. Create webhook endpoint
3. Connect to your backend
4. Return dynamic brand data

Example webhook response:
```json
{
  "fulfillmentResponse": {
    "messages": [
      {
        "text": {
          "text": ["Here are the latest brands..."]
        }
      }
    ]
  }
}
```

### 9.2 Add Rich Responses

In intent responses, add:
- Images
- Cards
- Quick replies
- Custom payloads

Example:
```json
{
  "richContent": [
    [
      {
        "type": "image",
        "rawUrl": "https://example.com/brand-image.jpg",
        "accessibilityText": "Brand showcase"
      },
      {
        "type": "chips",
        "options": [
          {"text": "View More"},
          {"text": "Get Advice"}
        ]
      }
    ]
  ]
}
```

## Step 10: Deploy and Monitor

### 10.1 Publish Agent

1. Go to "Versions"
2. Click "Create Version"
3. Add version notes
4. Click "Create"

### 10.2 Monitor Performance

1. Go to "Analytics"
2. Check:
   - Session count
   - Intent detection rate
   - User satisfaction
   - Common queries

### 10.3 Improve Over Time

1. Review conversation logs
2. Add new training phrases
3. Create new intents for common questions
4. Refine responses based on feedback

## Troubleshooting

### Chatbot Not Responding

**Issue**: No response from chatbot
- Check Agent ID is correct
- Verify Dialogflow Messenger is enabled
- Check browser console for errors

### Wrong Intent Triggered

**Issue**: Bot responds incorrectly
- Add more training phrases
- Adjust ML threshold
- Check for conflicting intents

### Slow Response Time

**Issue**: Chatbot takes too long
- Optimize webhook calls
- Reduce complex logic
- Use caching where possible

## Best Practices

1. **Training Phrases**: Add 10-20 varied phrases per intent
2. **Responses**: Keep them concise and helpful
3. **Fallback**: Configure helpful fallback responses
4. **Testing**: Test regularly with real user queries
5. **Updates**: Continuously improve based on analytics

## Resources

- [Dialogflow CX Documentation](https://cloud.google.com/dialogflow/cx/docs)
- [Dialogflow Messenger Guide](https://cloud.google.com/dialogflow/cx/docs/concept/integration/dialogflow-messenger)
- [Best Practices](https://cloud.google.com/dialogflow/cx/docs/concept/best-practices)

---

Your AI Fashion Assistant is now ready to help users! 🎉
