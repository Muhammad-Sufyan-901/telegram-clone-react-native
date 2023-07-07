import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import type { Group as GroupsSharedRowProps } from "../types";

export default function GroupsSharedRow({ name, members, profileImage }: GroupsSharedRowProps): React.FunctionComponentElement<JSX.Element> {
  return (
    <TouchableOpacity className="w-full p-2 border-b-[0.75px] border-[#111827] flex-row gap-x-3 items-center">
      <View className="w-[50px] h-[50px] rounded-full overflow-hidden self-start">
        <Image
          source={{ uri: profileImage }}
          className="w-full h-full object-contain"
        />
      </View>

      <View className="flex-1 gap-y-1">
        <Text
          className="text-white font-semibold text-[16px] capitalize"
          numberOfLines={1}
        >
          {name}
        </Text>
        <Text
          className="text-[#6b7280] font-normal text-[14px]"
          numberOfLines={1}
        >
          {members} members
        </Text>
      </View>
    </TouchableOpacity>
  );
}
