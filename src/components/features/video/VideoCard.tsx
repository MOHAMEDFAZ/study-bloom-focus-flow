
import React from 'react';
import { Card } from '@/components/ui/card';
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
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl neo-blur border-white/10">
      <div className="relative group">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-40 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
          onClick={() => onPlay(video.id)}
        />
        <div 
          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 cursor-pointer backdrop-blur-sm"
          onClick={() => onPlay(video.id)}
        >
          <ThumbsUp className="text-white mr-2" size={20} />
          <span className="text-white font-medium">Play Video</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h4 
              className="font-medium text-base mb-1 line-clamp-2 cursor-pointer hover:text-studynest-purple transition-colors"
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
            className="text-muted-foreground hover:text-studynest-purple transition-colors"
          >
            {isSaved ? (
              <BookmarkCheck size={18} className="text-studynest-purple" />
            ) : (
              <Bookmark size={18} />
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default VideoCard;
