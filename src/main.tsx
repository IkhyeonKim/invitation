/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

declare global {
  interface Window {
    naver: any;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
