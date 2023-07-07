import * as React from "react";
import { View, FlatList } from "react-native";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { Link } from "../types";
import { LinksSharedRow } from "../fragments";

export default function LinksSharedComponent({ route }: NativeStackScreenProps<ParamListBase>): React.FunctionComponentElement<JSX.Element> {
  const { links }: any = route.params!;

  return (
    <View className="flex-1 bg-backgroundPrimary">
      <FlatList
        data={links}
        keyExtractor={({ title }, index) => `${title} - ${index}`}
        horizontal={false}
        renderItem={({ item: { thumbnail, title, description, url } }: { item: Link }) => (
          <LinksSharedRow
            thumbnail={thumbnail}
            title={title}
            description={description}
            url={url}
          />
        )}
      />
    </View>
  );
}
