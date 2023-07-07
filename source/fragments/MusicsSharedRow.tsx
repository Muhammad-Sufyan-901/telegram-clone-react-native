import * as React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import type { Music as MusicsSharedRowProps } from "../types";

export default function MusicsSharedRow({ thumbnail, title, description }: MusicsSharedRowProps): React.FunctionComponentElement<JSX.Element> {
  return (
    <TouchableOpacity className="w-full p-2 border-b-[0.75px] border-[#111827] flex-row gap-x-5 items-center">
      <ImageBackground
        source={{ uri: thumbnail }}
        className="w-[45px] h-[45px] rounded-full overflow-hidden"
      >
        <View className="w-full h-full bg-black/50 flex items-center justify-center">
          <TouchableOpacity>
            <IonIcons
              name="play"
              size={22.5}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View className="flex-1 gap-y-1">
        <Text
          className="text-white font-semibold text-[16px] capitalize"
          numberOfLines={1}
        >
          {title}
        </Text>
        <Text
          className="text-[#6b7280] font-normal text-[12px]"
          numberOfLines={2}
        >
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
