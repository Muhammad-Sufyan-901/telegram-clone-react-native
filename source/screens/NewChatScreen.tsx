import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NewChatRowsComponent, NewChatButtonsComponent } from "../components";

export default function NewChatScreen({ navigation }: NativeStackScreenProps<ParamListBase>): React.FunctionComponentElement<JSX.Element> {
  React.useLayoutEffect(() => {
    const options: Partial<NativeStackNavigationOptions> = {
      headerTitle: "New Chat",
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#252d3a",
      },
      headerTitleStyle: {
        fontWeight: "600",
      },
      headerRight: (): React.ReactNode => (
        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 25 }}>
          <TouchableOpacity>
            <IonIcons
              name="search"
              size={25}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <MaterialCommunityIcons
              name="menu-open"
              size={25}
              color="white"
            />
          </TouchableOpacity>
        </View>
      ),
    };

    navigation.setOptions(options);
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-backgroundPrimary"
    >
      <NewChatButtonsComponent />

      <View className="bg-[#111827] w-full px-3 py-2">
        <Text className="text-[#6b7280] text-[14px] font-semibold">Visible time-based order</Text>
      </View>

      <NewChatRowsComponent />
    </ScrollView>
  );
}
