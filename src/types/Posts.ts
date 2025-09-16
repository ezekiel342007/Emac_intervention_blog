export interface Tag {
  id: string;
  name: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  date_joined: string;
}

export interface UserProfile {
  id: string;
  user: User;
  created_at: string;
}

export interface Post {
  id: string;
  title: string;
  image_url: string;
  descripttion: string;
  body: string;
  tags: Tag[];
  author: {
    id: string,
    user_email: string,
    user_username: string,
    is_author: boolean,
    created_at: string
  };
  likes: number;
  disLikes: number;
  posted_on: string;
  updated_on: string;
}

export interface ImageType {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export interface PostResponse {
  results: Post[];
  next: string;
  previous: string;
  count: number;
}

export interface TokenResponse {
  access: string;
}
