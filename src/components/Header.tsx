import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Book,
  LogIn,
  LogOut,
  PersonStandingIcon,
  Search,
  Sword,
  Wallet,
} from "lucide-react";
import { useWallet } from "../contexts/WalletContext";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { SiDiscover } from "react-icons/si";
import { RiRegisteredFill } from "react-icons/ri";

interface Props {
  element?: React.ReactNode;
}

const Header: React.FC<Props> = ({ element }: Props) => {
  const location = useLocation();
  const { isConnected, walletAddress, connect } = useWallet();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    {
      path: "/explore",
      label: "Explore",
      icon: (
        <Book
          size={15}
          color={`${
            location.pathname.startsWith("/explore") ? "#9D4DDD" : "white"
          }`}
        />
      ),
    },
    // {
    //   path: "/search",
    //   label: "Search",
    //   icon: (
    //     <Search
    //       size={15}
    //       color={`${
    //         location.pathname.startsWith("/search") ? "#9D4DDD" : "white"
    //       }`}
    //     />
    //   ),
    // },
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
            <img src="/images/dog.png" className="w-[40px] h-[40px]" />
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
                className={`text-sm flex flex-row gap-x-1 items-center font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-accent-purple border-b-2 border-accent-purple pb-1"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Wallet Connection */}
          {/* <WalletMultiButton onClick={connect} /> */}
          <div className="text-white">{element}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
