import * as React from "react";
import { View, FlatList } from "react-native";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { Music } from "../types";
import { MusicsSharedRow } from "../fragments";

export default function MusicsSharedComponent({ route }: NativeStackScreenProps<ParamListBase>): React.FunctionComponentElement<JSX.Element> {
  const { musics }: any = route.params!;

  return (
    <View className="flex-1 bg-backgroundPrimary">
      <FlatList
        data={musics}
        keyExtractor={({ title }, index) => `${title} - ${index}`}
        horizontal={false}
        renderItem={({ item: { thumbnail, title, description } }: { item: Music }) => (
          <MusicsSharedRow
            thumbnail={thumbnail}
            title={title}
            description={description}
          />
        )}
      />
    </View>
  );
}
