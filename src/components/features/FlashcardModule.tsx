
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Save, X, ChevronLeft, ChevronRight, Check, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: string;
  lastReviewed?: Date;
  confidence?: 'low' | 'medium' | 'high';
}

const defaultFlashcards: Flashcard[] = [
  {
    id: '1',
    question: 'What is the capital of France?',
    answer: 'Paris',
    category: 'Geography',
    confidence: 'high'
  },
  {
    id: '2',
    question: 'What is the square root of 144?',
    answer: '12',
    category: 'Math',
    confidence: 'medium'
  },
  {
    id: '3',
    question: 'Who wrote "To Kill a Mockingbird"?',
    answer: 'Harper Lee',
    category: 'Literature',
    confidence: 'low'
  }
];

const FlashcardModule = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');

  // Load flashcards from localStorage on component mount
  useEffect(() => {
    const savedFlashcards = localStorage.getItem('flashcards');
    if (savedFlashcards) {
      try {
        setFlashcards(JSON.parse(savedFlashcards));
      } catch (e) {
        console.error('Error parsing flashcards from localStorage', e);
        setFlashcards(defaultFlashcards);
      }
    } else {
      setFlashcards(defaultFlashcards);
    }
  }, []);

  // Extract unique categories
  useEffect(() => {
    const uniqueCategories = Array.from(new Set(flashcards.map(card => card.category)));
    setCategories(uniqueCategories);
  }, [flashcards]);

  // Save flashcards to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
  }, [flashcards]);

  const filteredFlashcards = selectedCategory === 'all' 
    ? flashcards 
    : flashcards.filter(card => card.category === selectedCategory);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextCard = () => {
    if (currentCardIndex < filteredFlashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    } else {
      toast.success("You've reviewed all cards in this set!");
      setCurrentCardIndex(0);
      setIsFlipped(false);
    }
  };

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleAddCard = () => {
    if (!newQuestion.trim() || !newAnswer.trim()) {
      toast.error("Question and answer cannot be empty");
      return;
    }

    const newCard: Flashcard = {
      id: Date.now().toString(),
      question: newQuestion,
      answer: newAnswer,
      category: newCategory || 'Uncategorized',
      lastReviewed: new Date(),
      confidence: 'medium'
    };

    setFlashcards([...flashcards, newCard]);
    setNewQuestion('');
    setNewAnswer('');
    setNewCategory('');
    setIsAddingCard(false);
    toast.success("Flashcard added successfully!");
  };

  const updateConfidence = (confidence: 'low' | 'medium' | 'high') => {
    const updatedFlashcards = [...flashcards];
    const cardIndex = flashcards.findIndex(card => card.id === filteredFlashcards[currentCardIndex].id);
    
    if (cardIndex !== -1) {
      updatedFlashcards[cardIndex] = {
        ...updatedFlashcards[cardIndex],
        confidence,
        lastReviewed: new Date()
      };
      
      setFlashcards(updatedFlashcards);
    }
    
    // Move to the next card
    handleNextCard();
  };

  // No flashcards available
  if (filteredFlashcards.length === 0) {
    return (
      <div className="flex flex-col items-center p-6">
        <div className="text-center mb-6">
          <AlertCircle className="mx-auto h-12 w-12 text-yellow-500 mb-2" />
          <h3 className="text-lg font-semibold mb-1">No flashcards available</h3>
          <p className="text-muted-foreground mb-4">
            {selectedCategory !== 'all' 
              ? `No flashcards found in the "${selectedCategory}" category.` 
              : "You haven't created any flashcards yet."}
          </p>
          {selectedCategory !== 'all' && (
            <Button 
              variant="outline" 
              onClick={() => setSelectedCategory('all')}
              className="mb-4"
            >
              Show All Categories
            </Button>
          )}
        </div>
        
        <Button 
          onClick={() => setIsAddingCard(true)}
          className="bg-studynest-purple hover:bg-studynest-purple-secondary"
        >
          <PlusCircle size={18} className="mr-1" /> Create Your First Flashcard
        </Button>
        
        {isAddingCard && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md">
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Create New Flashcard</h3>
                  <Button variant="ghost" size="icon" onClick={() => setIsAddingCard(false)}>
                    <X size={18} />
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Question</label>
                    <Textarea 
                      placeholder="Enter your question..."
                      value={newQuestion}
                      onChange={(e) => setNewQuestion(e.target.value)}
                      className="resize-none"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Answer</label>
                    <Textarea 
                      placeholder="Enter the answer..."
                      value={newAnswer}
                      onChange={(e) => setNewAnswer(e.target.value)}
                      className="resize-none"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Category (optional)</label>
                    <Input 
                      placeholder="e.g., Math, Science, History"
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-2 pt-2">
                    <Button variant="outline" onClick={() => setIsAddingCard(false)}>
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleAddCard}
                      className="bg-studynest-purple hover:bg-studynest-purple-secondary"
                    >
                      <Save size={16} className="mr-1" /> Save Card
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {!isAddingCard && (
        <div className="flex flex-wrap gap-2 mb-4">
          <Button
            variant={selectedCategory === 'all' ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory('all')}
            className={selectedCategory === 'all' ? "bg-studynest-purple hover:bg-studynest-purple-secondary" : ""}
          >
            All
          </Button>
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-studynest-purple hover:bg-studynest-purple-secondary" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
      )}
      
      {!isAddingCard ? (
        <>
          <div 
            className="w-full h-64 sm:h-80 cursor-pointer mb-4"
            onClick={handleCardFlip}
          >
            <div className={`relative w-full h-full transition-all duration-500 ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`} style={{ transformStyle: 'preserve-3d' }}>
              {/* Front of card (Question) */}
              <div 
                className={`absolute inset-0 flex flex-col items-center justify-center p-6 rounded-xl shadow-lg ${
                  isFlipped ? "opacity-0 [backface-visibility:hidden]" : "opacity-100"}`}
                style={{ 
                  backfaceVisibility: 'hidden',
                  background: "linear-gradient(135deg, #9b87f5 0%, #D3E4FD 100%)" 
                }}
              >
                <div className="text-white font-medium mb-2 text-sm">Question</div>
                <p className="text-white text-center text-xl font-semibold">
                  {filteredFlashcards[currentCardIndex].question}
                </p>
                <div className="absolute bottom-3 right-3 text-white/70 text-xs">
                  Tap to reveal answer
                </div>
              </div>
              
              {/* Back of card (Answer) */}
              <div 
                className={`absolute inset-0 flex flex-col items-center justify-center p-6 rounded-xl shadow-lg ${
                  !isFlipped ? "opacity-0 [transform:rotateY(180deg)] [backface-visibility:hidden]" : "opacity-100 [transform:rotateY(180deg)]"
                }`}
                style={{ 
                  backfaceVisibility: 'hidden',
                  background: "linear-gradient(135deg, #33C3F0 0%, #D6BCFA 100%)" 
                }}
              >
                <div className="text-white font-medium mb-2 text-sm">Answer</div>
                <p className="text-white text-center text-xl font-semibold">
                  {filteredFlashcards[currentCardIndex].answer}
                </p>
                <div className="absolute bottom-3 right-3 text-white/70 text-xs">
                  Tap to see question
                </div>
              </div>
            </div>
          </div>
          
          {isFlipped && (
            <div className="flex justify-center space-x-4 mb-6">
              <Button 
                variant="outline" 
                className="border-red-400 text-red-500 hover:bg-red-500/10"
                onClick={() => updateConfidence('low')}
              >
                Difficult
              </Button>
              <Button 
                variant="outline" 
                className="border-yellow-400 text-yellow-500 hover:bg-yellow-500/10"
                onClick={() => updateConfidence('medium')}
              >
                Good
              </Button>
              <Button 
                variant="outline" 
                className="border-green-400 text-green-500 hover:bg-green-500/10"
                onClick={() => updateConfidence('high')}
              >
                Easy
              </Button>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Card {currentCardIndex + 1} of {filteredFlashcards.length}
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline" 
                size="icon"
                onClick={handlePrevCard}
                disabled={currentCardIndex === 0}
              >
                <ChevronLeft size={18} />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={handleNextCard}
                disabled={currentCardIndex === filteredFlashcards.length - 1}
              >
                <ChevronRight size={18} />
              </Button>
            </div>
            
            <Button 
              variant="outline"
              size="sm"
              onClick={() => setIsAddingCard(true)}
            >
              <PlusCircle size={16} className="mr-1" /> Add New
            </Button>
          </div>
        </>
      ) : (
        <div className="p-4 border border-border rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Create New Flashcard</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsAddingCard(false)}>
              <X size={18} />
            </Button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Question</label>
              <Textarea 
                placeholder="Enter your question..."
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                className="resize-none"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Answer</label>
              <Textarea 
                placeholder="Enter the answer..."
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                className="resize-none"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Category (optional)</label>
              <Input 
                placeholder="e.g., Math, Science, History"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
            </div>
            
            <div className="flex justify-end space-x-2 pt-2">
              <Button variant="outline" onClick={() => setIsAddingCard(false)}>
                Cancel
              </Button>
              <Button 
                onClick={handleAddCard}
                className="bg-studynest-purple hover:bg-studynest-purple-secondary"
              >
                <Save size={16} className="mr-1" /> Save Card
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlashcardModule;
