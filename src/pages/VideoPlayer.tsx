
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import YouTubePlayer from '@/components/features/YouTubePlayer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Youtube, ThumbsUp } from 'lucide-react';
import PageTransition from '@/components/ui/PageTransition';

const VideoPlayer = () => {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow bg-background/70">
          <div className="container px-4 md:px-6 py-8 mx-auto">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">Study Videos</h1>
                <p className="text-muted-foreground">Watch ad-free educational videos to enhance your learning</p>
              </div>
            </div>
            
            <Card className="shadow-lg mb-8 border-border/50 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Youtube className="text-studynest-purple" size={20} />
                  Educational Video Player
                </CardTitle>
                <CardDescription>
                  Search and watch videos from trusted educational sources. Save your favorites for later.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <YouTubePlayer />
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle>About Our Video Player</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Our educational video player is designed to help you focus on learning without distractions.
                    We carefully curate content from trusted educational channels to ensure high-quality information.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <ThumbsUp size={18} className="text-studynest-purple mt-0.5" />
                      <p className="text-sm">Ad-free viewing experience</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ThumbsUp size={18} className="text-studynest-purple mt-0.5" />
                      <p className="text-sm">Content from vetted educational sources</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ThumbsUp size={18} className="text-studynest-purple mt-0.5" />
                      <p className="text-sm">Save videos for later review</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ThumbsUp size={18} className="text-studynest-purple mt-0.5" />
                      <p className="text-sm">Integrates with your study sessions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle>Featured Channels</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                      <h3 className="font-medium mb-1">Khan Academy</h3>
                      <p className="text-sm text-muted-foreground">Math, Science, Computing, and more</p>
                    </div>
                    
                    <div className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                      <h3 className="font-medium mb-1">Crash Course</h3>
                      <p className="text-sm text-muted-foreground">Quick, engaging educational content</p>
                    </div>
                    
                    <div className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                      <h3 className="font-medium mb-1">3Blue1Brown</h3>
                      <p className="text-sm text-muted-foreground">Math visualizations and explanations</p>
                    </div>
                    
                    <div className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                      <h3 className="font-medium mb-1">freeCodeCamp</h3>
                      <p className="text-sm text-muted-foreground">Programming and web development</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default VideoPlayer;
