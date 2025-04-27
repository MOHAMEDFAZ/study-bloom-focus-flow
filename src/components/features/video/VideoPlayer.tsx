
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface VideoPlayerProps {
  videoId: string | null;
}

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  if (!videoId) return null;

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Now Playing</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-video">
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
