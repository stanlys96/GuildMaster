export interface Guild {
  id: string;
  name: string;
  vtuberName: string;
  bannerImage: string;
  profileImage: string;
  description: string;
  scrollPrice: number;
  totalScrolls: number;
  remainingScrolls: number;
  holders: number;
  guildBank: number;
  profitDistributionAt: number;
  isFeatured?: boolean;
}

export interface Proposal {
  id: string;
  guildId: string;
  title: string;
  description: string;
  submittedBy: string;
  status: 'Active' | 'Passed' | 'Failed';
  votesFor: number;
  votesAgainst: number;
  totalVotes: number;
  createdAt: string;
}

export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  description: string;
  amount: number;
  date: string;
}

export const guilds: Guild[] = [
  {
    id: 'aria-skywind',
    name: 'The Skyward Sentinels',
    vtuberName: 'Aria Skywind',
    bannerImage: 'https://images.pexels.com/photos/1254736/pexels-photo-1254736.jpeg?auto=compress&cs=tinysrgb&w=1600',
    profileImage: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Join Aria on her journey through mystical realms and epic adventures. Our guild focuses on exploration, community building, and sharing the magic of virtual worlds.',
    scrollPrice: 0.1,
    totalScrolls: 800,
    remainingScrolls: 448,
    holders: 152,
    guildBank: 15.4,
    profitDistributionAt: 50,
    isFeatured: true,
  },
  {
    id: 'luna-starfall',
    name: 'Lunar Eclipse',
    vtuberName: 'Luna Starfall',
    bannerImage: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1600',
    profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Experience the enchanting world of Luna Starfall, where music and magic collide in spectacular performances.',
    scrollPrice: 0.08,
    totalScrolls: 600,
    remainingScrolls: 234,
    holders: 89,
    guildBank: 8.7,
    profitDistributionAt: 30,
    isFeatured: true,
  },
  {
    id: 'kai-thunderbolt',
    name: 'Storm Riders',
    vtuberName: 'Kai Thunderbolt',
    bannerImage: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1600',
    profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'High-energy gaming sessions and competitive tournaments. Join Kai in conquering the digital battlefield.',
    scrollPrice: 0.12,
    totalScrolls: 1000,
    remainingScrolls: 567,
    holders: 203,
    guildBank: 22.1,
    profitDistributionAt: 60,
    isFeatured: true,
  },
  {
    id: 'nova-crystalheart',
    name: 'Crystal Guardians',
    vtuberName: 'Nova Crystalheart',
    bannerImage: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=1600',
    profileImage: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Mystical adventures and crystal magic await in Nova\'s enchanted realm.',
    scrollPrice: 0.09,
    totalScrolls: 500,
    remainingScrolls: 178,
    holders: 67,
    guildBank: 6.2,
    profitDistributionAt: 25,
  },
  {
    id: 'zara-phoenixfire',
    name: 'Phoenix Legion',
    vtuberName: 'Zara Phoenixfire',
    bannerImage: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1600',
    profileImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Rise from the ashes with Zara in epic fantasy campaigns and roleplay adventures.',
    scrollPrice: 0.11,
    totalScrolls: 750,
    remainingScrolls: 299,
    holders: 134,
    guildBank: 12.8,
    profitDistributionAt: 40,
  },
  {
    id: 'echo-shadowdancer',
    name: 'Shadow Covenant',
    vtuberName: 'Echo Shadowdancer',
    bannerImage: 'https://images.pexels.com/photos/1205301/pexels-photo-1205301.jpeg?auto=compress&cs=tinysrgb&w=1600',
    profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Stealth, strategy, and shadows. Join Echo in tactical gaming and mysterious adventures.',
    scrollPrice: 0.07,
    totalScrolls: 400,
    remainingScrolls: 156,
    holders: 45,
    guildBank: 4.1,
    profitDistributionAt: 20,
  },
];

export const proposals: Proposal[] = [
  {
    id: 'prop-1',
    guildId: 'aria-skywind',
    title: 'Fund a Limited Edition T-Shirt Run',
    description: 'Proposal to allocate 2 ETH from the guild treasury to produce 500 limited edition t-shirts featuring Aria\'s signature design. These will be sold to fans with profits returning to the guild bank.',
    submittedBy: '0x742d35Cc6636C0532925a3b8D72A7F5e4fDC0',
    status: 'Active',
    votesFor: 150,
    votesAgainst: 25,
    totalVotes: 175,
    createdAt: '2024-01-15',
  },
  {
    id: 'prop-2',
    guildId: 'aria-skywind',
    title: 'Sponsor a Gaming Tournament',
    description: 'Support the upcoming VTuber Championship by sponsoring with 1.5 ETH for prize pool and promotional activities.',
    submittedBy: '0x8f3E2c7B9d4A5e6f7C8b9A0c1d2E3f4g5h6i7',
    status: 'Passed',
    votesFor: 200,
    votesAgainst: 45,
    totalVotes: 245,
    createdAt: '2024-01-10',
  },
  {
    id: 'prop-3',
    guildId: 'luna-starfall',
    title: 'New Music Video Production',
    description: 'Allocate funds for producing a high-quality music video for Luna\'s upcoming original song.',
    submittedBy: '0x9e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9',
    status: 'Active',
    votesFor: 89,
    votesAgainst: 12,
    totalVotes: 101,
    createdAt: '2024-01-12',
  },
];

export const transactions: Transaction[] = [
  { id: 't1', type: 'income', description: 'Merch Sale', amount: 2.1, date: '2024-01-14' },
  { id: 't2', type: 'income', description: 'Sponsorship Deal', amount: 5.0, date: '2024-01-12' },
  { id: 't3', type: 'expense', description: 'Equipment Upgrade', amount: -1.2, date: '2024-01-10' },
  { id: 't4', type: 'income', description: 'Stream Donations', amount: 0.8, date: '2024-01-08' },
  { id: 't5', type: 'expense', description: 'Studio Rent', amount: -0.5, date: '2024-01-05' },
];