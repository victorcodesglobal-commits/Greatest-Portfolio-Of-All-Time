import {
  addMessage,
  getMessages,
  deleteMessage,
} from "@/lib/firestore";

export async function createMessage(data: any) {
  return addMessage(data);
}

export async function fetchMessages() {
  return getMessages();
}

export async function removeMessage(id: string) {
  return deleteMessage(id);
}