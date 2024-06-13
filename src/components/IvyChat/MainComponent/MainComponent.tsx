import { FC } from "react";
import { AppWrapper } from "../../Wrappers/AppWrapper";
import { ChatWrapper } from "../../Wrappers/ChatWrapper";
import { ChatBody } from "../ChatBody/ChatBody";
import { ChatHeader } from "../ChatHeader";
import { ChatIcon } from "../ChatIcon";
import { useMainComponent } from "./MainComponent.hook";

export const MainComponent: FC = () => {
  const { chatVisibility, isPopup, popupHandler, chatHandler } =
    useMainComponent();

  return (
    <AppWrapper>
      {chatVisibility && (
        <ChatWrapper
          isPopup={isPopup}
          handler={() => popupHandler((prev) => !prev)}
        >
          <ChatHeader chatVisibilityHandler={chatHandler} isPopup={isPopup} />
          <ChatBody isPopup={isPopup} />
        </ChatWrapper>
      )}
      <ChatIcon chatVisibilityHandler={chatHandler} />
    </AppWrapper>
  );
};
