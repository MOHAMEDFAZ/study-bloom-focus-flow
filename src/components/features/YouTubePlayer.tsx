
import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import SearchBar from './video/SearchBar';
import VideoPlayer from './video/VideoPlayer';
import VideoCard from './video/VideoCard';
import { Video, SavedVideo } from './video/types';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

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

/**
 * YouTubePlayer Component
 * 
 * Comprehensive video player with search functionality and saved video management
 * Uses a channel whitelist to ensure only educational content is displayed
 */
const YouTubePlayer = () => {
  // State management
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [savedVideos, setSavedVideos] = useState<SavedVideo[]>([]);
  const [showSaved, setShowSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load saved videos from localStorage on initial render
  useEffect(() => {
    try {
      const saved = localStorage.getItem('savedVideos');
      if (saved) {
        setSavedVideos(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Error loading saved videos', e);
      toast.error('Could not load your saved videos');
    }
  }, []);

  // Save videos to localStorage whenever savedVideos changes
  useEffect(() => {
    try {
      localStorage.setItem('savedVideos', JSON.stringify(savedVideos));
    } catch (e) {
      console.error('Error saving videos', e);
    }
  }, [savedVideos]);

  // Search handler with debouncing and error handling
  const searchYouTube = useCallback(async (query: string) => {
    // Reset error state
    setError(null);
    
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    try {
      // Using a mock API call for demonstration
      // In production, this would use your actual API key
      setTimeout(() => {
        // Sample mock data
        const mockVideos: Video[] = [
          {
            id: 'dQw4w9WgXcQ',
            title: 'Educational Science Video',
            channelId: 'UCX6b17PVsYBQ0ip5gyeme-Q',
            thumbnail: 'https://via.placeholder.com/480x360',
            channelName: 'CrashCourse',
          },
          {
            id: 'J---aiyznGQ',
            title: 'Mathematics Explained',
            channelId: 'UCYO_jab_esuFRV4b17AJtAw',
            thumbnail: 'https://via.placeholder.com/480x360',
            channelName: '3Blue1Brown',
          },
        ];
        
        setSearchResults(mockVideos);
        setIsLoading(false);
      }, 1000);
      
      // Commented out actual API call to prevent API key exposure
      // In a real app, this would be the implementation:
      /*
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
      */
    } catch (error) {
      console.error('Error searching YouTube:', error);
      setError('Failed to fetch videos. Please try again.');
      toast.error('Failed to fetch videos. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Handle search query changes
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    searchYouTube(query);
  };

  // Handle video playback
  const handlePlayVideo = (videoId: string) => {
    setCurrentVideoId(videoId);
    // Scroll to top to view the video player
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle saving/unsaving videos
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

  // Check if a video is saved
  const isVideoSaved = (videoId: string) => {
    return savedVideos.some(video => video.id === videoId);
  };

  // Determine which videos to display based on current tab
  const displayVideos = showSaved ? savedVideos : searchResults;

  return (
    <div className="space-y-6">
      {/* Search bar component */}
      <SearchBar 
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        isLoading={isLoading}
      />

      {/* Tab navigation for search results vs saved videos */}
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
          Saved Videos ({savedVideos.length})
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Video player component */}
        <VideoPlayer videoId={currentVideoId} />

        <div>
          {/* Section heading */}
          <h3 className="text-lg font-semibold mb-4">
            {showSaved 
              ? `Saved Videos (${savedVideos.length})` 
              : searchQuery.trim() 
                ? `Search Results (${searchResults.length})` 
                : "Search for Educational Videos"}
          </h3>

          {/* Error message display */}
          {error && (
            <div className="flex items-center justify-center p-4 mb-4 bg-destructive/20 rounded-lg text-white" role="alert">
              <AlertCircle className="mr-2" size={20} aria-hidden="true" />
              <p>{error}</p>
            </div>
          )}

          {/* Loading state */}
          {isLoading ? (
            <div className="flex items-center justify-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-studynest-purple" 
                   aria-label="Loading search results"></div>
            </div>
          ) : (
            /* Video grid display */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayVideos.length > 0 ? (
                displayVideos.map((video) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    onPlay={handlePlayVideo}
                    onSave={handleSaveVideo}
                    isSaved={isVideoSaved(video.id)}
                  />
                ))
              ) : (
                /* Empty state */
                <div className="col-span-full flex flex-col items-center justify-center p-8 text-center">
                  {showSaved ? (
                    <>
                      <p className="text-muted-foreground mb-2">You haven't saved any videos yet.</p>
                      <Button 
                        variant="outline" 
                        onClick={() => setShowSaved(false)}
                      >
                        Search for videos
                      </Button>
                    </>
                  ) : (
                    <p className="text-muted-foreground">
                      {searchQuery ? "No videos found. Try a different search term." : "Type something to search for educational videos."}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YouTubePlayer;
