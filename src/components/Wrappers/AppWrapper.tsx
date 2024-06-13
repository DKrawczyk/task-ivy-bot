import { Box } from "@mantine/core";
import { FC, ReactNode } from "react";

interface AppWrapperProps {
  children: ReactNode;
}

export const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  return (
    <Box w={"100vw"} h={"100vh"} bg={"white"} pos={"relative"}>
      {children}
    </Box>
  );
};
