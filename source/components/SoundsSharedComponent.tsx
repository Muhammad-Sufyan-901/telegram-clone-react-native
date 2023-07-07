import * as React from "react";
import { View, FlatList } from "react-native";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { Sound } from "../types";
import { SoundsSharedRow } from "../fragments";

export default function SoundsSharedComponent({ route }: NativeStackScreenProps<ParamListBase>): React.FunctionComponentElement<JSX.Element> {
  const { sounds, username }: any = route.params!;

  return (
    <View className="flex-1 bg-backgroundPrimary">
      <FlatList
        data={sounds}
        keyExtractor={({ sendAt }, index) => `${sendAt} - ${index}`}
        horizontal={false}
        renderItem={({ item: { sendAt, isSender } }: { item: Sound }) => (
          <SoundsSharedRow
            sendAt={sendAt}
            isSender={isSender}
            username={username}
          />
        )}
      />
    </View>
  );
}
