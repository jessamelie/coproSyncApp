import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import App from "./App.tsx";
import "../../../i18n.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </StrictMode>
);
