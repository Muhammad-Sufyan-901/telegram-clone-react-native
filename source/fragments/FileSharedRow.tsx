import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import type { File as FileSharedRowProps } from "../types";

export default function FileSharedRow({ thumbnail, name, format, size, sendAt }: FileSharedRowProps): React.FunctionComponentElement<JSX.Element> {
  return (
    <TouchableOpacity className="w-full p-2 border-b-[0.75px] border-[#111827] flex-row gap-x-6 items-center">
      <View className="w-[45px] h-[45px] rounded-md overflow-hidden">
        <Image
          source={{ uri: thumbnail }}
          className="w-full h-full object-contain"
        />
      </View>

      <View className="flex-1 gap-y-1">
        <Text
          className="text-white font-semibold text-[16px] capitalize"
          numberOfLines={1}
        >
          {name.concat(format)}
        </Text>
        <Text className="text-[#6b7280] font-normal text-[12px]">
          {size}, {sendAt.toString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
