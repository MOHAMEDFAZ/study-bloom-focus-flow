
export interface Video {
  id: string;
  title: string;
  channelId: string;
  thumbnail: string;
  channelName: string;
}

export interface SavedVideo extends Video {
  savedAt: Date;
}
