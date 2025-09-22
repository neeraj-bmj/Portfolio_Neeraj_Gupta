import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import {registerSW} from "virtual:pwa-register";

registerSW()

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ToastContainer />
  </>
);
