import * as React from "react";
import { View, FlatList } from "react-native";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { Group } from "../types";
import { GroupsSharedRow } from "../fragments";

export default function GroupsSharedComponent({ route }: NativeStackScreenProps<ParamListBase>): React.FunctionComponentElement<JSX.Element> {
  const { groups }: any = route.params!;

  return (
    <View className="flex-1 bg-backgroundPrimary">
      <FlatList
        data={groups}
        keyExtractor={({ name }, index) => `${name} - ${index}`}
        horizontal={false}
        renderItem={({ item: { profileImage, name, members } }: { item: Group }) => (
          <GroupsSharedRow
            profileImage={profileImage}
            name={name}
            members={members}
          />
        )}
      />
    </View>
  );
}
