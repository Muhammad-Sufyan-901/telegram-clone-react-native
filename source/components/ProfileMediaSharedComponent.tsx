import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MediaSharedComponent from "./MediaSharedComponent";
import FilesSharedComponent from "./FilesSharedComponent";
import LinksSharedComponent from "./LinksSharedComponent";
import MusicsSharedComponent from "./MusicsSharedComponent";
import SoundsSharedComponent from "./SoundsSharedComponent";
import GroupsSharedComponent from "./GroupsSharedComponent";
import type { Media, File, Link, Music, Sound, Group } from "../types";

type ProfileMediaSharedComponentProps = {
  media: Media[];
  files: File[];
  links: Link[];
  musics: Music[];
  sounds: Sound[];
  groups: Group[];
  username: string;
};

const ProfileMediaSharedComponentTab = createMaterialTopTabNavigator();

export default function ProfileMediaSharedComponent({ media, files, links, musics, sounds, groups, username }: ProfileMediaSharedComponentProps): React.FunctionComponentElement<JSX.Element> {
  return (
    <ProfileMediaSharedComponentTab.Navigator
      initialRouteName="Media"
      screenOptions={{
        tabBarActiveTintColor: "#30a3e5",
        tabBarInactiveTintColor: "#6b7280",
        tabBarScrollEnabled: true,
        tabBarStyle: {
          backgroundColor: "#1d2633",
          height: 45,
        },
        tabBarIndicatorStyle: {
          borderBottomWidth: 5,
          borderColor: "#30a3e5",
          borderRadius: 8,
        },
        tabBarItemStyle: {
          width: 85,
        },
      }}
    >
      <ProfileMediaSharedComponentTab.Screen
        name="Media"
        component={MediaSharedComponent}
        initialParams={{ media }}
        options={{
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontWeight: "600",
            fontSize: 15,
          },
        }}
      />
      <ProfileMediaSharedComponentTab.Screen
        name="Files"
        component={FilesSharedComponent}
        initialParams={{ files }}
        options={{
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontWeight: "600",
            fontSize: 15,
          },
        }}
      />
      <ProfileMediaSharedComponentTab.Screen
        name="Links"
        component={LinksSharedComponent}
        initialParams={{ links }}
        options={{
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontWeight: "600",
            fontSize: 15,
          },
        }}
      />
      <ProfileMediaSharedComponentTab.Screen
        name="Musics"
        component={MusicsSharedComponent}
        initialParams={{ musics }}
        options={{
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontWeight: "600",
            fontSize: 15,
          },
        }}
      />
      <ProfileMediaSharedComponentTab.Screen
        name="Sounds"
        component={SoundsSharedComponent}
        initialParams={{ sounds, username }}
        options={{
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontWeight: "600",
            fontSize: 15,
          },
        }}
      />
      <ProfileMediaSharedComponentTab.Screen
        name="groups"
        component={GroupsSharedComponent}
        initialParams={{ groups }}
        options={{
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontWeight: "600",
            fontSize: 15,
          },
        }}
      />
    </ProfileMediaSharedComponentTab.Navigator>
  );
}
