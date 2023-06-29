//Global
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

//Components
import App from "./components/App/App";

//Styles
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
