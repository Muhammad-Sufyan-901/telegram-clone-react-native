import { Chat } from "../types";

export const getChatList = (chatList: Chat[]): Chat[] => {
  const filteredChatListBasedOnIsOnline = chatList.filter(({ profile: { isOnline } }) => isOnline === true);
  const filteredChatListBasedOnIsOffline = chatList.filter(({ profile: { isOnline } }) => isOnline === false);
  const filteredChatListBasedOnLastSeen = filteredChatListBasedOnIsOffline.sort((a, b) => a.profile.lastSeen.getTime() - b.profile.lastSeen.getTime());

  return [...filteredChatListBasedOnIsOnline, ...filteredChatListBasedOnLastSeen];
};
