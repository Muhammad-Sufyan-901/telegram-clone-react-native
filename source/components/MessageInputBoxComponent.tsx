import * as React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcons from "react-native-vector-icons/Entypo";
import IonIcons from "react-native-vector-icons/Ionicons";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";

export default function MessageInputBoxComponent(): React.FunctionComponentElement<JSX.Element> {
  const [isMessageInputFocused, setIsMessageInputFocused] = React.useState<boolean>(false);
  const messageInputRef = React.useRef<TextInput>(null);

  const handleOnFocusedMessageInput = (): void => {
    setIsMessageInputFocused((previous) => !previous);

    console.log("focused");
  };

  const handleOnBluredMessageInput = (): void => {
    setIsMessageInputFocused((previous) => !previous);

    console.log("blured");
  };

  return (
    <View className="absolute bottom-0 w-full bg-[#222e3a] px-4 py-3">
      <View className="flex-row gap-x-3">
        <TouchableOpacity>
          {isMessageInputFocused ? (
            <FontAwesomeIcons
              name="smile-o"
              size={26}
              color="gray"
            />
          ) : (
            <MaterialCommunityIcons
              name="sticker-emoji"
              size={26}
              color="gray"
            />
          )}
        </TouchableOpacity>

        <TextInput
          ref={messageInputRef}
          onFocus={handleOnFocusedMessageInput}
          onBlur={handleOnBluredMessageInput}
          placeholder="Message"
          className="flex-1 placeholder:text-[16px] text-white no-underline"
          placeholderTextColor="gray"
        />

        <View className="flex-row gap-x-5">
          <TouchableOpacity>
            <EntypoIcons
              name="attachment"
              size={22.5}
              color="gray"
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <IonIcons
              name="mic-outline"
              size={24.5}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
