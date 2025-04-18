
export interface ChatMessage {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  message: string;
  timestamp: string;
}

export interface RoomInfo {
  title: string;
  description: string;
  host: {
    name: string;
    avatar: string;
    title: string;
  };
  tags: string[];
  schedule: {
    start: string;
    end: string;
  };
  club: string;
  isPublic: boolean;
}
