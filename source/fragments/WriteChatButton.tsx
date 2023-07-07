import * as React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function WriteChatButton(): React.FunctionComponentElement<JSX.Element> {
  const navigate = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleOnPressNavigateToNewChatScreen = (): void => {
    navigate.navigate("NewChatScreen");
  };

  return (
    <TouchableOpacity
      onPress={handleOnPressNavigateToNewChatScreen}
      className="absolute bottom-4 right-4 z-20 p-4 rounded-full bg-[#30a3e5]"
    >
      <MaterialCommunityIcons
        name="pencil"
        size={25}
        color="white"
      />
    </TouchableOpacity>
  );
}
