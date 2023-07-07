import * as React from "react";
import { ScrollView } from "react-native";
import { chatList } from "../constants";
import { PersonalChatRow } from "../fragments";

export default function ChatRowsComponent(): React.FunctionComponentElement<JSX.Element> {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1"
    >
      {chatList.map(
        ({ profile, messages, media, files, links, musics, sounds, groups }): React.ReactNode => (
          <PersonalChatRow
            key={`${profile.username} Chat Room`}
            profile={profile}
            messages={messages}
            media={media}
            files={files}
            links={links}
            musics={musics}
            sounds={sounds}
            groups={groups}
          />
        )
      )}
    </ScrollView>
  );
}
