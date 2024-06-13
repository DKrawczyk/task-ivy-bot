import { Flex, Box, ActionIcon, Image, Text } from "@mantine/core";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { FC } from "react";

interface ChatHeaderProps {
  chatVisibilityHandler: () => void;
  isPopup: boolean;
}

export const ChatHeader: FC<ChatHeaderProps> = ({
  chatVisibilityHandler,
  isPopup,
}) => {
  return (
    <Flex
      pos={"relative"}
      bg={"#2B6BD1"}
      h={75}
      justify={"space-between"}
      align={"center"}
      style={{ borderTopLeftRadius: 9, borderTopRightRadius: 9 }}
      px={20}
    >
      {isPopup && (
        <Box
          bg={"#9399AA"}
          style={{ borderRadius: "50px", boxShadow: "0px 20px 50px #0000004A" }}
          p={14}
          pos={"absolute"}
          left={"calc(50% - 49px)"}
        >
          <Image src={"/icons/bot.svg"} w={"70px"} h={"70px"} />
        </Box>
      )}
      <Flex>
        <ActionIcon variant="transparent" mr={20}>
          <IconMenu2 color="white" />
        </ActionIcon>
        {!isPopup && (
          <Text c={"white"} fw={700} style={{ letterSpacing: "-0.36px" }}>
            Ivy Bot
          </Text>
        )}
      </Flex>
      <ActionIcon variant="transparent" onClick={chatVisibilityHandler}>
        <IconX color="white" />
      </ActionIcon>
    </Flex>
  );
};
