import {
  addMessage,
  getMessages,
  deleteMessage,
  getMessage,
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
export async function fetchMessage(id: string) {
  return getMessage(id);
}
