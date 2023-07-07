import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function NewChatButtonsComponent(): React.FunctionComponentElement<JSX.Element> {
  return (
    <View className="px-2 py-1">
      <TouchableOpacity className="w-full flex-row items-center py-3 px-2">
        <IonIcons
          name="people-outline"
          size={25}
          color="#6b7280"
          style={{ marginRight: 20 }}
        />

        <Text className="text-white font-normal text-[16px]">New Group</Text>
      </TouchableOpacity>

      <TouchableOpacity className="w-full flex-row items-center py-3 px-2">
        <MaterialCommunityIcons
          name="lock"
          size={25}
          color="#6b7280"
          style={{ marginRight: 20 }}
        />

        <Text className="text-white font-normal text-[16px]">New Secret Chat</Text>
      </TouchableOpacity>

      <TouchableOpacity className="w-full flex-row items-center py-3 px-2">
        <IonIcons
          name="megaphone-outline"
          size={25}
          color="#6b7280"
          style={{ marginRight: 20 }}
        />

        <Text className="text-white font-normal text-[16px]">New Channel</Text>
      </TouchableOpacity>
    </View>
  );
}
