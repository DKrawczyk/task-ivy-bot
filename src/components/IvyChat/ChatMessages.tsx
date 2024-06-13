import { FC } from "react";
import { ScrollArea, Flex, Box, Image, Text } from "@mantine/core";
import { Messages } from "./ChatBody/ChatBody.hook";

interface ChatMessagesProps {
  storedMessages: Messages[];
}

export const ChatMessages: FC<ChatMessagesProps> = ({ storedMessages }) => {
  return (
    <ScrollArea h={595}>
      {storedMessages.map((item, idx) => {
        const isBot = item.role === "bot";
        return (
          <Flex
            key={idx}
            justify={`${isBot ? "flex-start" : "flex-end"}`}
            mx={10}
            my={20}
            align={"end"}
          >
            {isBot && <Image src={"/icons/bot.svg"} w={38} h={38} mr={30} />}
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
  );
};
