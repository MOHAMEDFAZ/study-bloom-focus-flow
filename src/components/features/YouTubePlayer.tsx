
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ThumbsUp, Bookmark, BookmarkCheck } from 'lucide-react';
import { toast } from 'sonner';

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
  'UCocnRPm84wAXRuJshAFW3aQ', // VSauce (original channel)
  'UCsT0YIqwnpJCM-mx7-gSA4Q', // TEDx Talks
];

// List of educational video suggestions
const VIDEO_SUGGESTIONS = [
  { 
    id: 'L_Guz73e6fw', 
    title: 'How to Study Effectively', 
    channelId: 'UCX6b17PVsYBQ0ip5gyeme-Q',
    thumbnail: 'https://i.ytimg.com/vi/L_Guz73e6fw/hqdefault.jpg',
    channelName: 'CrashCourse'
  },
  { 
    id: 'IlU-zDU6aQ0', 
    title: 'Study Tips - How to learn efficiently', 
    channelId: 'UC8butISFwT-Wl7EV0hUK0BQ',
    thumbnail: 'https://i.ytimg.com/vi/IlU-zDU6aQ0/hqdefault.jpg',
    channelName: 'freeCodeCamp'
  },
  { 
    id: 'p60rN9JEapg', 
    title: 'How to Learn Anything Fast', 
    channelId: 'UCBgvgzRsLZKomO3SjU-jOBw',
    thumbnail: 'https://i.ytimg.com/vi/p60rN9JEapg/hqdefault.jpg',
    channelName: 'Khan Academy'
  },
  { 
    id: 'Z-zNHHpXoMM', 
    title: 'The Pomodoro Technique', 
    channelId: 'UCYO_jab_esuFRV4b17AJtAw',
    thumbnail: 'https://i.ytimg.com/vi/Z-zNHHpXoMM/hqdefault.jpg',
    channelName: '3Blue1Brown'
  },
];

interface Video {
  id: string;
  title: string;
  channelId: string;
  thumbnail: string;
  channelName: string;
}

interface SavedVideo extends Video {
  savedAt: Date;
}

const YouTubePlayer = () => {
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [savedVideos, setSavedVideos] = useState<SavedVideo[]>([]);
  const [showSaved, setShowSaved] = useState(false);
  
  // Load saved videos from localStorage
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
  
  // Save videos to localStorage when they change
  useEffect(() => {
    localStorage.setItem('savedVideos', JSON.stringify(savedVideos));
  }, [savedVideos]);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a search term");
      return;
    }
    
    setIsLoading(true);
    // In a real app, we would call the YouTube API here
    // For this demo, we'll just return some mock results based on the suggestions
    setTimeout(() => {
      // Filter suggestions based on search query
      const results = VIDEO_SUGGESTIONS.filter(video =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setSearchResults(results);
      setIsLoading(false);
      
      if (results.length === 0) {
        toast.info("No educational videos found. Try another search term.");
      }
    }, 1000);
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
  
  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Input 
          placeholder="Search for educational videos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
          className="pr-14"
        />
        <Button 
          variant="ghost" 
          size="sm"
          className="absolute right-1 top-1/2 transform -translate-y-1/2"
          onClick={handleSearch}
          disabled={isLoading}
        >
          <Search size={18} />
        </Button>
      </div>
      
      {/* Toggle between search and saved */}
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
        {/* YouTube Player */}
        {currentVideoId && (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Now Playing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${currentVideoId}?rel=0`}
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* Video List */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            {showSaved 
              ? `Saved Videos (${savedVideos.length})` 
              : searchResults.length 
                ? `Search Results (${searchResults.length})` 
                : "Recommended Educational Videos"
            }
          </h3>
          
          {isLoading ? (
            <div className="flex items-center justify-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-studynest-purple"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(showSaved ? savedVideos : searchResults.length ? searchResults : VIDEO_SUGGESTIONS).map((video) => (
                <Card key={video.id} className="overflow-hidden h-full">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-36 object-cover cursor-pointer"
                      onClick={() => handlePlayVideo(video.id)}
                    />
                    <div 
                      className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 cursor-pointer"
                      onClick={() => handlePlayVideo(video.id)}
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
                          onClick={() => handlePlayVideo(video.id)}
                        >
                          {video.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">{video.channelName}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleSaveVideo(video)}
                        className="text-muted-foreground hover:text-studynest-purple"
                      >
                        {isVideoSaved(video.id) ? (
                          <BookmarkCheck size={18} className="text-studynest-purple" />
                        ) : (
                          <Bookmark size={18} />
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YouTubePlayer;
