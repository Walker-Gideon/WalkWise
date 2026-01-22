import { useState, useEffect } from "react";

import quotes from "/src/data/quote";

export function useQuotes() {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const currentQuote = quotes[currentQuoteIndex];
    
    useEffect(() => {
        if (quotes.length === 0) return;
    
        const quoteTimer = setInterval(() => {
          setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 10000);
    
        return () => clearInterval(quoteTimer);
    }, [quotes]);
    
    return {quote: currentQuote.quote, author: currentQuote.author};
}