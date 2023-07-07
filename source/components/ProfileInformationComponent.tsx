import * as React from "react";
import { View, Text, Switch } from "react-native";

type ProfileInformationComponentProps = {
  bio: string;
  phoneNumber: string;
};

export default function ProfileInformationComponent({ bio, phoneNumber }: ProfileInformationComponentProps): React.FunctionComponentElement<JSX.Element> {
  const [isNotificationOn, setIsNotificationOn] = React.useState<boolean>(true);

  const handleOnSwitchChangeNotificationOption = (): void => {
    setIsNotificationOn((previous) => !previous);
  };

  return (
    <View className="bg-backgroundPrimary px-5 py-4 mb-4">
      <View className="gap-y-4">
        <Text className="text-primary font-semibold text-[16px]">Info</Text>

        <View className="gap-y-1">
          <Text className="text-white font-normal text-[17.5px]">{phoneNumber}</Text>
          <Text className="text-[#6b7280]">Phone</Text>
        </View>

        <View className="gap-y-1">
          <Text
            className="text-white font-normal text-[16px]"
            numberOfLines={3}
          >
            {bio}
          </Text>
          <Text className="text-[#6b7280]">Bio</Text>
        </View>

        <View className="flex-row justify-between items-center border-t border-[#151d27] pt-2">
          <View className="gap-y-1">
            <Text className="text-white font-normal text-[16px]">Notification</Text>
            <Text className="text-[#6b7280]">{isNotificationOn ? "On" : "Off"}</Text>
          </View>

          <View className="border-l border-[#151d27] h-[80%] pl-2">
            <Switch
              trackColor={{ false: "#6b7280", true: "#30a3e5" }}
              thumbColor={"#151d27"}
              onChange={handleOnSwitchChangeNotificationOption}
              value={isNotificationOn}
              className="self-center flex-1"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
