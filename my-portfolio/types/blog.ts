export interface BlogPost {
  id?: string;

  title: string;

  slug: string;

  excerpt: string;

  content: string;

  category: string;

  image: string;

  date: string;

  published?: boolean;

  createdAt?: number;

  updatedAt?: number;
}