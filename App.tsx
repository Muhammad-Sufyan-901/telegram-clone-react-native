import * as React from "react";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ChatRoomScreen, ProfileScreen, NewChatScreen } from "./source/screens";

const RootStack = createNativeStackNavigator();

export default function App(): React.FunctionComponentElement<JSX.Element> {
  NavigationBar.setBackgroundColorAsync("black");
  NavigationBar.setButtonStyleAsync("light");

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="HomeScreen">
        <RootStack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <RootStack.Screen
          name="ChatRoomScreen"
          component={ChatRoomScreen}
        />
        <RootStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
        />
        <RootStack.Screen
          name="NewChatScreen"
          component={NewChatScreen}
        />
      </RootStack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
