
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThumbsUp, Bookmark, BookmarkCheck, ExternalLink } from 'lucide-react';
import { Video, SavedVideo } from './types';
import { formatDistance } from 'date-fns';

interface VideoCardProps {
  video: Video | SavedVideo;
  onPlay: (videoId: string) => void;
  onSave: (video: Video) => void;
  isSaved: boolean;
}

/**
 * VideoCard Component
 * 
 * Displays a single video with thumbnail, title, and action buttons
 * 
 * @param {Video|SavedVideo} video - The video object to display
 * @param {Function} onPlay - Handler for playing the video
 * @param {Function} onSave - Handler for saving/unsaving the video
 * @param {boolean} isSaved - Whether the video is currently saved
 * @returns Video card component with thumbnail and details
 */
const VideoCard = ({ video, onPlay, onSave, isSaved }: VideoCardProps) => {
  // Check if the video is a SavedVideo type (has savedAt property)
  const isSavedVideo = 'savedAt' in video;

  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl neo-blur border-white/10">
      <div className="relative group">
        {/* Video thumbnail */}
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-40 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
          onClick={() => onPlay(video.id)}
          loading="lazy"
        />
        
        {/* Play overlay */}
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
            {/* Video title */}
            <h4 
              className="font-medium text-base mb-1 line-clamp-2 cursor-pointer hover:text-studynest-purple transition-colors"
              onClick={() => onPlay(video.id)}
            >
              {video.title}
            </h4>
            
            {/* Channel name */}
            <p className="text-muted-foreground text-sm mb-1">{video.channelName}</p>
            
            {/* Saved date (if applicable) */}
            {isSavedVideo && (
              <p className="text-xs text-studynest-purple">
                Saved {formatDistance(new Date(video.savedAt), new Date(), { addSuffix: true })}
              </p>
            )}
          </div>
          
          <div className="flex gap-1">
            {/* External link button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="text-muted-foreground hover:text-studynest-purple transition-colors"
              onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank')}
              title="Open in YouTube"
            >
              <ExternalLink size={16} />
            </Button>
            
            {/* Save/unsave button */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onSave(video)}
              className="text-muted-foreground hover:text-studynest-purple transition-colors"
              title={isSaved ? "Remove from saved" : "Save video"}
            >
              {isSaved ? (
                <BookmarkCheck size={16} className="text-studynest-purple" />
              ) : (
                <Bookmark size={16} />
              )}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VideoCard;
