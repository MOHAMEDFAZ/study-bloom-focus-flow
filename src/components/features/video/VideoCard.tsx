
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThumbsUp, Bookmark, BookmarkCheck } from 'lucide-react';
import { Video, SavedVideo } from './types';

interface VideoCardProps {
  video: Video | SavedVideo;
  onPlay: (videoId: string) => void;
  onSave: (video: Video) => void;
  isSaved: boolean;
}

const VideoCard = ({ video, onPlay, onSave, isSaved }: VideoCardProps) => {
  return (
    <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-lg">
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-36 object-cover cursor-pointer"
          onClick={() => onPlay(video.id)}
        />
        <div 
          className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 cursor-pointer"
          onClick={() => onPlay(video.id)}
        >
          <ThumbsUp className="text-white mr-2" size={20} />
          <span className="text-white font-medium">Play Video</span>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h4 
              className="font-medium text-base mb-1 line-clamp-2 cursor-pointer hover:text-studynest-purple"
              onClick={() => onPlay(video.id)}
            >
              {video.title}
            </h4>
            <p className="text-muted-foreground text-sm">{video.channelName}</p>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => onSave(video)}
            className="text-muted-foreground hover:text-studynest-purple"
          >
            {isSaved ? (
              <BookmarkCheck size={18} className="text-studynest-purple" />
            ) : (
              <Bookmark size={18} />
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
