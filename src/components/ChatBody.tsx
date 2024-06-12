import {
  Box,
  Flex,
  Title,
  Textarea,
  Text,
  ActionIcon,
  ScrollArea,
} from "@mantine/core";
import { IconLanguage, IconSend2 } from "@tabler/icons-react";
import { FC } from "react";

interface ChatBodyProps {
  isPopup: boolean;
}

export const ChatBody: FC<ChatBodyProps> = ({ isPopup }) => {
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
        // <Box h={100%}>
        //     </Box>
        <ScrollArea h={601}>
          <p>textarea</p>
        </ScrollArea>
      )}

      <Box>
        <Textarea
          rightSection={
            <>
              <ActionIcon variant="transparent">
                <IconLanguage color="#9399AA" />
              </ActionIcon>
              <ActionIcon variant="transparent">
                <IconSend2 color="#9399AA" />
              </ActionIcon>
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
