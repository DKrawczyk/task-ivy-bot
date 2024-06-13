import { Flex, Title, Text } from "@mantine/core";
import { FC } from "react";

export const ChatWelcomeMessage: FC = () => {
  return (
    <Flex direction={"column"} justify={"center"} ta={"center"} h={173}>
      <Title order={2} style={{ letterSpacing: "-0.26px" }} mb={20}>
        Hi, I am Ivy!
      </Title>
      <Text>I am a virtual assistant here to answer your questions.</Text>
    </Flex>
  );
};
