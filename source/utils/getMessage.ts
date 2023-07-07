import { Message } from "../types";

export const getLastMessageSent = (messages: Message[]): Message => {
  return messages[messages.length - 1];
};
