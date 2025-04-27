
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface VideoPlayerProps {
  videoId: string | null;
}

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  if (!videoId) return null;

  return (
    <Card className="neo-blur border-white/10 shadow-xl">
      <CardContent className="p-4">
        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${videoId}?rel=0`}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoPlayer;
