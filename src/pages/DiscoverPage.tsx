import React from "react";
import { Link } from "react-router-dom";
import { Users, Coins, TrendingUp } from "lucide-react";

const DiscoverPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-surface via-background to-dark-900 py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1254736/pexels-photo-1254736.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Join a{" "}
            <span className="bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
              Guild
            </span>
            .
            <br />
            Build a{" "}
            <span className="bg-gradient-to-r from-accent-blue to-purple-400 bg-clip-text text-transparent">
              Legacy
            </span>
            .
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
            Invest in your favorite Vtubers and share in their success. Join
            exclusive communities, participate in governance, and earn from
            their achievements.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-accent-purple" />
              <span>Active Communities</span>
            </div>
            <div className="flex items-center space-x-2">
              <Coins className="h-5 w-5 text-accent-blue" />
              <span>Profit Sharing</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-purple-400" />
              <span>Growth Potential</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guilds */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Featured Guilds
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[].map((guild) => (
              <div
                key={guild.id}
                className="group cursor-pointer relative bg-surface rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={guild.bannerImage}
                    alt={guild.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <img
                      src={guild.profileImage}
                      alt={guild.vtuberName}
                      className="w-16 h-16 rounded-full border-4 border-accent-purple shadow-lg"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {guild.vtuberName}
                  </h3>
                  <p className="text-accent-purple font-medium mb-4">
                    {guild.name}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <p className="text-gray-400">Scroll Price</p>
                      <p className="text-white font-semibold">
                        {guild.scrollPrice} ETH
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400">Holders</p>
                      <p className="text-white font-semibold">
                        {guild.holders}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400">Guild Bank</p>
                      <p className="text-white font-semibold">
                        {guild.guildBank} ETH
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400">Available</p>
                      <p className="text-white font-semibold">
                        {guild.remainingScrolls}
                      </p>
                    </div>
                  </div>
                  <Link
                    to={`/guild/${guild.id}`}
                    className="w-full bg-gradient-to-r from-accent-purple to-accent-blue hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center"
                  >
                    View Guild
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Guilds */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Explore All Guilds
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[].map((guild) => (
              <div
                key={guild.id}
                className="bg-surface rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={guild.bannerImage}
                    alt={guild.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 left-2">
                    <img
                      src={guild.profileImage}
                      alt={guild.vtuberName}
                      className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white text-sm mb-1">
                    {guild.vtuberName}
                  </h3>
                  <p className="text-accent-purple text-xs mb-3">
                    {guild.name}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                    <div>
                      <p className="text-gray-400">Price</p>
                      <p className="text-white font-semibold">
                        {guild.scrollPrice} ETH
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400">Holders</p>
                      <p className="text-white font-semibold">
                        {guild.holders}
                      </p>
                    </div>
                  </div>
                  <Link
                    to={`/guild/${guild.id}`}
                    className="w-full bg-gradient-to-r from-accent-purple to-accent-blue hover:from-purple-600 hover:to-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center"
                  >
                    View Guild
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscoverPage;
