import { MantineProvider } from "@mantine/core";
import { MainPage } from "./components/MainPage";

export const App = () => {

  return (
    <div className="App">
      <MantineProvider >
        <MainPage />
      </MantineProvider>
    </div>
  );
};

export default App;
