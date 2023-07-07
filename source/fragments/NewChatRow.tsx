import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import type { Profile as NewChatRowProps } from "../types";
import { hourFormatter } from "../utils";

export default function NewChatRow({ profileImage, username, isOnline, lastSeen }: NewChatRowProps): React.FunctionComponentElement<JSX.Element> {
  return (
    <TouchableOpacity className="flex-1 p-2 flex-row items-center">
      <Image
        source={{ uri: profileImage }}
        className="w-[45px] h-[45px] rounded-full mr-3"
      />

      <View className="flex-1 gap-y-1">
        <Text className="text-white font-semibold text-[15px]">{username}</Text>

        {isOnline ? <Text className="text-primary">Online</Text> : <Text className="text-[#6b7280]">Last seen at {hourFormatter(lastSeen)}</Text>}
      </View>
    </TouchableOpacity>
  );
}
