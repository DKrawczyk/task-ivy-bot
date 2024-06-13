import { useState, useEffect } from "react";

export const useMainComponent = () => {
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

  const chatHandler = () => {
    setChatVisibility((x) => !x);
    setIsPopup(false);
  };

  return {
    popupHandler: setIsPopup,
    isPopup,
    chatVisibility,
    chatHandler,
  };
};
