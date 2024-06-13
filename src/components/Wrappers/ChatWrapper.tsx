import { Box } from "@mantine/core";
import { FC, ReactNode } from "react";

interface ChatWrapperProps {
  children: ReactNode;
  isPopup: boolean;
  handler: () => void;
}

export const ChatWrapper: FC<ChatWrapperProps> = ({
  children,
  isPopup,
  handler,
}) => {
  return (
    <Box
      pos={"absolute"}
      right={20}
      bottom={100}
      w={380}
      h={`${isPopup ? 322 : 750}`}
      style={{
        borderRadius: 9,
        boxShadow: "0px 20px 50px #00000027",
      }}
      onClick={() => {
        if (isPopup) handler();
      }}
    >
      {children}
    </Box>
  );
};
