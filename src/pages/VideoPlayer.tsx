
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import YouTubePlayer from '@/components/features/YouTubePlayer';
import { Card } from '@/components/ui/card';
import PageTransition from '@/components/ui/PageTransition';

const VideoPlayer = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow relative">
          {/* Beautiful gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-studynest-purple/5 -z-10" />
          
          <div className="container px-4 md:px-6 py-8 mx-auto">
            <div className="flex flex-col space-y-4">
              <div>
                <h1 className="text-4xl font-bold text-gradient">Study Videos</h1>
                <p className="text-muted-foreground mt-2">
                  Discover and watch curated educational content
                </p>
              </div>
              
              <Card className="neo-blur border-border/50">
                <YouTubePlayer />
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
