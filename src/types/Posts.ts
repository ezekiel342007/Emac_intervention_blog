export interface Tag {
  id: string;
  name: string;
}

interface User {
  id: string;
  user_username: string;
  user_email: string;
}

export interface UserProfile {
  id: string;
  user: User;
  created_at: string;
}

interface Author {
  id: string;
  user_username: string;
  user_email: string;
  created_at: string;
}

export interface Post {
  id: string;
  title: string;
  image_url: string;
  descripttion: string;
  body: string;
  tags: Tag[];
  author: UserProfile;
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
