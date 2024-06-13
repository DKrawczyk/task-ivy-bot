import { Textarea, ActionIcon, Loader } from "@mantine/core";
import { IconLanguage, IconSend2 } from "@tabler/icons-react";
import { FC } from "react";

interface ChatInputProps {
  isPopup: boolean;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;

  loader: boolean;
  handleMessage: (msg: string) => void;
}

export const ChatInput: FC<ChatInputProps> = ({
  isPopup,
  message,
  setMessage,
  loader,
  handleMessage,
}) => {
  return (
    <Textarea
      mt={8}
      value={message}
      onChange={(ev) => setMessage(ev.target.value)}
      rightSection={
        <>
          <ActionIcon variant="transparent">
            <IconLanguage color="#9399AA" />
          </ActionIcon>
          {loader ? (
            <Loader color="#1E6DEB" size={20} />
          ) : (
            <ActionIcon
              disabled={message.length <= 0}
              onClick={() => handleMessage(message)}
              variant="transparent"
            >
              <IconSend2 color="#9399AA" />
            </ActionIcon>
          )}
        </>
      }
      placeholder={isPopup ? "How can I help you" : "Enter your message"}
      className="textarea"
      styles={{
        input: {
          backgroundColor: isPopup ? "#F0F1F4" : "#FFF",
          border: `1px solid ${isPopup ? "#F0F1F4" : "#1E6DEB"}`,
          paddingRight: "70px",
          paddingTop: "20px",
          paddingBottom: "20px",
          marginBottom: "4px",
          maxHeight: "63px",
        },
        section: {
          width: 70,
          display: "flex",
          justifyContent: "space-evenly",
        },
      }}
      h={63}
      w={357}
      bottom={10}
      pos={"absolute"}
    />
  );
};
