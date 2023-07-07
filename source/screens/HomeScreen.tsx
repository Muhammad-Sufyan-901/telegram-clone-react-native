import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import { ParamListBase, DrawerActions } from "@react-navigation/native";
import { NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcons from "react-native-vector-icons/Ionicons";
import { ChatRowsComponent } from "../components";
import { WriteChatButton } from "../fragments";

export default function HomeScreen({ navigation }: NativeStackScreenProps<ParamListBase>): React.FunctionComponentElement<JSX.Element> {
  React.useLayoutEffect(() => {
    const options: Partial<NativeStackNavigationOptions> = {
      headerTitle: "Telegram",
      headerStyle: {
        backgroundColor: "#252d3a",
      },
      headerTitleStyle: {
        color: "white",
        fontWeight: "600",
        fontSize: 20,
      },
      headerLeft: (): React.ReactNode => (
        <TouchableOpacity
          onPress={handleOnPressToggleSidebarMenu}
          style={{ marginRight: 30 }}
        >
          <MaterialCommunityIcons
            name="menu"
            size={25}
            color="white"
          />
        </TouchableOpacity>
      ),
      headerRight: (): React.ReactNode => (
        <TouchableOpacity style={{ marginLeft: 30 }}>
          <IonIcons
            name="search"
            size={22.5}
            color="white"
          />
        </TouchableOpacity>
      ),
    };

    navigation.setOptions(options);
  });

  const handleOnPressToggleSidebarMenu = (): void => {};

  return (
    <View className="flex-1 bg-backgroundPrimary relative">
      <ChatRowsComponent />

      <WriteChatButton />
    </View>
  );
}
