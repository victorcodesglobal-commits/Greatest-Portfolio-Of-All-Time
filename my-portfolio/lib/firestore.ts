import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import type { BlogPost } from "@/types/blog";
import { db } from "./firebase";

/* ---------------- HELPERS ---------------- */

function toBlogPost(snapshot: any): BlogPost {
  const data = snapshot.data();

  return {
    id: snapshot.id,
    title: data.title,
    slug: data.slug,
    excerpt: data.excerpt,
    content: data.content,
    category: data.category,
    image: data.image,
    date: data.date,
    published: data.published ?? false,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  };
}

/* ---------------- POSTS ---------------- */

const postsCollection = collection(db, "posts");

export async function addPost(data: any) {
  return addDoc(postsCollection, {
    ...data,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });
}

export async function getPosts(): Promise<BlogPost[]> {
  const q = query(postsCollection, orderBy("date", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((d) => toBlogPost(d));
}

export async function getPost(id: string): Promise<BlogPost | null> {
  const snapshot = await getDoc(doc(db, "posts", id));

  if (!snapshot.exists()) return null;

  return toBlogPost(snapshot);
}

export async function deletePost(id: string) {
  return deleteDoc(doc(db, "posts", id));
}

export async function updatePost(id: string, data: any) {
  return updateDoc(doc(db, "posts", id), {
    ...data,
    updatedAt: Date.now(),
  });
}

/* ---------------- PROJECTS ---------------- */

const projectsCollection = collection(db, "projects");

export async function addProject(data: any) {
  return addDoc(projectsCollection, {
    ...data,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });
}

export async function getProjects() {
  const q = query(projectsCollection, orderBy("title"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function getProject(id: string) {
  const snapshot = await getDoc(doc(db, "projects", id));

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}

export async function deleteProject(id: string) {
  return deleteDoc(doc(db, "projects", id));
}

export async function updateProject(id: string, data: any) {
  return updateDoc(doc(db, "projects", id), {
    ...data,
    updatedAt: Date.now(),
  });
}

/* ---------------- MESSAGES ---------------- */

const messagesCollection = collection(db, "messages");

export async function addMessage(data: any) {
  return addDoc(messagesCollection, {
    ...data,
    createdAt: Date.now(),
  });
}

export async function getMessages() {
  const q = query(messagesCollection, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function getMessage(id: string) {
  const snapshot = await getDoc(doc(db, "messages", id));

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}

export async function deleteMessage(id: string) {
  return deleteDoc(doc(db, "messages", id));
}