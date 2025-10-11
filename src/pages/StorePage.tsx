import React, { useState } from "react";
import {
  ShoppingCart,
  Star,
  Heart,
  Filter,
  Search,
  Grid,
  List,
  PersonStandingIcon,
} from "lucide-react";
import { useWallet } from "../contexts/WalletContext";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { formatCurrencyFromString } from "../utils/helper";

const StorePage: React.FC = () => {
  const navigate = useNavigate();
  const { isConnected } = useWallet();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock store products from all guilds
  const storeProducts = [
    {
      id: "prod-1",
      name: "Skyward Sentinels T-Shirt",
      price: 15000,
      originalPrice: 0.08,
      image:
        "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Apparel",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      isLimited: true,
      guild: "The Skyward Sentinels",
      vtuber: "Aria Skywind",
      description:
        "Premium cotton t-shirt featuring Aria's signature design with mystical skywind patterns",
    },
    {
      id: "prod-2",
      name: "Digital Art Collection #1",
      price: 12000,
      image:
        "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Digital Art",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      isLimited: false,
      guild: "The Skyward Sentinels",
      vtuber: "Aria Skywind",
      description:
        "Exclusive digital artwork collection featuring ethereal landscapes and character art",
    },
    {
      id: "prod-3",
      name: "Luna's Moonlight Hoodie",
      price: 20000,
      originalPrice: 0.12,
      image:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Apparel",
      rating: 4.7,
      reviews: 156,
      inStock: true,
      isLimited: true,
      guild: "Lunar Eclipse",
      vtuber: "Luna Starfall",
      description:
        "Cozy hoodie with glow-in-the-dark lunar patterns and constellation designs",
    },
    {
      id: "prod-4",
      name: "Thunder Strike Gaming Mouse",
      price: 100000,
      image:
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Gaming Gear",
      rating: 4.9,
      reviews: 203,
      inStock: true,
      isLimited: false,
      guild: "Storm Riders",
      vtuber: "Kai Thunderbolt",
      description:
        "High-performance gaming mouse with RGB lighting and custom Kai Thunderbolt design",
    },
    {
      id: "prod-5",
      name: "Crystal Heart Necklace",
      price: 150000,
      image:
        "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Accessories",
      rating: 5.0,
      reviews: 78,
      inStock: false,
      isLimited: true,
      guild: "Crystal Guardians",
      vtuber: "Nova Crystalheart",
      description:
        "Handcrafted crystal necklace with mystical properties and Nova's blessing",
    },
    {
      id: "prod-6",
      name: "Phoenix Fire Art Print Set",
      price: 200000,
      image:
        "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Art Prints",
      rating: 4.8,
      reviews: 92,
      inStock: true,
      isLimited: false,
      guild: "Phoenix Legion",
      vtuber: "Zara Phoenixfire",
      description:
        "Set of 3 premium art prints featuring Zara's most iconic phoenix transformations",
    },
    {
      id: "prod-7",
      name: "Shadow Dancer Mask",
      price: 250000,
      image:
        "https://images.pexels.com/photos/1205301/pexels-photo-1205301.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Accessories",
      rating: 4.6,
      reviews: 134,
      inStock: true,
      isLimited: true,
      guild: "Shadow Covenant",
      vtuber: "Echo Shadowdancer",
      description:
        "Mysterious mask worn by Echo during special stealth missions and ceremonies",
    },
    {
      id: "prod-8",
      name: "Aria's Music Album NFT",
      price: 300000,
      image:
        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Music",
      rating: 4.9,
      reviews: 156,
      inStock: true,
      isLimited: true,
      guild: "The Skyward Sentinels",
      vtuber: "Aria Skywind",
      description:
        "Exclusive music album NFT with bonus tracks, behind-the-scenes content, and artwork",
    },
  ];

  const categories = [
    "All",
    "Apparel",
    "Digital Art",
    "Gaming Gear",
    "Accessories",
    "Art Prints",
    "Music",
  ];

  const filteredProducts = storeProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.vtuber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.guild.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header
        element={
          <div
            onClick={() => navigate("/profile")}
            className="flex gap-x-2 items-center cursor-pointer"
          >
            <PersonStandingIcon size={30} />
            <div className="flex flex-col text-white">
              <p className="text-[12px]">Stanly Sukmajaya</p>
              <p className="text-[12px] text-[#FFFFFF75]">@stanly_sukmajaya</p>
            </div>
          </div>
        }
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">AlterFun Store</h1>
          <p className="text-gray-400">
            Discover exclusive merchandise from your favorite Vtubers and guilds
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-surface rounded-2xl p-6 mb-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, guilds, or Vtubers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-background border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white focus:border-accent-purple focus:outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-background border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-accent-purple focus:outline-none"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-background rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-accent-purple text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-accent-purple text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        <div
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
          }`}
        >
          {filteredProducts.map((product) => (
            <div
              onClick={() => navigate("/kitsunex/shop/audio_pack")}
              key={product.id}
              className={`bg-surface cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 group ${
                viewMode === "list" ? "flex" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  viewMode === "list" ? "w-48 h-32" : "h-48"
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.isLimited && (
                  <div className="absolute top-3 left-3 bg-accent-purple text-white text-xs px-2 py-1 rounded-full font-medium">
                    Limited Edition
                  </div>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white font-semibold">
                      Out of Stock
                    </span>
                  </div>
                )}
                <button className="absolute top-3 right-3 p-2 bg-black/30 rounded-full hover:bg-black/50 transition-colors">
                  <Heart className="h-4 w-4 text-white" />
                </button>
              </div>

              <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {product.name}
                    </h3>
                    <p className="text-accent-purple text-sm font-medium">
                      {product.vtuber} • {product.guild}
                    </p>
                  </div>
                  <span className="text-xs text-accent-blue bg-accent-blue/20 px-2 py-1 rounded-full ml-2">
                    {product.category}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-bold text-xl">
                      Rp {formatCurrencyFromString(product.price?.toString())}
                    </span>
                    {/* {product.originalPrice && (
                      <span className="text-gray-500 text-sm line-through">
                        Rp {product.originalPrice}
                      </span>
                    )} */}
                  </div>
                  <button
                    disabled={isConnected}
                    className="bg-gradient-to-r from-accent-purple to-accent-blue hover:from-purple-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/25 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Buy</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <ShoppingCart className="h-16 w-16 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              No products found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Featured Categories */}
        <div className="mt-16 bg-surface rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(1).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="bg-background/50 hover:bg-background/70 rounded-lg p-4 text-center transition-colors group"
              >
                <div className="text-2xl mb-2">
                  {category === "Apparel" && "👕"}
                  {category === "Digital Art" && "🎨"}
                  {category === "Gaming Gear" && "🎮"}
                  {category === "Accessories" && "💎"}
                  {category === "Art Prints" && "🖼️"}
                  {category === "Music" && "🎵"}
                </div>
                <p className="text-white font-medium group-hover:text-accent-purple transition-colors">
                  {category}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePage;
