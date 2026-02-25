'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Welcome to PakFashion! 👗✨ I'm your fashion assistant. I can help you discover Pakistani brands, find outfits, and answer your fashion questions. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Greetings
    if (message.match(/^(hi|hello|hey|salam|assalam)/i)) {
      return "Hello! 👋 I can help you find Pakistani fashion brands, suggest outfits, or answer questions about colors and prices. What are you looking for?";
    }

    // Outfit suggestions
    if (message.includes('outfit') || message.includes('suggest') || message.includes('wear') || message.includes('کپڑے')) {
      return "I'd love to help! 👗 What's the occasion?\n\n1️⃣ Casual daily wear\n2️⃣ Formal/Office wear\n3️⃣ Party or Wedding\n4️⃣ Traditional event\n\nOr tell me your preferred style!";
    }

    // Brand queries
    if (message.includes('sapphire')) {
      return "Sapphire is one of Pakistan's leading fashion brands! 💙\n\n✨ Offers: Trendy clothing for the whole family\n💰 Price: PKR 2,500 - 12,000\n🎨 Colors: Blue, Pink, Yellow, Black, White\n\nWould you like to see similar brands?";
    }

    if (message.includes('alkaram')) {
      return "Alkaram Studio is a premium textile brand! 🌟\n\n✨ Known for: Quality fabrics and ready-to-wear\n💰 Price: PKR 2,500 - 12,000\n🎨 Great variety of colors\n\nCheck out their collection in our catalog!";
    }

    if (message.includes('agha noor')) {
      return "Agha Noor offers luxury fashion! 👑\n\n✨ Specialty: Intricate embroidery & premium fabrics\n💰 Price: PKR 8,000 - 35,000\n🎨 Colors: Gold, Silver, Maroon, Navy, Ivory\n\nPerfect for special occasions!";
    }

    if (message.includes('limelight')) {
      return "Limelight is perfect for trendy, affordable fashion! ✨\n\n✨ Style: Vibrant colors & modern designs\n💰 Price: PKR 1,800 - 7,500\n🎨 Colors: Lime, Pink, Yellow, Blue, White\n\nGreat for young women!";
    }

    if (message.includes('brand') || message.includes('brands')) {
      return "We feature 17 premium Pakistani brands! 🛍️\n\nPopular ones:\n• Sapphire - Family fashion\n• Alkaram - Quality fabrics\n• Agha Noor - Luxury wear\n• Limelight - Trendy & affordable\n• J. - Traditional & modern\n\nUse the search bar to explore all brands!";
    }

    // Color queries
    if (message.includes('red')) {
      return "Red is a beautiful choice! ❤️\n\nBrands with red options:\n• Saaya\n• Alkaram\n• Ethnic\n• Outfitters\n\nUse the search bar and type 'red' to see all options!";
    }

    if (message.includes('blue')) {
      return "Blue is very popular! 💙\n\nBrands with blue options:\n• Sapphire (their signature!)\n• Beachtree\n• Alkaram\n• Zeen\n\nSearch 'blue' to see the full collection!";
    }

    if (message.includes('black')) {
      return "Black is always elegant! 🖤\n\nAvailable at:\n• Wardrobe\n• Agha Jaan (men's)\n• Oaks (men's)\n• Diners\n\nSearch 'black' to explore!";
    }

    if (message.includes('color')) {
      return "We have all colors! 🌈\n\nPopular colors:\n🔴 Red, 🔵 Blue, 🟢 Green\n⚫ Black, ⚪ White, 🟡 Yellow\n🟣 Purple, 🟠 Orange, 🟤 Brown\n\nJust search for any color in the search bar!";
    }

    // Price queries
    if (message.includes('cheap') || message.includes('affordable') || message.includes('budget')) {
      return "Budget-friendly options! 💰\n\n💵 Under PKR 5,000:\n• Beachtree (1,500-8,000)\n• Limelight (1,800-7,500)\n• Outfitters (1,500-8,000)\n• Wardrobe (2,000-9,000)\n\nGreat quality at affordable prices!";
    }

    if (message.includes('expensive') || message.includes('premium') || message.includes('luxury')) {
      return "Premium luxury brands! 👑\n\n💎 PKR 15,000+:\n• Agha Noor (8,000-35,000)\n• Omal by Komal (10,000-50,000)\n• Afroze (5,000-25,000)\n• MTJ (4,000-20,000)\n\nExquisite designs for special occasions!";
    }

    if (message.includes('price') || message.includes('cost')) {
      return "Price ranges vary by brand! 💰\n\n💵 Budget: PKR 1,500-5,000\n💎 Mid-range: PKR 5,000-15,000\n👑 Premium: PKR 15,000+\n\nWhich range interests you?";
    }

    // Men's fashion
    if (message.includes('men') || message.includes('male') || message.includes('boy')) {
      return "Men's fashion brands! 👔\n\n• Agha Jaan - Premium menswear\n• Oaks - Contemporary style\n• Diners - Casual & formal\n• J. - Traditional wear\n• Sapphire - Family fashion\n\nSearch 'men' to see all options!";
    }

    // Women's fashion
    if (message.includes('women') || message.includes('ladies') || message.includes('girl')) {
      return "Women's fashion brands! 👗\n\nWe have 15+ brands for women:\n• Saaya, Sapphire, Ethnic\n• Beachtree, Limelight, Alkaram\n• Agha Noor, Zeen, MTJ\n• And many more!\n\nBrowse our catalog to explore!";
    }

    // Styling advice
    if (message.includes('style') || message.includes('tip') || message.includes('advice')) {
      return "Fashion styling tips! ✨\n\n👗 Mix & Match:\n• Pair traditional kurtas with modern jeans\n• Add a statement dupatta\n\n🎨 Colors:\n• Complementary colors create balance\n• Monochrome is always elegant\n\n💍 Accessories:\n• Traditional jewelry for formal events\n• Minimal for casual wear\n\nWhat specific advice do you need?";
    }

    // Wedding/Party
    if (message.includes('wedding') || message.includes('party')) {
      return "Wedding & Party wear! 💒✨\n\nBest brands:\n• Agha Noor - Luxury embroidery\n• Omal by Komal - Designer wear\n• Afroze - Elegant designs\n• MTJ - Sophisticated fashion\n\nThese offer premium formal wear perfect for special occasions!";
    }

    // Casual wear
    if (message.includes('casual') || message.includes('daily')) {
      return "Casual daily wear! 👕\n\nComfortable brands:\n• Beachtree - Casual chic\n• Limelight - Trendy & comfy\n• Outfitters - Youth fashion\n• Wardrobe - Quality basics\n\nPerfect for everyday style!";
    }

    // Help/FAQ
    if (message.includes('help')) {
      return "I can help you with! 🤝\n\n🔍 Find brands by name\n🎨 Filter by colors\n💰 Search by price range\n👗 Suggest outfits\n💡 Give styling advice\n❓ Answer questions\n\nWhat would you like to know?";
    }

    // Thank you
    if (message.includes('thank')) {
      return "You're welcome! 😊 Feel free to ask anything else about Pakistani fashion. Happy shopping! 🛍️";
    }

    // Default response
    return "I'd love to help! 😊 You can ask me about:\n\n• Specific brands (Sapphire, Alkaram, etc.)\n• Colors you're looking for\n• Price ranges\n• Outfit suggestions\n• Men's or women's fashion\n• Styling tips\n\nWhat interests you?";
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Get bot response
    setTimeout(() => {
      const botResponse: Message = {
        text: getBotResponse(inputText),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);

    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse"
        aria-label="Toggle Fashion Assistant"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </button>

      {/* Chatbot Container */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-[90vw] sm:w-96 max-h-[70vh] h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden animate-slideUp flex flex-col">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 text-white flex-shrink-0">
            <h3 className="text-lg font-bold">Fashion Assistant 🤖</h3>
            <p className="text-sm opacity-90">Ask me about outfits, brands, and styling!</p>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-white text-gray-800 shadow-md'
                      : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Container */}
          <div className="p-4 bg-white border-t border-gray-200 flex-shrink-0">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none text-gray-800"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all flex-shrink-0"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
