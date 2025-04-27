
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface VideoPlayerProps {
  videoId: string | null;
}

/**
 * VideoPlayer Component
 * 
 * Renders a YouTube embedded video player with a responsive design
 * and glassmorphism effects for modern UI appearance.
 * 
 * @param {string | null} videoId - YouTube video ID to be played
 * @returns React component or null if no videoId is provided
 */
const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  // State to track if the video has loaded
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Reset the loaded state when video ID changes
  useEffect(() => {
    setIsLoaded(false);
  }, [videoId]);

  // Return null if no video ID is provided
  if (!videoId) return null;

  return (
    <Card className="neo-blur border-white/10 shadow-xl overflow-hidden">
      <CardContent className="p-4 relative">
        {/* Show loading indicator until video loads */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10 rounded-lg">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-studynest-purple"></div>
          </div>
        )}
        
        {/* Responsive video container with 16:9 aspect ratio */}
        <div className="aspect-video rounded-lg overflow-hidden relative">
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${videoId}?rel=0`}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="rounded-lg"
            onLoad={() => setIsLoaded(true)}
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoPlayer;
