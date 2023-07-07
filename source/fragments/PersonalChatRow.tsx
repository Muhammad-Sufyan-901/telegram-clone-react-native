import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import IonIcons from "react-native-vector-icons/Ionicons";
import type { Chat as ChatRowProps, Message, File, Sound } from "../types";
import { dateFormatter, hourFormatter, fullDateFormatter, getLastMessageSent } from "../utils";

export default function PersonalChatRow({ profile: { username, profileImage, phoneNumber, bio, isOnline, lastSeen }, messages, media, files, links, musics, sounds, groups }: ChatRowProps): React.FunctionComponentElement<JSX.Element> {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleOnPressNavigateToChatRoom = (): void => {
    navigation.navigate("ChatRoomScreen", {
      profile: {
        username,
        profileImage,
        phoneNumber,
        bio,
        isOnline,
        lastSeen: hourFormatter(lastSeen),
      },
      messages: messages.map(({ message, sendAt, isSeen, isSender }: Message) => ({
        message,
        isSeen,
        isSender,
        sendAt: hourFormatter(sendAt),
      })),
      files: files.map(({ thumbnail, name, format, size, sendAt }: File) => ({
        thumbnail,
        name,
        format,
        size,
        sendAt: `${fullDateFormatter(sendAt)} at ${hourFormatter(sendAt)}`,
      })),
      sounds: sounds.map(({ isSender, sendAt }: Sound) => ({
        isSender,
        sendAt: `${fullDateFormatter(sendAt)} at ${hourFormatter(sendAt)}`,
      })),
      media,
      links,
      musics,
      groups,
    });
  };

  return (
    <TouchableOpacity
      onPress={handleOnPressNavigateToChatRoom}
      className="px-4 py-2 border-b-[0.5px] border-[#111827] flex-row gap-x-4"
    >
      <View className="w-[50px] h-[50px] rounded-full object-contain overflow-hidden">
        <Image
          source={{ uri: profileImage }}
          className="w-full h-full"
        />
      </View>

      <View className="flex-1">
        <View className="flex-row justify-between items-center">
          <Text
            className="font-semibold text-lg text-white"
            numberOfLines={1}
          >
            {username}
          </Text>

          <View className="flex-row gap-x-2 items-center">
            {getLastMessageSent(messages).isSender! ? (
              <IonIcons
                name="checkmark-done"
                color={getLastMessageSent(messages).isSeen ? "#30a3e5" : "#6b7280"}
                size={20}
              />
            ) : null}

            <Text
              className="font-normal text-sm text-[#6b7280]"
              numberOfLines={1}
            >
              {dateFormatter(getLastMessageSent(messages).sendAt)}
            </Text>
          </View>
        </View>

        <View className="flex-1">
          <Text
            className="font-normal text-sm text-[#6b7280]"
            numberOfLines={1}
          >
            {getLastMessageSent(messages).message}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
