import { FC } from "react";
import {
  ChatHeader,
  ChatBody,
  ChatIcon,
  AppWrapper,
  ChatWrapper,
} from "components";
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
