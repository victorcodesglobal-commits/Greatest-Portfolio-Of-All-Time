import {
  addPost,
  getPosts,
  deletePost,
  getPost,
  updatePost,
} from "@/lib/firestore";

import { BlogPost } from "@/types/blog";

export async function createPost(post: BlogPost) {
  return addPost(post);
}

export async function fetchPosts() {
  return getPosts();
}

export async function removePost(id: string) {
  return deletePost(id);
}

export async function fetchPost(id: string) {
  return getPost(id);
}

export async function editPost(id: string, data: Partial<BlogPost>) {
  return updatePost(id, data);
}