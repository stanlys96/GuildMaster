import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PersonStandingIcon, Sword, Wallet } from "lucide-react";
import { useWallet } from "../contexts/WalletContext";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Header: React.FC = () => {
  const location = useLocation();
  const { isConnected, walletAddress, connect } = useWallet();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { path: "/", label: "Discover" },
    { path: "/portfolio", label: "My Portfolio" },
    { path: "/store", label: "Store" },
  ];

  return (
    <header className="bg-surface border-b h-[10vh] border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold text-white hover:text-accent-purple transition-colors"
          >
            <PersonStandingIcon className="h-6 w-6 text-accent-purple" />
            <span className="bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
              AlterFun
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-accent-purple border-b-2 border-accent-purple pb-1"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Wallet Connection */}
          <WalletMultiButton onClick={connect} />
        </div>
      </div>
    </header>
  );
};

export default Header;
