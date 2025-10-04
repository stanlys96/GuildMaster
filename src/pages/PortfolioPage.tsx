import { useState } from "react";
import { Link } from "react-router-dom";
import { TrendingUp, Users, DollarSign, ExternalLink } from "lucide-react";
import { guilds } from "../data/mockData";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  Connection,
  Keypair,
  PublicKey,
  Transaction,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import { SplGovernance } from "governance-idl-sdk";
import {
  createMint,
  getOrCreateAssociatedTokenAccount,
  mintTo,
} from "@solana/spl-token";
import { useProgram } from "../hooks/useProgram";
import GradientButton from "../components/GradientButton";
import { AnimatedModal } from "../components/AnimatedModal";
import { useFormik } from "formik";
import { CreateGuildComponent } from "../components/CreateGuildComponent";
import { CreateGuildFormikProps } from "../utils/interface";

const PortfolioPage: React.FC = () => {
  const { publicKey } = useWallet();
  const { program } = useProgram();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const userScrolls = {
    "aria-skywind": 5,
    "luna-starfall": 3,
    "kai-thunderbolt": 8,
  };
  const createFormik = useFormik<CreateGuildFormikProps>({
    initialValues: {
      name: "",
      tokenName: "",
      description: "",
      initialTokenAmount: "",
      tokenAllocation: "",
      support: 50,
      quorum: 50,
      coreMemberThreshold: 50,
      members: [],
    },
    onSubmit: () => {},
  });

  if (!publicKey?.toBase58()) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-surface rounded-2xl p-8 shadow-2xl">
            <DollarSign className="h-16 w-16 text-accent-purple mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-4">
              Connect Your Wallet
            </h1>
            <p className="text-gray-400 mb-6">
              To view your portfolio, please connect your wallet using the
              button in the top right corner.
            </p>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-purple to-accent-blue hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
            >
              <span>Explore Guilds</span>
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const userGuilds = guilds.filter((guild) => userScrolls[guild.id] > 0);
  const totalHoldingsValue = userGuilds.reduce((total, guild) => {
    return total + userScrolls[guild.id] * guild.scrollPrice;
  }, 0);

  const totalScrollsOwned = Object.values(userScrolls).reduce(
    (total, scrolls) => total + scrolls,
    0
  );
  const potentialEarnings = totalHoldingsValue * 0.04; // 4% potential earnings

  return (
    <div className="min-h-screen bg-background py-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Your Guild Portfolio
            </h1>
            <p className="text-gray-400">
              Track your investments and guild participation
            </p>
          </div>
          <div>
            <GradientButton onClick={() => setIsOpen(true)}>
              <span>Create a guild</span>
            </GradientButton>
          </div>
        </div>
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-accent-purple/20 to-purple-900/20 rounded-2xl p-6 border border-accent-purple/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-accent-purple/20 rounded-lg">
                <DollarSign className="h-6 w-6 text-accent-purple" />
              </div>
              <span className="text-green-400 text-sm font-medium">+8.2%</span>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Total Holdings Value</p>
              <p className="text-3xl font-bold text-white">
                {totalHoldingsValue.toFixed(3)} ETH
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent-blue/20 to-blue-900/20 rounded-2xl p-6 border border-accent-blue/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-accent-blue/20 rounded-lg">
                <Users className="h-6 w-6 text-accent-blue" />
              </div>
              <span className="text-blue-400 text-sm font-medium">
                {userGuilds.length} Active
              </span>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Total Guilds Joined</p>
              <p className="text-3xl font-bold text-white">
                {userGuilds.length}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-emerald-900/20 rounded-2xl p-6 border border-green-500/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-500" />
              </div>
              <span className="text-green-400 text-sm font-medium">Est.</span>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Potential Earnings</p>
              <p className="text-3xl font-bold text-white">
                {potentialEarnings.toFixed(3)} ETH
              </p>
            </div>
          </div>
        </div>

        {/* My Guilds Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">My Guilds</h2>
          {userGuilds.length === 0 ? (
            <div className="bg-surface rounded-2xl p-12 text-center">
              <Users className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                No Guild Holdings
              </h3>
              <p className="text-gray-400 mb-6">
                Start your journey by joining your first guild
              </p>
              <Link
                to="/"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-purple to-accent-blue hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
              >
                <span>Discover Guilds</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{ id: "1" }].map((guild) => {
                const scrollsOwned = userScrolls[guild.id];
                const currentValue = scrollsOwned * guild.scrollPrice;
                const profitShare =
                  (currentValue / (guild.guildBank || 1)) * 100;

                return (
                  <div
                    key={guild.id}
                    className="bg-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={guild.bannerImage}
                        alt={guild.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2">
                        <img
                          src={guild.profileImage}
                          alt={guild.vtuberName}
                          className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-white text-lg mb-1">
                        {guild.vtuberName}
                      </h3>
                      <p className="text-accent-purple text-sm mb-4">
                        {guild.name}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">
                            Scrolls Owned
                          </span>
                          <span className="text-white font-semibold">
                            {scrollsOwned}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">
                            Current Value
                          </span>
                          <span className="text-white font-semibold">
                            {currentValue.toFixed(3)} ETH
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">
                            Profit Share
                          </span>
                          <span className="text-green-400 font-semibold">
                            {profitShare.toFixed(2)}%
                          </span>
                        </div>
                      </div>

                      <Link
                        to={`/portfolio/guild/${guild.id}`}
                        className="w-full bg-gradient-to-r from-accent-purple to-accent-blue hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
                      >
                        <span>Go to Guild</span>
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 bg-surface rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Portfolio Summary
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-gray-400 text-sm mb-1">Total Scrolls</p>
              <p className="text-2xl font-bold text-white">
                {totalScrollsOwned}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Average Price</p>
              <p className="text-2xl font-bold text-white">
                {totalScrollsOwned > 0
                  ? (totalHoldingsValue / totalScrollsOwned).toFixed(3)
                  : "0.000"}{" "}
                ETH
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Guilds Joined</p>
              <p className="text-2xl font-bold text-white">
                {userGuilds.length}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Portfolio Growth</p>
              <p className="text-2xl font-bold text-green-400">+12.5%</p>
            </div>
          </div>
        </div>
      </div>
      <AnimatedModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <CreateGuildComponent
          createFormik={createFormik}
          loading={loading}
          setIsOpen={setIsOpen}
        />
      </AnimatedModal>
    </div>
  );
};

export default PortfolioPage;
