
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface QuoteData {
  text: string;
  author: string;
}

const quotes: QuoteData[] = [
  {
    text: "The beautiful thing about learning is that nobody can take it away from you.",
    author: "B.B. King"
  },
  {
    text: "Education is not the filling of a pot but the lighting of a fire.",
    author: "W.B. Yeats"
  },
  {
    text: "The mind is not a vessel to be filled, but a fire to be kindled.",
    author: "Plutarch"
  },
  {
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi"
  },
  {
    text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
    author: "Dr. Seuss"
  },
  {
    text: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    author: "Malcolm X"
  },
  {
    text: "The expert in anything was once a beginner.",
    author: "Helen Hayes"
  },
  {
    text: "The only person who is educated is the one who has learned how to learn and change.",
    author: "Carl Rogers"
  },
  {
    text: "You don't have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar"
  },
  {
    text: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.",
    author: "Vince Lombardi"
  },
  {
    text: "The more I read, the more I acquire, the more certain I am that I know nothing.",
    author: "Voltaire"
  },
  {
    text: "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.",
    author: "Abigail Adams"
  }
];

const DailyQuote = () => {
  const [quote, setQuote] = useState<QuoteData | null>(null);

  useEffect(() => {
    // Check if we already generated a quote today
    const today = new Date().toDateString();
    const savedQuoteData = localStorage.getItem('dailyQuote');
    
    if (savedQuoteData) {
      try {
        const { date, quoteData } = JSON.parse(savedQuoteData);
        
        if (date === today && quoteData) {
          setQuote(quoteData);
          return;
        }
      } catch (e) {
        console.error('Error parsing saved quote', e);
      }
    }
    
    // Generate new quote for today
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const todaysQuote = quotes[randomIndex];
    setQuote(todaysQuote);
    
    // Save to localStorage
    localStorage.setItem('dailyQuote', JSON.stringify({
      date: today,
      quoteData: todaysQuote
    }));
  }, []);

  if (!quote) {
    return <div className="animate-pulse h-28 bg-muted rounded-lg"></div>;
  }

  return (
    <Card className="bg-gradient-to-r from-studynest-purple/80 to-studynest-blue-light/80 text-white">
      <CardContent className="p-6">
        <div className="flex items-start">
          <Quote className="flex-shrink-0 mr-3 mt-1" size={20} />
          <div>
            <p className="mb-2 text-lg font-medium italic">{quote.text}</p>
            <p className="text-sm text-white/80">— {quote.author}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyQuote;
