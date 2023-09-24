import { ScrollProgressController } from "@toss/scroll-animation";
import MainPage from "./components/MainPage";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <ScrollProgressController>
        <MainPage />
      </ScrollProgressController>
    </RecoilRoot>
  );
}

export default App;
