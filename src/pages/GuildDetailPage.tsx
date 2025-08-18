import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, Coins, TrendingUp, Vote, DollarSign, ShoppingCart, Star, Heart, Eye } from 'lucide-react';
import { guilds, proposals, transactions } from '../data/mockData';
import { useWallet } from '../contexts/WalletContext';

const GuildDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isConnected, userScrolls, buyScrolls } = useWallet();
  const [activeTab, setActiveTab] = useState<'proposals' | 'treasury' | 'marketplace' | 'store'>('proposals');
  const [scrollAmount, setScrollAmount] = useState(1);

  const guild = guilds.find(g => g.id === id);
  const guildProposals = proposals.filter(p => p.guildId === id);
  const userScrollCount = userScrolls[id || ''] || 0;

  // Mock store products
  const storeProducts = [
    {
      id: 'prod-1',
      name: 'Skyward Sentinels T-Shirt',
      price: 0.05,
      originalPrice: 0.08,
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Apparel',
      rating: 4.8,
      reviews: 124,
      inStock: true,
      isLimited: true,
      description: 'Premium cotton t-shirt featuring Aria\'s signature design'
    },
    {
      id: 'prod-2',
      name: 'Digital Art Collection #1',
      price: 0.12,
      image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Digital Art',
      rating: 4.9,
      reviews: 89,
      inStock: true,
      isLimited: false,
      description: 'Exclusive digital artwork collection by Aria Skywind'
    },
    {
      id: 'prod-3',
      name: 'Skywind Enamel Pin Set',
      price: 0.03,
      image: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Accessories',
      rating: 4.7,
      reviews: 67,
      inStock: true,
      isLimited: true,
      description: 'Beautiful enamel pin set featuring guild symbols'
    },
    {
      id: 'prod-4',
      name: 'Signed Poster Print',
      price: 0.08,
      originalPrice: 0.10,
      image: 'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Collectibles',
      rating: 5.0,
      reviews: 45,
      inStock: false,
      isLimited: true,
      description: 'Limited edition signed poster, only 100 available'
    },
    {
      id: 'prod-5',
      name: 'Guild Membership Card',
      price: 0.02,
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Collectibles',
      rating: 4.6,
      reviews: 203,
      inStock: true,
      isLimited: false,
      description: 'Official guild membership card with holographic design'
    },
    {
      id: 'prod-6',
      name: 'Aria\'s Music Album NFT',
      price: 0.25,
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Music',
      rating: 4.9,
      reviews: 156,
      inStock: true,
      isLimited: true,
      description: 'Exclusive music album with bonus tracks and artwork'
    }
  ];

  if (!guild) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Guild Not Found</h1>
          <Link to="/" className="text-accent-purple hover:text-purple-400">
            Return to Discover
          </Link>
        </div>
      </div>
    );
  }

  const progressPercentage = (guild.guildBank / guild.profitDistributionAt) * 100;
  const totalCost = scrollAmount * guild.scrollPrice;

  const handleBuyScrolls = () => {
    if (isConnected) {
      buyScrolls(guild.id, scrollAmount);
      setScrollAmount(1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={guild.bannerImage}
          alt={guild.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <Link
            to="/"
            className="flex items-center space-x-2 text-white hover:text-accent-purple transition-colors bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Discover</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Guild Info */}
            <div className="bg-surface rounded-2xl p-8 shadow-2xl">
              <div className="flex items-start space-x-6 mb-6">
                <img
                  src={guild.profileImage}
                  alt={guild.vtuberName}
                  className="w-20 h-20 rounded-full border-4 border-accent-purple shadow-lg"
                />
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">{guild.vtuberName}</h1>
                  <p className="text-xl text-accent-purple font-medium mb-4">{guild.name}</p>
                  <p className="text-gray-300 leading-relaxed">{guild.description}</p>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="bg-background/50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Guild Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent-purple/20 rounded-lg mx-auto mb-2">
                      <Coins className="h-6 w-6 text-accent-purple" />
                    </div>
                    <p className="text-gray-400 text-sm">Scroll Price</p>
                    <p className="text-white font-bold text-lg">{guild.scrollPrice} ETH</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent-blue/20 rounded-lg mx-auto mb-2">
                      <Users className="h-6 w-6 text-accent-blue" />
                    </div>
                    <p className="text-gray-400 text-sm">Scrolls Remaining</p>
                    <p className="text-white font-bold text-lg">{guild.remainingScrolls} / {guild.totalScrolls}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mx-auto mb-2">
                      <TrendingUp className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="text-gray-400 text-sm">Guild Bank</p>
                    <p className="text-white font-bold text-lg">{guild.guildBank} ETH</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mx-auto mb-2">
                      <DollarSign className="h-6 w-6 text-purple-500" />
                    </div>
                    <p className="text-gray-400 text-sm">Your Scrolls</p>
                    <p className="text-white font-bold text-lg">{isConnected ? userScrollCount : '—'}</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Profit Distribution Progress</span>
                    <span className="text-sm text-white">{guild.guildBank} / {guild.profitDistributionAt} ETH</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-accent-purple to-accent-blue h-3 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Purchase Section */}
              <div className="bg-gradient-to-r from-accent-purple/10 to-accent-blue/10 rounded-xl p-6 border border-accent-purple/20">
                <h3 className="text-lg font-semibold text-white mb-4">Purchase Scrolls</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm text-gray-400 mb-2">Number of Scrolls</label>
                    <input
                      type="number"
                      min="1"
                      max={guild.remainingScrolls}
                      value={scrollAmount}
                      onChange={(e) => setScrollAmount(parseInt(e.target.value) || 1)}
                      className="w-full bg-background border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-accent-purple focus:outline-none"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm text-gray-400 mb-2">Total Cost</label>
                    <div className="text-2xl font-bold text-white bg-background border border-gray-600 rounded-lg px-4 py-3">
                      {totalCost.toFixed(3)} ETH
                    </div>
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={handleBuyScrolls}
                      disabled={!isConnected}
                      className="bg-gradient-to-r from-accent-purple to-accent-blue hover:from-purple-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/25 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {isConnected ? 'Buy Scrolls' : 'Connect Wallet'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tabs */}
            <div className="bg-surface rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-gray-700">
                <button
                  onClick={() => setActiveTab('proposals')}
                  className={`py-3 px-2 text-xs font-medium transition-colors border-r border-gray-700 ${
                    activeTab === 'proposals'
                      ? 'bg-accent-purple text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Vote className="h-4 w-4 mx-auto mb-1" />
                  <div>Proposals</div>
                </button>
                <button
                  onClick={() => setActiveTab('treasury')}
                  className={`py-3 px-2 text-xs font-medium transition-colors border-r border-gray-700 ${
                    activeTab === 'treasury'
                      ? 'bg-accent-purple text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <TrendingUp className="h-4 w-4 mx-auto mb-1" />
                  <div>Treasury</div>
                </button>
                <button
                  onClick={() => setActiveTab('marketplace')}
                  className={`py-3 px-2 text-xs font-medium transition-colors border-r border-gray-700 lg:border-r-0 ${
                    activeTab === 'marketplace'
                      ? 'bg-accent-purple text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <ShoppingCart className="h-4 w-4 mx-auto mb-1" />
                  <div>Market</div>
                </button>
                <button
                  onClick={() => setActiveTab('store')}
                  className={`py-3 px-2 text-xs font-medium transition-colors ${
                    activeTab === 'store'
                      ? 'bg-accent-purple text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <ShoppingCart className="h-4 w-4 mx-auto mb-1" />
                  <div>Store</div>
                </button>
              </div>

              <div className="p-6">
                {activeTab === 'proposals' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-white">Active Proposals</h3>
                      <button className="text-accent-purple hover:text-purple-400 text-sm font-medium">
                        Create New
                      </button>
                    </div>
                    {guildProposals.map((proposal) => (
                      <Link
                        key={proposal.id}
                        to={`/proposal/${proposal.id}`}
                        className="block bg-background/50 rounded-lg p-4 hover:bg-background/70 transition-colors"
                      >
                        <h4 className="text-white font-medium mb-2">{proposal.title}</h4>
                        <div className="flex justify-between items-center text-sm">
                          <span className={`px-2 py-1 rounded text-xs ${
                            proposal.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                            proposal.status === 'Passed' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {proposal.status}
                          </span>
                          <span className="text-gray-400">
                            {proposal.votesFor} For / {proposal.votesAgainst} Against
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {activeTab === 'treasury' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Treasury Activity</h3>
                    <div className="bg-background/50 rounded-lg p-4 mb-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{guild.guildBank} ETH</div>
                        <div className="text-green-400 text-sm">+12.3% this month</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {transactions.map((tx) => (
                        <div key={tx.id} className="flex justify-between items-center">
                          <div>
                            <p className="text-white text-sm">{tx.description}</p>
                            <p className="text-gray-400 text-xs">{tx.date}</p>
                          </div>
                          <span className={`font-semibold ${
                            tx.type === 'income' ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {tx.type === 'income' ? '+' : ''}{tx.amount} ETH
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'marketplace' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Scroll Marketplace</h3>
                    <p className="text-gray-400 text-sm mb-4">Buy scrolls from other holders</p>
                    <div className="space-y-3">
                      {[
                        { scrolls: 5, price: 0.095, seller: '0x742d...C0' },
                        { scrolls: 12, price: 0.105, seller: '0x8f3E...h6i' },
                        { scrolls: 3, price: 0.098, seller: '0x9e2f...u8v' },
                      ].map((listing, index) => (
                        <div key={index} className="bg-background/50 rounded-lg p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-white font-medium">{listing.scrolls} Scrolls</p>
                              <p className="text-gray-400 text-sm">by {listing.seller}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-white font-semibold">{listing.price} ETH each</p>
                              <button className="text-accent-purple hover:text-purple-400 text-sm">
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'store' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-white">Guild Store</h3>
                      <div className="flex items-center space-x-2">
                        <select className="bg-background border border-gray-600 rounded-lg px-3 py-1 text-white text-sm focus:border-accent-purple focus:outline-none">
                          <option>All Categories</option>
                          <option>Apparel</option>
                          <option>Digital Art</option>
                          <option>Accessories</option>
                          <option>Collectibles</option>
                          <option>Music</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {storeProducts.map((product) => (
                        <div key={product.id} className="bg-background/50 rounded-lg overflow-hidden hover:bg-background/70 transition-all duration-200 group">
                          <div className="relative">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            {product.isLimited && (
                              <div className="absolute top-2 left-2 bg-accent-purple text-white text-xs px-2 py-1 rounded-full font-medium">
                                Limited
                              </div>
                            )}
                            {!product.inStock && (
                              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <span className="text-white font-semibold">Out of Stock</span>
                              </div>
                            )}
                            <button className="absolute top-2 right-2 p-1 bg-black/30 rounded-full hover:bg-black/50 transition-colors">
                              <Heart className="h-4 w-4 text-white" />
                            </button>
                          </div>
                          
                          <div className="p-3">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="text-white font-medium text-sm leading-tight">{product.name}</h4>
                              <span className="text-xs text-accent-purple bg-accent-purple/20 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                            </div>
                            
                            <p className="text-gray-400 text-xs mb-2 line-clamp-2">{product.description}</p>
                            
                            <div className="flex items-center space-x-1 mb-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${
                                      i < Math.floor(product.rating)
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-600'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-gray-400 text-xs">({product.reviews})</span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <span className="text-white font-bold text-sm">{product.price} ETH</span>
                                {product.originalPrice && (
                                  <span className="text-gray-500 text-xs line-through">{product.originalPrice} ETH</span>
                                )}
                              </div>
                              <button
                                disabled={!product.inStock || !isConnected}
                                className="bg-gradient-to-r from-accent-purple to-accent-blue hover:from-purple-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-700 text-white text-xs font-medium py-1 px-3 rounded-lg transition-all duration-200 disabled:cursor-not-allowed"
                              >
                                {!isConnected ? 'Connect' : !product.inStock ? 'Sold Out' : 'Buy Now'}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center pt-4">
                      <button className="text-accent-purple hover:text-purple-400 text-sm font-medium flex items-center space-x-1 mx-auto">
                        <Eye className="h-4 w-4" />
                        <span>View All Products</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuildDetailPage;