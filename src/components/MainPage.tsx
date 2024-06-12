import { Box } from "@mantine/core";
import { FC, useState } from "react";
import "./styles.css";
import { ChatHeader } from "./ChatHeader";
import { ChatBody } from "./ChatBody";
import { ChatIcon } from "./ChatIcon";

export const MainPage: FC = () => {
  const [chatVisibility, setChatVisibility] = useState<boolean>(false);
  const handler = () => {
    setChatVisibility(!chatVisibility);
  };
  const isPopup = true;
  return (
    <Box w={"100vw"} h={"100vh"} bg={"white"} pos={"relative"}>
      {chatVisibility && (
        <Box
        //   direction={"column"}
        //   justify={"space-between"}
          pos={"absolute"}
          right={20}
          bottom={100}
          w={380}
          h={`${isPopup ? 322 : 750}`}
          style={{
            borderRadius: 9,
            boxShadow: "0px 20px 50px #00000027",
          }}
        >
          <ChatHeader chatVisibilityHandler={handler} isPopup={isPopup} />
          <ChatBody isPopup={isPopup} />
        </Box>
        // <Box
        //   pos={"absolute"}
        //   right={20}
        //   bottom={100}
        //   w={380}
        //   h={322}
        //   style={{
        //     borderRadius: 9,
        //     boxShadow: "0px 20px 50px #00000027",
        //   }}
        // >
        //   <ChatHeader chatVisibilityHandler={handler} isPopup />
        //   <ChatBody />
        // </Box>
      )}
      <ChatIcon chatVisibilityHandler={handler} />
    </Box>
  );
};
