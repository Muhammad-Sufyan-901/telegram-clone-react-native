export interface Chat {
  profile: Profile;
  messages: Message[];
  media: Media[];
  files: File[];
  links: Link[];
  musics: Music[];
  sounds: Sound[];
  groups: Group[];
}

export interface Message {
  message: string;
  sendAt: Date;
  isSeen: boolean;
  isSender: boolean;
}

export interface Profile {
  username: string;
  profileImage: string;
  isOnline: boolean;
  lastSeen: Date;
  bio: string;
  phoneNumber: string;
}

export interface Media {
  thumbnail: string;
  isVideo: boolean;
  duration: string;
}

export interface File {
  thumbnail: string;
  name: string;
  format: string;
  size: string;
  sendAt: Date;
}

export interface Link {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
}

export interface Music {
  title: string;
  description: string;
  thumbnail: string;
}

export interface Sound {
  sendAt: Date;
  isSender: boolean;
}

export interface Group {
  name: string;
  members: string;
  profileImage: string;
}
