interface Tag {
  id: string;
  name: string;
}

interface User {
  id: string;
  user_username: string;
  user_email: string;
}

interface UserProfile {
  id: string;
  user: User;
  cratedAt: Date;
}

interface Author {
  id: string;
  user_username: string;
  user_email: string;
  created_at: Date;
}

export interface Post {
  id: string;
  title: string;
  image_url: string;
  descripttion: string;
  body: string;
  tags: Tag[];
  author: Author;
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
  access_token: string;
  refresh_token: string;
}
