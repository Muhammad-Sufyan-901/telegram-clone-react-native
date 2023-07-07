import * as React from "react";
import { View } from "react-native";
import { chatList } from "../constants";
import { NewChatRow } from "../fragments";
import { getChatList } from "../utils";

export default function NewChatRowsComponent(): React.FunctionComponentElement<JSX.Element> {
  const mergedChatList = getChatList(chatList);

  return (
    <View className="flex-1 mt-1">
      {mergedChatList.map(
        ({ profile: { profileImage, username, lastSeen, isOnline, bio, phoneNumber } }): React.ReactNode => (
          <NewChatRow
            key={`${username} - ${lastSeen}`}
            profileImage={profileImage}
            username={username}
            lastSeen={lastSeen}
            isOnline={isOnline}
            bio={bio}
            phoneNumber={phoneNumber}
          />
        )
      )}
    </View>
  );
}
