import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import App from "./App.tsx";
import "../../../i18n.ts";
import "@mantine/core/styles.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter> 
    <MantineProvider>
      <App />
    </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);
