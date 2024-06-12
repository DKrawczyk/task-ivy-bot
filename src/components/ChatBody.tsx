import {
  Box,
  Flex,
  Title,
  Textarea,
  Text,
  ActionIcon,
  ScrollArea,
  Image,
  Loader,
} from "@mantine/core";
import { IconLanguage, IconSend2 } from "@tabler/icons-react";
import axios from "axios";
import { FC, useEffect, useState } from "react";

interface ChatBodyProps {
  isPopup: boolean;
}

enum Roles {
  BOT = "bot",
  USER = "user",
}

interface Messages {
  role: Roles;
  message: string;
}

export const ChatBody: FC<ChatBodyProps> = ({ isPopup }) => {
  const [storedMessages, setStoredMessages] = useState<Messages[]>([]);
  const [message, setMessage] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  useEffect(() => {
    const storedMessagesJSON = localStorage.getItem("messages");
    if (storedMessagesJSON) {
      setStoredMessages(JSON.parse(storedMessagesJSON));
    } else {
      const defaultBotMessage = {
        role: Roles.BOT,
        message: "Hello, how can I help you?",
      };
      setStoredMessages([defaultBotMessage]);
      localStorage.setItem("messages", JSON.stringify([defaultBotMessage]));
    }
  }, []);
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_GPT_TOKEN}`,
  };
  const test = (message: string) => {
    const userMessage: Messages = {
      role: Roles.USER,
      message: message,
    };

    setStoredMessages((prevMessages) => {
      const updatedMessages = [...prevMessages, userMessage];
      localStorage.setItem("messages", JSON.stringify(updatedMessages));
      return updatedMessages;
    });

    setMessage("");
    setLoader(true);
    requestTest();
  };

  const requestTest = async () => {
    try {
      const result = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: message,
            },
          ],
          temperature: 0.7,
        },
        { headers, timeout: 5000 },
      );

      setLoader(false);

      const newMessage: Messages = {
        role: Roles.BOT,
        message: result.data.choices[0].message.content,
      };

      setStoredMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, newMessage];
        localStorage.setItem("messages", JSON.stringify(updatedMessages));
        return updatedMessages;
      });
    } catch (err) {
      setLoader(false);
      const errorMessage: Messages = {
        role: Roles.BOT,
        message: "Sorry, try again later...",
      };
      setStoredMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, errorMessage];
        localStorage.setItem("messages", JSON.stringify(errorMessage));
        return updatedMessages;
      });
      console.log(err);
    }
  };

  return (
    <Box px={10}>
      {isPopup ? (
        <Flex direction={"column"} justify={"center"} ta={"center"} h={173}>
          <Title order={2} style={{ letterSpacing: "-0.26px" }} mb={20}>
            Hi, I am Ivy!
          </Title>
          <Text>I am a virtual assistant here to answer your questions.</Text>
        </Flex>
      ) : (
        <ScrollArea h={601}>
          {storedMessages.map((item: Messages) => {
            const isBot = item.role === "bot";
            return (
              <Flex
                justify={`${isBot ? "flex-start" : "flex-end"}`}
                mx={10}
                my={20}
                align={"end"}
              >
                {isBot && (
                  <Image src={"/icons/bot.svg"} w={38} h={38} mr={30} />
                )}
                <Box
                  maw={272}
                  bg={`${isBot ? "#EAEFF8" : "#1E6DEB"}`}
                  c={`${isBot ? "black" : "white"}`}
                  p={12}
                  style={{
                    borderRadius: `${isBot ? "9px 9px 9px 2px" : "9px 9px 2px 9px"}`,
                  }}
                >
                  <Text>{item.message}</Text>
                </Box>
              </Flex>
            );
          })}
        </ScrollArea>
      )}
      <Box>
        <Textarea
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
                  onClick={() => test(message)}
                  variant="transparent"
                >
                  <IconSend2 color="#9399AA" />
                </ActionIcon>
              )}
            </>
          }
          placeholder="How can I help you"
          className="textarea"
          styles={{
            input: { backgroundColor: "#F0F1F4" },
            section: {
              width: 70,
              display: "flex",
              justifyContent: "space-evenly",
            },
          }}
          h={63}
        />
      </Box>
    </Box>
  );
};
