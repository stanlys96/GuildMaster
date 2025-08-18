import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WalletProvider } from './contexts/WalletContext';
import Header from './components/Header';
import DiscoverPage from './pages/DiscoverPage';
import GuildDetailPage from './pages/GuildDetailPage';
import PortfolioPage from './pages/PortfolioPage';
import ProposalDetailPage from './pages/ProposalDetailPage';
import StorePage from './pages/StorePage';

function App() {
  return (
    <WalletProvider>
      <Router>
        <div className="min-h-screen bg-background font-inter text-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<DiscoverPage />} />
              <Route path="/guild/:id" element={<GuildDetailPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/proposal/:id" element={<ProposalDetailPage />} />
              <Route path="/store" element={<StorePage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </WalletProvider>
  );
}

export default App;