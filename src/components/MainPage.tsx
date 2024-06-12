import { Box } from "@mantine/core";
import { FC, useEffect, useState } from "react";
import "./styles.css";
import { ChatHeader } from "./ChatHeader";
import { ChatBody } from "./ChatBody";
import { ChatIcon } from "./ChatIcon";

export const MainPage: FC = () => {
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [chatVisibility, setChatVisibility] = useState<boolean>(false);
  useEffect(() => {
    const isFirstTimeVisitor = localStorage.getItem("isFirstTimeUser") === null;

    if (isFirstTimeVisitor) {
      localStorage.setItem("isFirstTimeUser", JSON.stringify(true));

      setTimeout(() => {
        setIsPopup(true);
        setChatVisibility(true);
        localStorage.setItem("isFirstTimeUser", JSON.stringify(false));
      }, 2000);
    }
  }, []);

  const handler = () => {
    setChatVisibility(!chatVisibility);
    setIsPopup(false);
  };
  return (
    <Box w={"100vw"} h={"100vh"} bg={"white"} pos={"relative"}>
      {chatVisibility && (
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
        >
          <ChatHeader chatVisibilityHandler={handler} isPopup={isPopup} />
          <ChatBody isPopup={isPopup} />
        </Box>
      )}
      <ChatIcon chatVisibilityHandler={handler} />
    </Box>
  );
};
