import * as React from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { MessageInputBoxComponent, MessagesBoxComponent } from "../components";
import { ChatRoomBackgroundPattern } from "../constants";

export default function ChatRoomScreen({ navigation, route }: NativeStackScreenProps<ParamListBase>): React.FunctionComponentElement<JSX.Element> {
  const {
    profile: { username, lastSeen, profileImage, bio, phoneNumber, isOnline },
    messages,
    media,
    files,
    links,
    musics,
    sounds,
    groups,
  }: any = route.params!;

  React.useLayoutEffect(() => {
    const options: Partial<NativeStackNavigationOptions> = {
      headerBackVisible: false,
      headerStyle: {
        backgroundColor: "#252d3a",
      },
      headerLeft: (): React.ReactNode => (
        <TouchableOpacity onPress={handleOnPressNavigateToAllChat}>
          <IonIcons
            name="arrow-back"
            size={22.5}
            color="white"
          />
        </TouchableOpacity>
      ),
      headerTitle: (): React.ReactNode => (
        <TouchableOpacity
          onPress={handleOnPressNavigateToProfile}
          style={{ paddingHorizontal: 15, flexDirection: "row", alignItems: "center", flex: 1 }}
        >
          <View>
            <Image
              source={{ uri: profileImage }}
              style={{ height: 40, width: 40, borderRadius: 50 }}
            />
          </View>

          <View style={{ marginLeft: 15 }}>
            <Text style={{ color: "white", fontSize: 17.5, fontWeight: "600" }}>{username}</Text>
            <Text style={{ color: "gray", fontSize: 12.5, fontWeight: "500" }}>Last seen at {lastSeen.toString()}</Text>
          </View>
        </TouchableOpacity>
      ),
      headerRight: (): React.ReactNode => (
        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 20 }}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="phone"
              size={25}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={25}
              color="white"
            />
          </TouchableOpacity>
        </View>
      ),
    };

    navigation.setOptions(options);
  }, []);

  const handleOnPressNavigateToAllChat = (): void => {
    navigation.navigate("HomeScreen");
  };

  const handleOnPressNavigateToProfile = (): void => {
    navigation.navigate("ProfileScreen", {
      username,
      lastSeen,
      profileImage,
      bio,
      phoneNumber,
      isOnline,
      media,
      files,
      links,
      musics,
      sounds,
      groups,
    });
  };

  return (
    <ImageBackground
      source={ChatRoomBackgroundPattern}
      className="flex-1 bg-backgroundPrimary relative pb-10"
    >
      <MessagesBoxComponent messages={messages} />

      <MessageInputBoxComponent />
    </ImageBackground>
  );
}
