import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import type { Sound } from "../types";

type SoundsSharedRowProps = Sound & {
  username: string;
};

export default function SoundsSharedRow({ sendAt, isSender, username }: SoundsSharedRowProps): React.FunctionComponentElement<JSX.Element> {
  return (
    <TouchableOpacity className="w-full p-2 border-b-[0.75px] border-[#111827] flex-row gap-x-5 items-center">
      <View className="w-[45px] h-[45px] bg-primary rounded-full flex items-center justify-center">
        <TouchableOpacity>
          <IonIcons
            name="play"
            size={22.5}
            color="white"
          />
        </TouchableOpacity>
      </View>

      <View className="flex-1 gap-y-1">
        <Text
          className="text-white font-semibold text-[16px] capitalize"
          numberOfLines={1}
        >
          {sendAt.toString()}
        </Text>
        <Text
          className="text-[#6b7280] font-normal text-[12px]"
          numberOfLines={2}
        >
          {isSender ? "You" : username}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
