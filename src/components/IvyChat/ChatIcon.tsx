import { Box, Image } from "@mantine/core";
import { FC } from "react";

interface ChatIconProps {
  chatVisibilityHandler?: () => void;
}

export const ChatIcon: FC<ChatIconProps> = ({ chatVisibilityHandler }) => {
  return (
    <Box
      onClick={chatVisibilityHandler}
      bg={"#9399AA"}
      style={{
        borderRadius: "50px",
        cursor: "pointer",
        boxShadow: "0px 20px 50px #0000004A",
      }}
      p={8}
      pos={"absolute"}
      right={20}
      bottom={20}
    >
      <Image src={"/icons/bot.svg"} w={46} h={46} />
    </Box>
  );
};
