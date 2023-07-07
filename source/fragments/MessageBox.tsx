import * as React from "react";
import { View, Text } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import clsx from "clsx";
import { Message as MessageBoxProps } from "../types";

export default function MessageBox({ message, sendAt, isSeen, isSender }: MessageBoxProps) {
  return (
    <View className={clsx(isSender ? "bg-secondary self-end" : "bg-[#222e3a] self-start", message.length > 15 ? "flex-col" : "flex-row gap-x-1", "max-w-[80%] pl-4 pr-3 py-2 my-1 rounded-3xl")}>
      <Text className="text-white text-[16px] max-w-[85%]">{message}</Text>

      <View className="justify-self-end self-end gap-x-1 flex-row mt-1">
        <Text className="text-[12px] text-white">{sendAt.toString()}</Text>

        {isSender ? (
          <IonIcons
            name={isSeen ? "checkmark-done" : "checkmark"}
            size={15}
            color="white"
            style={{ marginRight: 4 }}
          />
        ) : null}
      </View>
    </View>
  );
}
