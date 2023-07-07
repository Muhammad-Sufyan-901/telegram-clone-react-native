import * as React from "react";
import { View, Text } from "react-native";
import { useNavigation, ParamListBase, NavigationContainer, DrawerActions } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const SidebarMenuDrawer = createDrawerNavigator();

const DummySidebarComponent = () => (
  <View>
    <View></View>
  </View>
);

export default function SidebarMenuComponent(): React.FunctionComponentElement<JSX.Element> {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  React.useLayoutEffect(() => {
    const options: Partial<NativeStackNavigationOptions> = {
      headerStyle: {
        backgroundColor: "#252d3a",
      },
    };

    navigation.setOptions(options);
  }, []);

  return (
    <NavigationContainer>
      <SidebarMenuDrawer.Navigator>
        <SidebarMenuDrawer.Screen
          name="NewGroups"
          component={DummySidebarComponent}
        />
        <SidebarMenuDrawer.Screen
          name="Contacts"
          component={DummySidebarComponent}
        />
        <SidebarMenuDrawer.Screen
          name="Calls"
          component={DummySidebarComponent}
        />
      </SidebarMenuDrawer.Navigator>
    </NavigationContainer>
  );
}
