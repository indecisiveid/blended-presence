import React from "react";
import ReactDOMClient from "react-dom/client";
import { BetterLiveGuide } from "./screens/BetterLiveGuide";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<BetterLiveGuide />);
