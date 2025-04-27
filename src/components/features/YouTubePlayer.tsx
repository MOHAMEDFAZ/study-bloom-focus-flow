import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import SearchBar from './video/SearchBar';
import VideoPlayer from './video/VideoPlayer';
import VideoCard from './video/VideoCard';
import { Video, SavedVideo } from './video/types';
import { Button } from '@/components/ui/button';

// Whitelist of educational YouTube channels (by channel ID)
const WHITELISTED_CHANNELS = [
  'UCBgvgzRsLZKomO3SjU-jOBw', // Khan Academy
  'UCX6b17PVsYBQ0ip5gyeme-Q', // CrashCourse
  'UC8butISFwT-Wl7EV0hUK0BQ', // freeCodeCamp
  'UCYO_jab_esuFRV4b17AJtAw', // 3Blue1Brown
  'UCsMica-v34Irf9KVTh6xx-g', // Harvard CS50
  'UClnDI2sdehVm1zm_LmUHsjQ', // Stated Clearly
  'UC-2Y8dQb0S6DtpxNgAKoJKA', // Practical Engineering
  'UCuVLG9pThvBABcYCm7pkNkA', // Deep Look
  'UCocnRPm84wAXRuJshAFW3aQ', // VSauce
  'UCsT0YIqwnpJCM-mx7-gSA4Q', // TEDx Talks
];

const YOUTUBE_API_KEY = 'AIzaSyA6Sp0Jo0YI5pTZZ8g5QQOJ_'; // Note: This is a dummy key

const YouTubePlayer = () => {
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [savedVideos, setSavedVideos] = useState<SavedVideo[]>([]);
  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('savedVideos');
    if (saved) {
      try {
        setSavedVideos(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading saved videos', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedVideos', JSON.stringify(savedVideos));
  }, [savedVideos]);

  const searchYouTube = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=${encodeURIComponent(
          query + ' educational'
        )}&key=${YOUTUBE_API_KEY}`
      );

      if (!response.ok) {
        throw new Error('YouTube API request failed');
      }

      const data = await response.json();
      const videos: Video[] = data.items
        .filter((item: any) => WHITELISTED_CHANNELS.includes(item.snippet.channelId))
        .map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          channelId: item.snippet.channelId,
          thumbnail: item.snippet.thumbnails.high.url,
          channelName: item.snippet.channelTitle,
        }));

      setSearchResults(videos);
    } catch (error) {
      console.error('Error searching YouTube:', error);
      toast.error('Failed to fetch videos. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePlayVideo = (videoId: string) => {
    setCurrentVideoId(videoId);
  };

  const handleSaveVideo = (video: Video) => {
    // Check if video is already saved
    const isAlreadySaved = savedVideos.some(saved => saved.id === video.id);
    
    if (isAlreadySaved) {
      // Remove from saved videos
      const updatedSavedVideos = savedVideos.filter(saved => saved.id !== video.id);
      setSavedVideos(updatedSavedVideos);
      toast.success("Video removed from your saved videos");
    } else {
      // Add to saved videos
      const videoToSave: SavedVideo = {
        ...video,
        savedAt: new Date()
      };
      
      setSavedVideos([...savedVideos, videoToSave]);
      toast.success("Video saved to your collection");
    }
  };

  const isVideoSaved = (videoId: string) => {
    return savedVideos.some(video => video.id === videoId);
  };

  const displayVideos = showSaved ? savedVideos : searchResults;

  return (
    <div className="space-y-6">
      <SearchBar 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isLoading={isLoading}
      />

      <div className="flex gap-2">
        <Button 
          variant={showSaved ? "outline" : "default"} 
          className={!showSaved ? "bg-studynest-purple hover:bg-studynest-purple-secondary" : ""}
          onClick={() => setShowSaved(false)}
        >
          Search Results
        </Button>
        <Button 
          variant={showSaved ? "default" : "outline"}
          className={showSaved ? "bg-studynest-purple hover:bg-studynest-purple-secondary" : ""}
          onClick={() => setShowSaved(true)}
        >
          Saved Videos
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <VideoPlayer videoId={currentVideoId} />

        <div>
          <h3 className="text-lg font-semibold mb-4">
            {showSaved 
              ? `Saved Videos (${savedVideos.length})` 
              : searchQuery.trim() 
                ? `Search Results (${searchResults.length})` 
                : "Search for Educational Videos"}
          </h3>

          {isLoading ? (
            <div className="flex items-center justify-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-studynest-purple"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {displayVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onPlay={handlePlayVideo}
                  onSave={handleSaveVideo}
                  isSaved={isVideoSaved(video.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YouTubePlayer;
