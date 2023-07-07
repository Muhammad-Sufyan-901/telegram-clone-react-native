import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ProfileInformationComponent, ProfileMediaSharedComponent } from "../components";

export default function ProfileScreen({ navigation, route }: NativeStackScreenProps<ParamListBase>): React.FunctionComponentElement<JSX.Element> {
  const { username, lastSeen, profileImage, bio, phoneNumber, media, files, links, musics, sounds, groups }: any = route.params!;

  React.useLayoutEffect(() => {
    const options: Partial<NativeStackNavigationOptions> = {
      header: (): React.ReactNode => (
        <SafeAreaView style={{ width: "100%", paddingHorizontal: 15, paddingTop: 10, backgroundColor: "#252d3a", position: "relative", rowGap: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <TouchableOpacity onPress={handleOnPressNavigateBack}>
              <IonIcons
                name="arrow-back"
                size={22.5}
                color="white"
              />
            </TouchableOpacity>

            <View style={{ flexDirection: "row", columnGap: 22.5 }}>
              <TouchableOpacity>
                <IonIcons
                  name="videocam"
                  size={25}
                  color="white"
                />
              </TouchableOpacity>
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
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Image
                source={{ uri: profileImage }}
                style={{ height: 55, width: 55, borderRadius: 50 }}
              />
            </View>

            <View style={{ marginLeft: 17.5 }}>
              <Text style={{ color: "white", fontSize: 17.5, fontWeight: "600" }}>{username}</Text>
              <Text style={{ color: "gray", fontSize: 12.5, fontWeight: "500" }}>Last seen at {lastSeen.toString()}</Text>
            </View>
          </View>

          <TouchableOpacity style={{ position: "absolute", bottom: -20, right: 15, borderRadius: 50, padding: 15, backgroundColor: "#30a3e5" }}>
            <MaterialCommunityIcons
              name="message-text-outline"
              size={25}
              color="white"
            />
          </TouchableOpacity>
        </SafeAreaView>
      ),
    };

    navigation.setOptions(options);
  }, []);

  const handleOnPressNavigateBack = (): void => {
    navigation.goBack();
  };

  return (
    <View className="flex-1 bg-[#151d27]">
      <ProfileInformationComponent
        bio={bio}
        phoneNumber={phoneNumber}
      />

      <ProfileMediaSharedComponent
        media={media}
        files={files}
        links={links}
        musics={musics}
        sounds={sounds}
        groups={groups}
        username={username}
      />
    </View>
  );
}
