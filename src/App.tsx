import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WalletProvider } from "./contexts/WalletContext";
import Header from "./components/Header";
import DiscoverPage from "./pages/DiscoverPage";
import GuildDetailPage from "./pages/GuildDetailPage";
import PortfolioPage from "./pages/PortfolioPage";
import ProposalDetailPage from "./pages/ProposalDetailPage";
import StorePage from "./pages/StorePage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { ManagePage } from "./pages/ManagePage";
import { ProfilePage } from "./pages/ProfilePage";
import { BalancePage } from "./pages/BalancePage";
import { UserPage } from "./pages/UserPage";
import { ShopPage } from "./pages/ShopPage";
import { AlterFunPage } from "./pages/AlterFunPage";

function App() {
  return (
    <WalletProvider>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<DiscoverPage />} />
          <Route path="/portfolio/guild/:id" element={<GuildDetailPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/proposal/:id" element={<ProposalDetailPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/explore" element={<ManagePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/balance" element={<BalancePage />} />
          <Route path="/user/:username" element={<UserPage />} />
          <Route path="/:username/shop/:product_name" element={<ShopPage />} />
          <Route path="/alterfun" element={<AlterFunPage />} />
        </Routes>
      </Router>
    </WalletProvider>
  );
}

export default App;
