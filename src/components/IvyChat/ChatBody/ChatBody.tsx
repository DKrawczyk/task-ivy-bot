import { Box } from "@mantine/core";
import { FC } from "react";
import { ChatMessages, ChatWelcomeMessage, ChatInput } from "components";
import { useChatBody } from "./ChatBody.hook";

interface ChatBodyProps {
  isPopup: boolean;
}

export const ChatBody: FC<ChatBodyProps> = ({ isPopup }) => {
  const { message, setMessage, loader, storedMessages, handleMessage } =
    useChatBody();

  return (
    <Box px={10} pos={"relative"} h={"calc(100% - 75px)"}>
      {isPopup ? (
        <ChatWelcomeMessage />
      ) : (
        <ChatMessages storedMessages={storedMessages} />
      )}
      <ChatInput
        isPopup={isPopup}
        message={message}
        setMessage={setMessage}
        loader={loader}
        handleMessage={handleMessage}
      />
    </Box>
  );
};
