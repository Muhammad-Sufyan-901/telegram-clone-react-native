import * as React from "react";
import { View, FlatList } from "react-native";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { File } from "../types";
import { FileSharedRow } from "../fragments";

export default function FilesSharedComponent({ route }: NativeStackScreenProps<ParamListBase>): React.FunctionComponentElement<JSX.Element> {
  const { files }: any = route.params!;

  return (
    <View className="flex-1 bg-backgroundPrimary">
      <FlatList
        data={files}
        keyExtractor={({ name }, index) => `${name} - ${index}`}
        horizontal={false}
        renderItem={({ item: { thumbnail, name, format, size, sendAt } }: { item: File }) => (
          <FileSharedRow
            thumbnail={thumbnail}
            name={name}
            format={format}
            size={size}
            sendAt={sendAt}
          />
        )}
      />
    </View>
  );
}
