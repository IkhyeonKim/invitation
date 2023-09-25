import { ScrollProgressController } from "@toss/scroll-animation";
import MainPage from "./components/MainPage";

function App() {
  return (
    <ScrollProgressController>
      <MainPage />
    </ScrollProgressController>
  );
}

export default App;
