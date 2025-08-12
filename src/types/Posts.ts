interface Tag {
  id: string;
  name: string;
}

interface User {
  id: string;
  username: string;
  email: string;
}

interface UserProfile {
  id: string;
  user: User;
  cratedAt: Date;
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
  postedOn: Date;
  updatedOn: Date;
}

export interface PostResponse {
  results: Post[];
  next: string;
  previous: string;
  count: number;
}
