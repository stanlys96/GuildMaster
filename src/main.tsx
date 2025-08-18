import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { WalletConnectionProvider } from "./WalletConnectionProvider";
import "./index.css";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WalletConnectionProvider>
      <App />
      <Toaster position="top-center" />
    </WalletConnectionProvider>
  </StrictMode>
);
