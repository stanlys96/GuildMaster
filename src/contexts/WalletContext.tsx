import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WalletContextType {
  isConnected: boolean;
  walletAddress: string | null;
  userScrolls: Record<string, number>;
  connect: () => void;
  buyScrolls: (guildId: string, amount: number) => void;
  vote: (proposalId: string, support: boolean) => void;
  votedProposals: Set<string>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [userScrolls, setUserScrolls] = useState<Record<string, number>>({});
  const [votedProposals, setVotedProposals] = useState<Set<string>>(new Set());

  const connect = () => {
    setIsConnected(true);
    setWalletAddress('0x1a2b3c4d5e6f7890abcdef1234567890abcdef12');
    // Initialize with some example holdings
    setUserScrolls({
      'aria-skywind': 5,
      'luna-starfall': 3,
      'kai-thunderbolt': 8,
    });
  };

  const buyScrolls = (guildId: string, amount: number) => {
    setUserScrolls(prev => ({
      ...prev,
      [guildId]: (prev[guildId] || 0) + amount
    }));
  };

  const vote = (proposalId: string, support: boolean) => {
    setVotedProposals(prev => new Set(prev).add(proposalId));
  };

  const value = {
    isConnected,
    walletAddress,
    userScrolls,
    connect,
    buyScrolls,
    vote,
    votedProposals,
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
};