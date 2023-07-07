import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import type { Link as LinksSharedRowProps } from "../types";

export default function LinksSharedRow({ thumbnail, title, description, url }: LinksSharedRowProps): React.FunctionComponentElement<JSX.Element> {
  return (
    <TouchableOpacity className="w-full p-2 border-b-[0.75px] border-[#111827] flex-row gap-x-3 items-center">
      <View className="w-[50px] h-[50px] rounded-md overflow-hidden self-start">
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
          {title}
        </Text>
        <Text
          className="text-white font-normal text-[14px]"
          numberOfLines={2}
        >
          {description}
        </Text>

        <TouchableOpacity>
          <Text className="text-primary font-normal text-[14px]">{url}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
