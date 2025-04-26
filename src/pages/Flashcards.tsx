
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FlashcardModule from '@/components/features/FlashcardModule';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { BookOpen, PlusCircle } from 'lucide-react';

const Flashcards = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-background/70">
        <div className="container px-4 md:px-6 py-8 mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Flashcards</h1>
              <p className="text-muted-foreground">Create, organize, and review your flashcards</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="text-studynest-purple" size={20} />
                    Flashcard Review
                  </CardTitle>
                  <CardDescription>
                    Click on cards to flip them. Rate your confidence after reviewing.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <FlashcardModule />
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tips for Effective Flashcards</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 border-l-2 border-studynest-purple bg-muted/30 rounded-r-md">
                    <p className="text-sm">
                      <span className="font-medium">Keep it simple.</span> One question, one concept per card.
                    </p>
                  </div>
                  
                  <div className="p-3 border-l-2 border-studynest-purple bg-muted/30 rounded-r-md">
                    <p className="text-sm">
                      <span className="font-medium">Use visual cues.</span> Adding relevant images helps with memory recall.
                    </p>
                  </div>
                  
                  <div className="p-3 border-l-2 border-studynest-purple bg-muted/30 rounded-r-md">
                    <p className="text-sm">
                      <span className="font-medium">Review regularly.</span> Spaced repetition is key to long-term retention.
                    </p>
                  </div>
                  
                  <div className="p-3 border-l-2 border-studynest-purple bg-muted/30 rounded-r-md">
                    <p className="text-sm">
                      <span className="font-medium">Test both ways.</span> Practice recalling in both directions for better mastery.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Flashcard Templates</CardTitle>
                  <CardDescription>
                    Quick-start with pre-made templates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen size={16} className="mr-2 text-studynest-purple" /> Vocabulary Template
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen size={16} className="mr-2 text-studynest-purple" /> Math Formulas Template
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen size={16} className="mr-2 text-studynest-purple" /> Historical Dates Template
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <PlusCircle size={16} className="mr-2 text-studynest-purple" /> Create Custom Template
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Flashcards;
