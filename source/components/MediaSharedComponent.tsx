import * as React from "react";
import { View, FlatList } from "react-native";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { Media } from "../types";
import { MediaSharedCard } from "../fragments";

export default function MediaSharedComponent({ route }: NativeStackScreenProps<ParamListBase>): React.FunctionComponentElement<JSX.Element> {
  const { media }: any = route.params!;

  return (
    <View className="flex-1 bg-backgroundPrimary">
      <FlatList
        data={media}
        numColumns={3}
        keyExtractor={({ thumbnail }, index) => `${thumbnail} - ${index}`}
        horizontal={false}
        renderItem={({ item: { thumbnail, isVideo, duration } }: { item: Media }) => (
          <MediaSharedCard
            thumbnail={thumbnail}
            isVideo={isVideo}
            duration={duration}
          />
        )}
      />
    </View>
  );
}
