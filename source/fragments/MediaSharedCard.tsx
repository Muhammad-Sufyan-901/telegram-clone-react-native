import * as React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import type { Media as MediaSharedCardProps } from "../types";

export default function MediaSharedCard({ thumbnail, isVideo, duration }: MediaSharedCardProps): React.FunctionComponentElement<JSX.Element> {
  return (
    <TouchableOpacity className="bg-backgroundPrimary w-[33.3%] aspect-square relative">
      <ImageBackground
        source={{ uri: thumbnail }}
        className="w-full h-full object-contain"
      />

      {isVideo ? (
        <View className="absolute bottom-1 left-1 bg-black/50 px-2 py-1 rounded-sm flex-row items-center">
          <IonIcons
            name="play"
            size={12.5}
            color="white"
          />
          <Text className="text-white font-semibold text-[12px]">{duration}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
}
