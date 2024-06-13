import { useState, useEffect } from "react";
import { postUserMessage } from "api/postUserMessage";

type Roles = "bot" | "user";

export interface Messages {
  role: Roles;
  message: string;
}

export const useChatBody = () => {
  const [storedMessages, setStoredMessages] = useState<Messages[]>([]);
  const [message, setMessage] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);

  const storeMessage = (role: Roles, message: string) => {
    const createdMessage: Messages = {
      role: role,
      message: message,
    };
    setStoredMessages((prevMessages) => {
      const updatedMessages = [...prevMessages, createdMessage];
      localStorage.setItem("messages", JSON.stringify(updatedMessages));
      return updatedMessages;
    });
  };

  useEffect(() => {
    const storedMessagesJSON = localStorage.getItem("messages");
    if (storedMessagesJSON) {
      setStoredMessages(JSON.parse(storedMessagesJSON));
    } else {
      storeMessage("bot", "Hello, how can I help you?");
    }
  }, []);

  const handleMessage = (message: string) => {
    storeMessage("user", message);
    setMessage("");
    setLoader(true);
    createRequest();
  };

  const createRequest = async () => {
    try {
      const botMessage = await postUserMessage(message);
      setLoader(false);
      storeMessage("bot", botMessage);
    } catch (err) {
      setLoader(false);
      storeMessage("bot", "Sorry, try again later...");
    }
  };

  return {
    message,
    setMessage,
    loader,
    storedMessages,
    handleMessage,
  };
};
